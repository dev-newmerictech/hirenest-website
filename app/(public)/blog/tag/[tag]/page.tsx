import { Metadata } from "next";
import TagClient from "./tag-client";
import { fetchAllTags, fetchPostsByTag, type PostSummary } from "@/lib/convex-server";

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

/** Server-rendered post listing for SEO crawlers */
function ServerTagListing({ tag, posts }: { tag: string; posts: PostSummary[] }) {
    return (
        <section className="ssr-article-fallback" aria-label={`Posts tagged ${tag}`}>
            <h1>{toTitleCase(tag)} Articles</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <a href={`/blog/${post.slug}`}>
                            <h2>{post.title}</h2>
                        </a>
                        <p>{post.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default async function TagPageRoute({ params }: PageProps) {
    const { tag } = await params;
    const decodedTag = decodeURIComponent(tag);
    const posts = await fetchPostsByTag(decodedTag);

    return (
        <>
            {posts.length > 0 && <ServerTagListing tag={decodedTag} posts={posts} />}
            <TagClient />
        </>
    );
}

export const revalidate = 3600;