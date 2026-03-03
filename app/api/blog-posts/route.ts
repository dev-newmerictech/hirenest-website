import { NextRequest, NextResponse } from "next/server";
import { fetchBlogPosts, clearConvexCache } from "@/lib/convex-server";

/**
 * OPTIMIZED blog posts API with aggressive caching.
 *
 * Bandwidth per request: ~5-10 KB (vs ~500 KB from Convex for all posts)
 */

const CACHE_TTL = 172800; // 48 hours
const STALE_WHILE_REVALIDATE = 3600; // 1 hour stale while revalidate

export async function GET(request: NextRequest) {
  try {
    // Fetch from Convex (uses in-memory cache)
    const posts = await fetchBlogPosts();

    return NextResponse.json(posts, {
      headers: {
        "Cache-Control": `public, s-maxage=${CACHE_TTL}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`,
        "Vary": "Accept",
      },
    });
  } catch (error) {
    console.error("[blog-posts API] Failed to fetch posts:", error);
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
}

// Handle POST for cache invalidation
export async function POST(request: NextRequest) {
  try {
    // Clear all blog-related cache
    clearConvexCache("blog-posts");
    clearConvexCache("blog");

    return NextResponse.json({
      success: true,
      message: "Blog cache cleared",
    });
  } catch (error) {
    console.error("[blog-posts API] Failed to clear cache:", error);
    return NextResponse.json({ error: "Failed to clear cache" }, { status: 500 });
  }
}

// Enable caching (48 hours)
export const revalidate = 172800; // 48 hours
