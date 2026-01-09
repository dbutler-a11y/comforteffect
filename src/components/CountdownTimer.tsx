"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface CountdownTimerProps {
  /** Duration in minutes */
  durationMinutes?: number;
  /** Callback when timer expires */
  onExpire?: () => void;
  /** Storage key for persisting timer across page reloads */
  storageKey?: string;
  /** Custom label text */
  label?: string;
  /** Show compact version */
  compact?: boolean;
}

interface TimeLeft {
  minutes: number;
  seconds: number;
  totalSeconds: number;
}

export default function CountdownTimer({
  durationMinutes = 30,
  onExpire,
  storageKey = "coaching_offer_timer",
  label = "Limited-time offer expires in:",
  compact = false,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isExpired, setIsExpired] = useState(false);
  const mountedRef = useRef(false);
  const onExpireRef = useRef(onExpire);

  // Keep onExpire ref up to date
  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  // Initialize timer on mount
  useEffect(() => {
    mountedRef.current = true;

    const initializeTimer = () => {
      const stored = localStorage.getItem(storageKey);
      let endTime: number;
      const now = Date.now();

      if (stored) {
        const parsedEnd = parseInt(stored, 10);
        if (!isNaN(parsedEnd) && parsedEnd > now) {
          endTime = parsedEnd;
        } else {
          // Timer expired, set new one
          endTime = now + durationMinutes * 60 * 1000;
          localStorage.setItem(storageKey, endTime.toString());
        }
      } else {
        // No stored timer, create new one
        endTime = now + durationMinutes * 60 * 1000;
        localStorage.setItem(storageKey, endTime.toString());
      }

      return endTime;
    };

    const endTime = initializeTimer();

    const calculateTimeLeft = (): TimeLeft | null => {
      const diff = endTime - Date.now();
      if (diff <= 0) {
        return null;
      }
      const totalSeconds = Math.floor(diff / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return { minutes, seconds, totalSeconds };
    };

    // Initial calculation
    const initial = calculateTimeLeft();
    if (initial) {
      setTimeLeft(initial);
    } else {
      setIsExpired(true);
      onExpireRef.current?.();
    }

    // Update every second
    const interval = setInterval(() => {
      const remaining = calculateTimeLeft();
      if (remaining) {
        setTimeLeft(remaining);
      } else {
        setIsExpired(true);
        onExpireRef.current?.();
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [durationMinutes, storageKey]);

  // Reset timer function (can be exposed via ref if needed)
  const resetTimer = useCallback(() => {
    const newEndTime = Date.now() + durationMinutes * 60 * 1000;
    localStorage.setItem(storageKey, newEndTime.toString());
    setIsExpired(false);
    setTimeLeft({
      minutes: durationMinutes,
      seconds: 0,
      totalSeconds: durationMinutes * 60,
    });
  }, [durationMinutes, storageKey]);

  // Don't render anything until we have timeLeft or isExpired (to avoid hydration mismatch)
  if (!timeLeft && !isExpired) {
    return null;
  }

  if (isExpired) {
    return (
      <div className={`${compact ? "inline-flex items-center gap-2" : "text-center"}`}>
        <span className="text-zinc-500 text-sm">Offer expired</span>
        <button
          onClick={resetTimer}
          className="text-sm text-zinc-900 underline hover:no-underline"
        >
          Refresh offer
        </button>
      </div>
    );
  }

  if (!timeLeft) {
    return null;
  }

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  // Calculate urgency level for styling
  const getUrgencyClass = (): string => {
    if (timeLeft.totalSeconds <= 60) {
      return "text-red-600 animate-pulse";
    }
    if (timeLeft.totalSeconds <= 300) {
      return "text-red-600";
    }
    if (timeLeft.totalSeconds <= 600) {
      return "text-amber-600";
    }
    return "text-zinc-900";
  };

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 text-sm">
        <svg
          className="w-4 h-4 text-zinc-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-zinc-500">{label}</span>
        <span className={`font-semibold tabular-nums ${getUrgencyClass()}`}>
          {formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
        </span>
      </div>
    );
  }

  return (
    <div className="text-center">
      <p className="text-sm text-zinc-500 mb-3">{label}</p>
      <div className="inline-flex items-center gap-2 bg-zinc-50 rounded-full px-6 py-3 border border-zinc-200">
        <svg
          className="w-5 h-5 text-zinc-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="flex items-center gap-1">
          <div className="flex flex-col items-center">
            <span
              className={`text-2xl font-semibold tabular-nums ${getUrgencyClass()}`}
            >
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="text-xs text-zinc-400 uppercase tracking-wider">
              min
            </span>
          </div>
          <span className={`text-2xl font-semibold ${getUrgencyClass()}`}>:</span>
          <div className="flex flex-col items-center">
            <span
              className={`text-2xl font-semibold tabular-nums ${getUrgencyClass()}`}
            >
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="text-xs text-zinc-400 uppercase tracking-wider">
              sec
            </span>
          </div>
        </div>
      </div>
      {timeLeft.totalSeconds <= 300 && (
        <p className="text-xs text-red-600 mt-2 animate-pulse">
          Hurry! This offer is about to expire
        </p>
      )}
    </div>
  );
}
