import { notFound, redirect } from "next/navigation";
import { fetchPostBySlug } from "@/lib/blog-data";

export const dynamic = "force-dynamic";

// Slugs that have dedicated pages elsewhere - don't render as blog posts
const RESERVED_SLUGS = [
    "blog", "stats", "unsubscribe",
    "dashboard", "login", "callback", "write", "newsletter-admin",
    "features", "pricing", "why", "about", "our-story", "affiliate",
    "alternatives", "cookies", "refund", "privacy-policy", "terms",
    "seo-guide", "special", "landing",
];

interface PageProps {
    params: Promise<{ slug: string }>;
}

/**
 * Catch-all slug route — 301 redirects to /blog/{slug} to prevent duplicate content.
 * Reserved slugs trigger 404.
 */
export default async function CatchAllPage({ params }: PageProps) {
    const { slug } = await params;

    if (RESERVED_SLUGS.includes(slug)) {
        notFound();
    }

    // Verify the post exists before redirecting
    const post = await fetchPostBySlug(slug);
    if (!post) {
        notFound();
    }

    redirect(`/blog/${slug}`);
}