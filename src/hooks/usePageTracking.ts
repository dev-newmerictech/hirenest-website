import { useEffect } from "react";

/**
 * Hook to track page views and maintain active session presence.
 * 
 * Disabled because Convex free tier limits were exceeded.
 * Returning a no-op implementation to prevent UI crashes.
 */
export function usePageTracking(): void {
  // Analytics temporarily disabled
  useEffect(() => {
    // No-op
  }, []);
}
