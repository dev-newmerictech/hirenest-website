import { Metadata } from "next";
import TagClient from "./tag-client";
import { fetchAllTags } from "@/lib/convex-server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";

function toTitleCase(slug: string): string {
    return slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
}

interface PageProps {
    params: Promise<{ tag: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { tag } = await params;
    const tagName = toTitleCase(decodeURIComponent(tag));
    const tagUrl = `${SITE_URL}/blog/tag/${tag}`;

    return {
        title: `${tagName} Articles | Hirenest AI`,
        description: `Browse all articles tagged with "${tagName}" on Hirenest AI blog.`,
        robots: "index, follow",
        alternates: {
            canonical: tagUrl,
            languages: { "en-US": tagUrl, "x-default": tagUrl },
        },
        openGraph: {
            title: `${tagName} Articles | Hirenest AI`,
            description: `Browse all articles tagged with "${tagName}" on Hirenest AI blog.`,
            url: tagUrl,
            type: "website",
            siteName: "Hirenest AI",
        },
        twitter: {
            card: "summary",
            title: `${tagName} Articles | Hirenest AI`,
            description: `Browse all articles tagged with "${tagName}" on Hirenest AI blog.`,
        },
    };
}

/** Pre-render all known tags at build time */
export async function generateStaticParams() {
    const tags = await fetchAllTags();
    return tags.map((t) => ({ tag: encodeURIComponent(t.tag.toLowerCase()) }));
}

export default async function TagPageRoute({ params }: PageProps) {
    return <TagClient />;
}

export const revalidate = 86400; // 24 hours

// Only generate static pages for defined params (404 for others)
export const dynamicParams = false;