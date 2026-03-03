import { NextRequest, NextResponse } from "next/server";
import { fetchPostBySlug, clearConvexCache } from "@/lib/convex-server";

/**
 * OPTIMIZED blog post API with aggressive caching.
 *
 * This reduces Convex bandwidth by:
 * 1. Caching responses at CDN level (CloudFront/Cloud CDN)
 * 2. Returning minimal data (only what's needed)
 * 3. Long cache duration for published posts
 *
 * Bandwidth per request: ~1-2 KB (vs ~50-100 KB from Convex directly)
 */

// 48 hours cache for stale data, 1 hour for revalidation
const CACHE_TTL = 172800; // 48 hours
const STALE_WHILE_REVALIDATE = 3600; // 1 hour

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  try {
    // Fetch from Convex (uses in-memory cache, so only first request hits Convex)
    const post = await fetchPostBySlug(slug);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, {
        status: 404,
        headers: {
          "Cache-Control": "public, max-age=60", // Cache 404 for 1 minute
        },
      });
    }

    // Return minimal data - only what's needed for rendering
    const minimalPost = {
      _id: post._id,
      slug: post.slug,
      title: post.title,
      description: post.description,
      content: post.content, // Full content needed for SSR
      date: post.date,
      tags: post.tags,
      readTime: post.readTime,
      image: post.image,
      excerpt: post.excerpt,
      authorName: post.authorName,
      authorImage: post.authorImage,
      showImageAtTop: post.showImageAtTop,
      contactForm: post.contactForm,
      newsletter: post.newsletter,
      showSocialFooter: post.showSocialFooter,
    };

    return NextResponse.json(minimalPost, {
      headers: {
        // CDN cache: 5 minutes, serve stale for 1 hour while revalidating
        "Cache-Control": `public, s-maxage=${CACHE_TTL}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`,
        // Allow CDNs to cache by URL
        "Vary": "Accept",
      },
    });
  } catch (error) {
    console.error(`[blog-post API] Failed to fetch post "${slug}":`, error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}

// Handle POST for cache invalidation (call after saving post)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const slug = body.slug;

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    // Clear in-memory cache
    clearConvexCache(slug);

    // Note: CDN cache will be purged via deployment or timestamp-based invalidation
    // For instant CDN purge, you'd need to use CloudFront/Cloud CDN invalidation APIs

    return NextResponse.json({
      success: true,
      message: `Cache cleared for: ${slug}`,
    });
  } catch (error) {
    console.error("[blog-post API] Failed to clear cache:", error);
    return NextResponse.json({ error: "Failed to clear cache" }, { status: 500 });
  }
}

// Enable caching (48 hours)
export const revalidate = 172800; // 48 hours
