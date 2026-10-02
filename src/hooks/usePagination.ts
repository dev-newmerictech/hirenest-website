/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback, useRef } from "react";

/**
 * usePagination hook - Simplified reusable pagination state management
 *
 * @param postsPerPage - Number of posts to load per page
 * @returns Pagination state and controls
 *
 * @example
 * ```tsx
 * const { cursor, posts, loading, hasMore, loadMore, reset, updatePosts }
 *   = usePagination(9);
 *
 * // Use in Convex query
 * const result = useQuery(api.posts.getPaginatedPosts, {
 *   cursor,
 *   limit: postsPerPage,
 * });
 *
 * // Update posts when result arrives
 * useEffect(() => {
 *   if (result) updatePosts(result);
 * }, [result, updatePosts]);
 * ```
 */
export function usePagination(postsPerPage: number) {
  const [cursor, setCursor] = useState<string | undefined>(undefined);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const isInitialLoadRef = useRef(true);

  /**
   * Reset pagination to initial state
   * Call this when filters change (e.g., tag or author changes)
   */
  const reset = useCallback(() => {
    setCursor(undefined);
    setPosts([]);
    setLoading(false);
    setHasMore(true);
    isInitialLoadRef.current = true;
  }, []);

  /**
   * Load more posts
   * Updates cursor to trigger next page fetch
   */
  const loadMore = useCallback((nextCursor: string) => {
    if (!loading) {
      setLoading(true);
      setCursor(nextCursor);
    }
  }, [loading]);

  /**
   * Update posts state from paginated query result
   * Call this when paginated data arrives from Convex
   */
  const updatePosts = useCallback((result: {
    posts: any[];
    nextCursor?: string;
    hasMore: boolean;
  }) => {
    setPosts((prev) => {
      if (isInitialLoadRef.current) {
        // Initial load - replace all posts
        isInitialLoadRef.current = false;
        return result.posts;
      } else {
        // Load more - append posts
        return [...prev, ...result.posts];
      }
    });
    setHasMore(result.hasMore);
    setLoading(false);
  }, []); // stable reference - no dependency on cursor

  return {
    cursor,
    posts,
    loading,
    hasMore,
    loadMore,
    reset,
    updatePosts,
    postsPerPage,
  };
}
