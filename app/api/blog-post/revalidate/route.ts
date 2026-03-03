import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { clearConvexCache } from "@/lib/convex-server";

/**
 * Revalidate blog post cache after create/update/delete.
 * Call this after saving posts in the dashboard.
 *
 * Usage: POST /api/blog-post/revalidate
 * Body: { "slug": "post-slug" }
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const slug = body.slug;

    if (!slug) {
      return NextResponse.json(
        { error: "Slug is required in request body" },
        { status: 400 }
      );
    }

    // Clear in-memory cache for this post and blog listing
    clearConvexCache(slug);
    clearConvexCache("blog-posts");

    // Revalidate Next.js paths
    revalidatePath(`/blog/${slug}`);
    revalidatePath("/blog");

    return NextResponse.json({
      success: true,
      message: `Revalidated: ${slug}`,
      revalidated: true,
    });
  } catch (error) {
    console.error("[revalidate API] Failed:", error);
    return NextResponse.json(
      { error: "Failed to revalidate", success: false },
      { status: 500 }
    );
  }
}
