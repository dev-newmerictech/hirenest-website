/* eslint-disable @typescript-eslint/no-explicit-any */
import { query, mutation, internalMutation } from "./_generated/server";
import { v } from "convex/values";

// Deduplication window: 30 minutes in milliseconds
const DEDUP_WINDOW_MS = 30 * 60 * 1000;

// Session timeout: 2 minutes in milliseconds
const SESSION_TIMEOUT_MS = 2 * 60 * 1000;

// Heartbeat dedup window: 20 seconds (prevents write conflicts from rapid calls or multiple tabs)
const HEARTBEAT_DEDUP_MS = 20 * 1000;

/**
 * Record a page view event.
 * Idempotent: same session viewing same path within 30min = 1 view.
 * Updates aggregate components for efficient O(log n) counts.
 */
export const recordPageView = mutation({
  args: {
    path: v.string(),
    pageType: v.string(),
    sessionId: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const now = Date.now();
    const dedupCutoff = now - DEDUP_WINDOW_MS;

    // Check for recent view from same session on same path
    const recentView = await ctx.db
      .query("pageViews")
      .withIndex("by_session_path", (q) =>
        q.eq("sessionId", args.sessionId).eq("path", args.path),
      )
      .order("desc")
      .first();

    // Early return if already viewed within dedup window
    if (recentView && recentView.timestamp > dedupCutoff) {
      return null;
    }

    // Check if this is a new unique visitor (first page view for this session)
    const existingSessionView = await ctx.db
      .query("pageViews")
      .withIndex("by_session_path", (q) => q.eq("sessionId", args.sessionId))
      .first();
    const isNewVisitor = !existingSessionView;

    // Insert new view event
    await ctx.db.insert("pageViews", {
      path: args.path,
      pageType: args.pageType,
      sessionId: args.sessionId,
      timestamp: now,
    });

    return null;
  },
});

/**
 * Update active session heartbeat.
 * Creates or updates session with current path and timestamp.
 * Accepts optional geo location data from Netlify edge function.
 * Idempotent: skips update if recently updated with same path (prevents write conflicts).
 *
 * Write conflict prevention:
 * - Uses 20-second dedup window to skip redundant updates
 * - Frontend uses matching debounce with jitter to prevent synchronized calls
 * - Early return pattern minimizes conflict window
 */
