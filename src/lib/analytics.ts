/**
 * Analytics Helper Library
 * Provides functions for tracking user events and sending analytics data
 */

import { trackEvent, trackCustomEvent } from "@/components/FacebookPixel";

// Type definitions
export interface AnalyticsData {
  eventType: string;
  sessionDuration?: number;
  scrollDepth?: number;
  pageUrl?: string;
  referrer?: string;
  timestamp?: string;
  metadata?: Record<string, unknown>;
}

export interface PurchaseData {
  value: number;
  productId: string;
  currency?: string;
  contentName?: string;
}

export interface VideoPlayData {
  videoId: string;
  videoTitle?: string;
  duration?: number;
  currentTime?: number;
}

/**
 * Send analytics data to the server
 * @param eventType - Type of event being tracked
 * @param data - Additional event data
 */
export async function sendAnalytics(
  eventType: string,
  data?: Record<string, unknown>
): Promise<boolean> {
  try {
    const payload: AnalyticsData = {
      eventType,
      pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
      referrer: typeof document !== "undefined" ? document.referrer : undefined,
      timestamp: new Date().toISOString(),
      metadata: data,
    };

    const response = await fetch("/api/analytics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("[Analytics] Failed to send event:", eventType);
      return false;
    }

    return true;
  } catch (error) {
    console.error("[Analytics] Error sending event:", error);
    return false;
  }
}

/**
 * Track a page view
 * Sends to both Facebook Pixel and internal analytics
 */
export function trackPageView(pageTitle?: string): void {
  // Track with Facebook Pixel
  trackEvent("PageView");

  // Send to internal analytics
  sendAnalytics("page_view", {
    pageTitle: pageTitle || (typeof document !== "undefined" ? document.title : undefined),
    path: typeof window !== "undefined" ? window.location.pathname : undefined,
  });
}

/**
 * Track checkout button click
 * @param location - Where the click occurred (e.g., "hero", "footer", "pricing")
 */
export function trackCheckoutClick(location: string): void {
  // Track with Facebook Pixel - InitiateCheckout is a standard event
  trackEvent("InitiateCheckout", {
    content_category: "checkout",
    content_name: "The Comfort Effect",
    value: 17.0,
    currency: "USD",
  });

  // Send to internal analytics
  sendAnalytics("checkout_click", {
    location,
    productName: "The Comfort Effect",
    price: 17.0,
  });
}

/**
 * Track a purchase completion
 * @param value - Purchase amount
 * @param productId - Product identifier
 */
export function trackPurchase(value: number, productId: string): void {
  const purchaseData: PurchaseData = {
    value,
    productId,
    currency: "USD",
    contentName: "The Comfort Effect",
  };

  // Track with Facebook Pixel - Purchase is a standard event
  trackEvent("Purchase", {
    value: purchaseData.value,
    currency: purchaseData.currency,
    content_ids: [purchaseData.productId],
    content_name: purchaseData.contentName,
    content_type: "product",
  });

  // Send to internal analytics
  sendAnalytics("purchase", {
    ...purchaseData,
    purchaseTime: new Date().toISOString(),
  });
}

/**
 * Track a lead submission
 * Used when user submits email or contact form
 */
export function trackLead(leadData?: Record<string, unknown>): void {
  // Track with Facebook Pixel - Lead is a standard event
  trackEvent("Lead", {
    content_name: "Newsletter Signup",
    content_category: "lead",
  });

  // Send to internal analytics
  sendAnalytics("lead", {
    source: typeof window !== "undefined" ? window.location.pathname : undefined,
    ...leadData,
  });
}

/**
 * Track video play event
 * @param videoId - Identifier for the video
 * @param additionalData - Optional additional data about the video
 */
export function trackVideoPlay(
  videoId: string,
  additionalData?: Partial<VideoPlayData>
): void {
  const videoData: VideoPlayData = {
    videoId,
    ...additionalData,
  };

  // Track with Facebook Pixel as custom event
  trackCustomEvent("VideoPlay", {
    video_id: videoData.videoId,
    video_title: videoData.videoTitle,
    duration: videoData.duration,
  });

  // Send to internal analytics
  sendAnalytics("video_play", { ...videoData });
}

/**
 * Track scroll depth
 * @param depth - Percentage of page scrolled (0-100)
 */
export function trackScrollDepth(depth: number): void {
  // Only track milestone depths
  const milestones = [25, 50, 75, 90, 100];
  const milestone = milestones.find((m) => depth >= m);

  if (milestone) {
    // Track as custom event with Facebook Pixel
    trackCustomEvent("ScrollDepth", {
      scroll_depth: milestone,
      page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
    });

    // Send to internal analytics
    sendAnalytics("scroll_depth", {
      depth: milestone,
      actualDepth: Math.round(depth),
    });
  }
}

/**
 * Track session duration
 * @param duration - Session duration in seconds
 */
export function trackSessionDuration(duration: number): void {
  // Track as custom event
  trackCustomEvent("SessionDuration", {
    duration_seconds: duration,
    duration_minutes: Math.round(duration / 60),
  });

  // Send to internal analytics with high priority (beacon)
  sendAnalytics("session_duration", {
    durationSeconds: duration,
    durationMinutes: Math.round(duration / 60),
  });
}

/**
 * Track add to cart event
 * @param productId - Product identifier
 * @param value - Product value
 */
export function trackAddToCart(productId: string, value: number): void {
  trackEvent("AddToCart", {
    content_ids: [productId],
    content_type: "product",
    value,
    currency: "USD",
  });

  sendAnalytics("add_to_cart", {
    productId,
    value,
    currency: "USD",
  });
}

/**
 * Track view content event (e.g., product page view)
 * @param contentId - Content identifier
 * @param contentName - Content name
 */
export function trackViewContent(contentId: string, contentName: string): void {
  trackEvent("ViewContent", {
    content_ids: [contentId],
    content_name: contentName,
    content_type: "product",
  });

  sendAnalytics("view_content", {
    contentId,
    contentName,
  });
}

/**
 * Track search event
 * @param searchQuery - The search term
 */
export function trackSearch(searchQuery: string): void {
  trackEvent("Search", {
    search_string: searchQuery,
  });

  sendAnalytics("search", {
    query: searchQuery,
  });
}

/**
 * Track complete registration event
 */
export function trackCompleteRegistration(registrationData?: Record<string, unknown>): void {
  trackEvent("CompleteRegistration", {
    content_name: "Account Registration",
  });

  sendAnalytics("complete_registration", registrationData);
}
