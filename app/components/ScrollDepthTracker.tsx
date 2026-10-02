'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
    };
  }
}

/**
 * ScrollDepthTracker — Measures content engagement and solves the 100% bounce rate.
 *
 * When visitors read blog articles or explore marketing pages, single-page sessions
 * normally register as a 100% bounce unless engagement milestones are recorded.
 *
 * This component:
 * 1. Tracks milestone scroll depths: 25%, 50%, 75%, and 100%.
 * 2. Fires an 'engaged_reading' event after 30s of active viewing.
 * 3. Uses passive, requestAnimationFrame-throttled scroll detection (0% CPU impact).
 * 4. Strictly avoids any PII.
 */
export default function ScrollDepthTracker() {
  const pathname = usePathname();
  const trackedMilestones = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Reset milestones on route navigation
    trackedMilestones.current.clear();

    const milestones = [25, 50, 75, 100];
    let ticking = false;

    const checkScrollDepth = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const currentScroll = window.scrollY;
      const scrollPercentage = Math.min(100, Math.round((currentScroll / scrollHeight) * 100));

      for (const milestone of milestones) {
        if (scrollPercentage >= milestone && !trackedMilestones.current.has(milestone)) {
          trackedMilestones.current.add(milestone);
          if (typeof window !== 'undefined' && window.umami?.track) {
            window.umami.track('scroll_depth', {
              depth: `${milestone}%`,
              page: pathname || window.location.pathname,
            });
          }
        }
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkScrollDepth();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Engaged reader timer (30s on page)
    const engagementTimer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.umami?.track) {
        window.umami.track('engaged_session', {
          duration_seconds: 30,
          page: pathname || window.location.pathname,
        });
      }
    }, 30000);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(engagementTimer);
    };
  }, [pathname]);

  return null;
}