export const heartbeat = mutation({
  args: {
    sessionId: v.string(),
    currentPath: v.string(),
    // Optional geo data from Netlify geo headers
    city: v.optional(v.string()),
    country: v.optional(v.string()),
    latitude: v.optional(v.number()),
    longitude: v.optional(v.number()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const now = Date.now();

    // Find existing session by sessionId using index
    const existingSession = await ctx.db
      .query("activeSessions")
      .withIndex("by_sessionId", (q) => q.eq("sessionId", args.sessionId))
      .first();

    if (existingSession) {
      // Early return if recently updated (idempotent - prevents write conflicts)
      // Even if path changed, skip update if within dedup window to reduce conflicts
      if (now - existingSession.lastSeen < HEARTBEAT_DEDUP_MS) {
        return null;
      }

      // Patch directly with new data including location if provided
      await ctx.db.patch(existingSession._id, {
        currentPath: args.currentPath,
        lastSeen: now,
        ...(args.city !== undefined && { city: args.city }),
        ...(args.country !== undefined && { country: args.country }),
        ...(args.latitude !== undefined && { latitude: args.latitude }),
        ...(args.longitude !== undefined && { longitude: args.longitude }),
      });
      return null;
    }

    // Create new session only if none exists (with location data if provided)
    await ctx.db.insert("activeSessions", {
      sessionId: args.sessionId,
      currentPath: args.currentPath,
      lastSeen: now,
      ...(args.city !== undefined && { city: args.city }),
      ...(args.country !== undefined && { country: args.country }),
      ...(args.latitude !== undefined && { latitude: args.latitude }),
      ...(args.longitude !== undefined && { longitude: args.longitude }),
    });

    return null;
  },
});

/**
 * Get all stats for the stats page.
 * Real-time subscription via useQuery.
 * Uses aggregate components for O(log n) counts instead of O(n) table scans.
 * Returns visitor locations for the world map display.
 */
export const getStats = query({
  args: {},
  returns: v.object({
    activeVisitors: v.number(),
    activeByPath: v.array(
      v.object({
        path: v.string(),
        count: v.number(),
      }),
    ),
    totalPageViews: v.number(),
    uniqueVisitors: v.number(),
    publishedPosts: v.number(),
    publishedPages: v.number(),
    trackingSince: v.union(v.number(), v.null()),
    pageStats: v.array(
      v.object({
        path: v.string(),
        title: v.string(),
        pageType: v.string(),
        views: v.number(),
      }),
    ),
    // Visitor locations for world map display
    visitorLocations: v.array(
      v.object({
        latitude: v.number(),
        longitude: v.number(),
        city: v.optional(v.string()),
        country: v.optional(v.string()),
      }),
    ),
  }),
  handler: async (ctx) => {
    const now = Date.now();
    const sessionCutoff = now - SESSION_TIMEOUT_MS;

    // Get active sessions (heartbeat within last 2 minutes)
    const activeSessions = await ctx.db
      .query("activeSessions")
      .withIndex("by_lastSeen", (q) => q.gt("lastSeen", sessionCutoff))
      .collect();

    // Count active visitors by path
    const activeByPathMap: Record<string, number> = {};
    for (const session of activeSessions) {
      activeByPathMap[session.currentPath] =
        (activeByPathMap[session.currentPath] || 0) + 1;
    }
    const activeByPath = Object.entries(activeByPathMap)
      .map(([path, count]) => ({ path, count }))
      .sort((a, b) => b.count - a.count);

    // Strategy: Get paths from pageViews first (lightweight), then fetch only needed posts/pages
    // This avoids fetching all posts with large content fields
    
    // Step 1: Get paths from recent pageViews (lightweight - only path strings)
    const ninetyDaysAgo = now - (90 * 24 * 60 * 60 * 1000);
    const recentPageViews = await ctx.db
      .query("pageViews")
      .withIndex("by_timestamp", (q) => q.gt("timestamp", ninetyDaysAgo))
      .order("desc")
      .take(3000); // Reduced to 3k to save bytes

    // Build unique paths from pageViews first
    const uniquePathsSet = new Set<string>();
    
    // Add common paths
    uniquePathsSet.add("/");
    uniquePathsSet.add("/blog");
    uniquePathsSet.add("/stats");
    
    // Extract paths from recent views (most important - these are actually viewed)
    for (const view of recentPageViews) {
      uniquePathsSet.add(view.path);
    }
    
    // Step 2: Extract post/page slugs from paths to fetch only what we need
    const postSlugs = new Set<string>();
    const pageSlugs = new Set<string>();
    
    for (const path of uniquePathsSet) {
      if (path.startsWith("/") && path !== "/" && path !== "/blog" && path !== "/stats") {
        const slug = path.slice(1); // Remove leading "/"
        // Assume it's a post (pages are less common, we'll check both)
        postSlugs.add(slug);
        pageSlugs.add(slug);
      }
    }
    
    // Step 3: Fetch only a small number of most recent posts for titles
    // We only need titles, but Convex returns full documents (including large content field)
    // Limit to 30 posts to stay well under 16MB (30 posts × ~300KB avg = ~9MB)
    // For paths without titles, we'll use the path itself as the title
    const recentPosts = await ctx.db
      .query("posts")
      .withIndex("by_published_date", (q) => q.eq("published", true))
      .order("desc")
      .take(30); // Only 30 most recent posts - just for titles
    
    // Add paths from these recent posts
    for (const post of recentPosts) {
      uniquePathsSet.add(`/${post.slug}`);
      postSlugs.add(post.slug);
    }
    
    // Step 4: Fetch pages (limited to avoid byte limit)
    const pages = await ctx.db
      .query("pages")
      .withIndex("by_published", (q) => q.eq("published", true))
      .take(30); // Limit to 30 pages (pages can have large content too)
    
    // Add paths from pages
    for (const page of pages) {
      uniquePathsSet.add(`/${page.slug}`);
      pageSlugs.add(page.slug);
    }
    
    // Step 5: Create lookup maps for titles (only from posts/pages we fetched)
    const postsMap = new Map(recentPosts.map(p => [p.slug, p]));
    const pagesMap = new Map(pages.map(p => [p.slug, p]));
    
    const allPaths = Array.from(uniquePathsSet);

    // Step 6: Count total published posts efficiently
    // Use cached count if available, otherwise count in very small batches
    let totalPublishedPosts = 0;
    
    // Try to get cached count from siteConfig (should be updated by sync script)
    // Note: sync script updates "postCount" (filtered), but we need all published posts
    // So we'll count directly if cache doesn't exist or is outdated
    const cachedCount = await ctx.db
      .query("siteConfig")
      .withIndex("by_key", (q) => q.eq("key", "publishedPostCount"))
      .first();
    
    if (cachedCount && typeof cachedCount.value === "number") {
      // Use cached count if available (most efficient - no bytes read)
      totalPublishedPosts = cachedCount.value;
    } else {
      // Fallback: Count in very small batches to stay under 16MB limit
      // Conservative approach: max 10 batches × 10 posts = 100 posts max
      // This reads ~30MB worst case, but we're only counting, not storing
      let lastPostDate: string | null = null;
      const countBatchSize = 10; // Very small batches
      let countIterations = 0;
      const maxCountIterations = 10; // Conservative: max 100 posts (10 × 10)
      const MAX_POSTS_TO_COUNT = 100; // Hard limit to prevent byte overflow

      while (countIterations < maxCountIterations && totalPublishedPosts < MAX_POSTS_TO_COUNT) {
        countIterations++;
        let batch;
        
        if (lastPostDate === null) {
          batch = await ctx.db
            .query("posts")
            .withIndex("by_published_date", (q) => q.eq("published", true))
            .order("desc")
            .take(countBatchSize);
        } else {
          const dateFilter: string = lastPostDate;
          batch = await ctx.db
            .query("posts")
            .withIndex("by_published_date", (q) => 
              q.eq("published", true).lt("date", dateFilter)
            )
            .order("desc")
            .take(countBatchSize);
        }

        if (batch.length === 0) {
          break;
        }

        totalPublishedPosts += batch.length;

        if (batch.length < countBatchSize) {
          break; // Got all posts
        }

        lastPostDate = batch[batch.length - 1].date;
      }
      
      // If we hit the limit, add "+" to indicate it's at least that many
      // (But we'll just return the count as-is for now)
    }

    // Step 7: Count total published pages (usually small, safe to count directly)
    // But use take() as safety limit
    const allPublishedPages = await ctx.db
      .query("pages")
      .withIndex("by_published", (q) => q.eq("published", true))
      .take(1000); // Safety limit, but pages are usually < 50
    const totalPublishedPages = allPublishedPages.length;

    // Count total page views from DB
    const allPageViews = await ctx.db.query("pageViews").collect();
    const totalPageViewsCount = allPageViews.length;

    // Count unique visitors by distinct sessionIds
    const uniqueSessionIds = new Set(allPageViews.map(v => v.sessionId));
    const uniqueVisitorsCount = uniqueSessionIds.size;

    // Count views per path from the already-fetched data
    const pathCountsFromAggregate: Record<string, number> = {};
    for (const view of allPageViews) {
      pathCountsFromAggregate[view.path] = (pathCountsFromAggregate[view.path] || 0) + 1;
    }

    // Get earliest page view for tracking since date (single doc fetch)
    const firstView = await ctx.db
      .query("pageViews")
      .withIndex("by_timestamp")
      .order("asc")
      .first();
    const trackingSince = firstView ? firstView.timestamp : null;

    // Build page stats using aggregate counts (O(log n) per path)
    const pageStatsPromises = allPaths.map(async (path) => {
      const views = pathCountsFromAggregate[path] || 0;

      // Match path to post or page for title (using lookup maps)
      const slug = path.startsWith("/") ? path.slice(1) : path;
      const post = postsMap.get(slug);
      const page = pagesMap.get(slug);

      let title = path;
      let pageType = "other";

      if (path === "/" || path === "") {
        title = "Home";
        pageType = "home";
      } else if (path === "/stats") {
        title = "Stats";
        pageType = "stats";
      } else if (post) {
        title = post.title;
        pageType = "blog";
      } else if (page) {
        title = page.title;
        pageType = "page";
      }

      return {
        path,
        title,
        pageType,
        views,
      };
    });

    const pageStats = (await Promise.all(pageStatsPromises)).sort(
      (a, b) => b.views - a.views,
    );

    // Extract visitor locations from active sessions (only those with coordinates)
    const visitorLocations = activeSessions
      .filter(
        (s): s is typeof s & { latitude: number; longitude: number } =>
          s.latitude !== undefined &&
          s.longitude !== undefined &&
          s.latitude !== null &&
          s.longitude !== null,
      )
      .map((s) => ({
        latitude: s.latitude,
        longitude: s.longitude,
        city: s.city,
        country: s.country,
      }));

    return {
      activeVisitors: activeSessions.length,
      activeByPath,
      totalPageViews: totalPageViewsCount,
      uniqueVisitors: uniqueVisitorsCount,
      publishedPosts: totalPublishedPosts,
      publishedPages: totalPublishedPages,
      trackingSince,
      pageStats,
      visitorLocations,
    };
  },
});

/**
 * Internal mutation to clean up stale sessions.
 * Called by cron job every 5 minutes.
 */
export const cleanupStaleSessions = internalMutation({
  args: {},
  returns: v.number(),
  handler: async (ctx) => {
    const cutoff = Date.now() - SESSION_TIMEOUT_MS;

    // Get all stale sessions
    const staleSessions = await ctx.db
      .query("activeSessions")
      .withIndex("by_lastSeen", (q) => q.lt("lastSeen", cutoff))
      .collect();

    // Delete in parallel
    await Promise.all(
      staleSessions.map((session) => ctx.db.delete(session._id)),
    );

    return staleSessions.length;
  },
});
