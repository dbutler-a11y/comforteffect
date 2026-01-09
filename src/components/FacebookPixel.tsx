"use client";

import Script from "next/script";
import { useEffect, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Facebook Pixel IDs
const PIXEL_IDS = ["715110788030883", "2792268817650753"] as const;

// Extend Window interface to include fbq
declare global {
  interface Window {
    fbq: facebook.Pixel.Event & {
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      push?: (...args: unknown[]) => void;
    };
    _fbq: typeof window.fbq;
  }
}

// Facebook Pixel types
declare namespace facebook {
  namespace Pixel {
    type Event = (
      type: "track" | "trackCustom" | "init" | "pageview",
      eventName?: string,
      parameters?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Track a standard Facebook Pixel event
 * @param eventName - The name of the event (e.g., "Purchase", "Lead", "ViewContent")
 * @param data - Optional event parameters
 */
export function trackEvent(
  eventName: string,
  data?: Record<string, unknown>
): void {
  if (typeof window !== "undefined" && window.fbq) {
    if (data) {
      window.fbq("track", eventName, data);
    } else {
      window.fbq("track", eventName);
    }
  }
}

/**
 * Track a custom Facebook Pixel event
 * @param eventName - The custom event name
 * @param data - Optional event parameters
 */
export function trackCustomEvent(
  eventName: string,
  data?: Record<string, unknown>
): void {
  if (typeof window !== "undefined" && window.fbq) {
    if (data) {
      window.fbq("trackCustom", eventName, data);
    } else {
      window.fbq("trackCustom", eventName);
    }
  }
}

/**
 * FacebookPixel Component
 * Initializes Facebook Pixel SDK and tracks page views
 */
export default function FacebookPixel(): React.ReactElement {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page view when route changes
  const handleRouteChange = useCallback(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, []);

  // Track page view on route change
  useEffect(() => {
    handleRouteChange();
  }, [pathname, searchParams, handleRouteChange]);

  return (
    <>
      {/* Facebook Pixel Base Code */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            // Initialize both pixels
            fbq('init', '${PIXEL_IDS[0]}');
            fbq('init', '${PIXEL_IDS[1]}');

            // Track initial page view
            fbq('track', 'PageView');
          `,
        }}
      />
      {/* Noscript fallback for both pixels */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_IDS[0]}&ev=PageView&noscript=1`}
          alt=""
        />
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_IDS[1]}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
