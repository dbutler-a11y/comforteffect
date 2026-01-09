"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import {
  trackScrollDepth,
  trackSessionDuration,
  sendAnalytics,
} from "@/lib/analytics";

interface UseAnalyticsOptions {
  /** Whether to track scroll depth (default: true) */
  trackScroll?: boolean;
  /** Whether to track session duration (default: true) */
  trackSession?: boolean;
  /** Scroll depth thresholds to track (default: [25, 50, 75, 90, 100]) */
  scrollThresholds?: number[];
  /** Debounce time for scroll tracking in ms (default: 250) */
  scrollDebounce?: number;
}

interface AnalyticsState {
  sessionStartTime: number;
  maxScrollDepth: number;
  trackedScrollMilestones: Set<number>;
  isPageVisible: boolean;
  totalVisibleTime: number;
  lastVisibleTime: number;
}

/**
 * Custom hook for tracking user analytics
 * Tracks scroll depth, session duration, and sends data on page exit
 */
export function useAnalytics(options: UseAnalyticsOptions = {}): void {
  const {
    trackScroll = true,
    trackSession = true,
    scrollThresholds = [25, 50, 75, 90, 100],
    scrollDebounce = 250,
  } = options;

  // Use refs to persist state across renders without causing re-renders
  // Initialize with null to avoid calling Date.now() during render
  const stateRef = useRef<AnalyticsState | null>(null);

  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * Calculate current scroll depth percentage
   */
  const getScrollDepth = useCallback((): number => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return 0;
    }

    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Handle case where document is shorter than viewport
    if (documentHeight <= windowHeight) {
      return 100;
    }

    const scrollableHeight = documentHeight - windowHeight;
    const scrollPercentage = (scrollTop / scrollableHeight) * 100;

    return Math.min(Math.round(scrollPercentage), 100);
  }, []);

  /**
   * Handle scroll event with debouncing
   */
  const handleScroll = useCallback(() => {
    if (!trackScroll) return;

    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Debounce scroll tracking
    scrollTimeoutRef.current = setTimeout(() => {
      const currentDepth = getScrollDepth();
      const state = stateRef.current;
      if (!state) return;

      // Update max scroll depth
      if (currentDepth > state.maxScrollDepth) {
        state.maxScrollDepth = currentDepth;
      }

      // Check for new milestone achievements
      for (const threshold of scrollThresholds) {
        if (
          currentDepth >= threshold &&
          !state.trackedScrollMilestones.has(threshold)
        ) {
          state.trackedScrollMilestones.add(threshold);
          trackScrollDepth(threshold);
        }
      }
    }, scrollDebounce);
  }, [trackScroll, scrollThresholds, scrollDebounce, getScrollDepth]);

  /**
   * Handle visibility change (tab switching)
   */
  const handleVisibilityChange = useCallback(() => {
    const state = stateRef.current;
    if (!state) return;
    const now = Date.now();

    if (document.visibilityState === "hidden") {
      // Page became hidden - record visible time
      if (state.isPageVisible) {
        state.totalVisibleTime += now - state.lastVisibleTime;
        state.isPageVisible = false;
      }
    } else {
      // Page became visible
      state.lastVisibleTime = now;
      state.isPageVisible = true;
    }
  }, []);

  /**
   * Get total session duration including visibility tracking
   */
  const getSessionDuration = useCallback((): number => {
    const state = stateRef.current;
    if (!state) return 0;
    const now = Date.now();

    let totalTime = state.totalVisibleTime;
    if (state.isPageVisible) {
      totalTime += now - state.lastVisibleTime;
    }

    return Math.round(totalTime / 1000); // Convert to seconds
  }, []);

  /**
   * Send exit analytics
   */
  const sendExitAnalytics = useCallback(() => {
    const state = stateRef.current;
    if (!state) return;
    const sessionDuration = getSessionDuration();

    // Track session duration
    if (trackSession && sessionDuration > 0) {
      trackSessionDuration(sessionDuration);
    }

    // Send comprehensive exit data using beacon API for reliability
    const exitData = {
      eventType: "page_exit",
      sessionDuration,
      maxScrollDepth: state.maxScrollDepth,
      scrollMilestones: Array.from(state.trackedScrollMilestones),
      pageUrl: window.location.href,
      timestamp: new Date().toISOString(),
    };

    // Use sendBeacon for reliable delivery on page exit
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(exitData)], {
        type: "application/json",
      });
      navigator.sendBeacon("/api/analytics", blob);
    } else {
      // Fallback to regular fetch
      sendAnalytics("page_exit", {
        sessionDuration,
        maxScrollDepth: state.maxScrollDepth,
        scrollMilestones: Array.from(state.trackedScrollMilestones),
      });
    }
  }, [trackSession, getSessionDuration]);

  /**
   * Handle page unload/exit
   */
  const handleBeforeUnload = useCallback(() => {
    sendExitAnalytics();
  }, [sendExitAnalytics]);

  /**
   * Handle page hide (more reliable than beforeunload on mobile)
   */
  const handlePageHide = useCallback(() => {
    sendExitAnalytics();
  }, [sendExitAnalytics]);

  // Set up event listeners
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize state
    stateRef.current = {
      sessionStartTime: Date.now(),
      maxScrollDepth: 0,
      trackedScrollMilestones: new Set<number>(),
      isPageVisible: true,
      totalVisibleTime: 0,
      lastVisibleTime: Date.now(),
    };

    // Add event listeners
    if (trackScroll) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("pagehide", handlePageHide);

    // Track initial scroll position (in case user refreshes partway down)
    if (trackScroll) {
      handleScroll();
    }

    // Cleanup
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      if (trackScroll) {
        window.removeEventListener("scroll", handleScroll);
      }

      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, [
    trackScroll,
    handleScroll,
    handleVisibilityChange,
    handleBeforeUnload,
    handlePageHide,
  ]);
}

/**
 * Hook to get current scroll depth (for UI purposes)
 */
export function useScrollDepth(): number {
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateScrollDepth = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (documentHeight <= windowHeight) {
        setScrollDepth(100);
        return;
      }

      const scrollableHeight = documentHeight - windowHeight;
      setScrollDepth(
        Math.min(Math.round((scrollTop / scrollableHeight) * 100), 100)
      );
    };

    window.addEventListener("scroll", updateScrollDepth, { passive: true });
    updateScrollDepth();

    return () => {
      window.removeEventListener("scroll", updateScrollDepth);
    };
  }, []);

  return scrollDepth;
}

export default useAnalytics;
