import { Metadata } from "next";
import AuthorClient from "./author-client";
import { fetchAllAuthors, fetchPostsByAuthor, type PostSummary } from "@/lib/convex-server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";

function slugToName(slug: string): string {
    return slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const authorName = slugToName(decodeURIComponent(slug));
    const authorUrl = `${SITE_URL}/blog/author/${slug}`;

    return {
        title: `Posts by ${authorName} | Hirenest AI`,
        description: `Read all articles written by ${authorName} on Hirenest AI blog.`,
        robots: "index, follow",
        alternates: {
            canonical: authorUrl,
            languages: { "en-US": authorUrl, "x-default": authorUrl },
        },
        openGraph: {
            title: `Posts by ${authorName} | Hirenest AI`,
            description: `Read all articles written by ${authorName} on Hirenest AI blog.`,
            url: authorUrl,
            type: "profile",
            siteName: "Hirenest AI",
        },
        twitter: {
            card: "summary",
            title: `Posts by ${authorName} | Hirenest AI`,
            description: `Read all articles written by ${authorName} on Hirenest AI blog.`,
        },
    };
}

/** Pre-render all known authors at build time */
export async function generateStaticParams() {
    const authors = await fetchAllAuthors();
    return authors.map((a) => ({ slug: a.slug }));
}

/** Server-rendered post listing for SEO crawlers */
function ServerAuthorListing({ authorName, posts }: { authorName: string; posts: PostSummary[] }) {
    return (
        <section className="ssr-article-fallback" aria-label={`Posts by ${authorName}`}>
            <h1>Posts by {authorName}</h1>
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

export default async function AuthorPageRoute({ params }: PageProps) {
    const { slug } = await params;
    const authorName = slugToName(decodeURIComponent(slug));
    const posts = await fetchPostsByAuthor(slug);

    return (
        <>
            {posts.length > 0 && <ServerAuthorListing authorName={authorName} posts={posts} />}
            <AuthorClient />
        </>
    );
}

export const revalidate = 86400; // 24 hours

// Only generate static pages for defined params (404 for others)
export const dynamicParams = false;