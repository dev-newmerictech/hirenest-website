import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchPostBySlug, fetchAllPostSlugs } from "@/lib/convex-server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";
const SITE_NAME = "Hirenest AI";
const DEFAULT_OG_IMAGE = "/images/data.webp";

/** Truncate title so final rendered title (with root template " | Hirenest.ai") stays ≤60 chars */
function seoTitle(title: string, maxChars = 60): string {
    const suffix = " | Hirenest.ai";
    const available = maxChars - suffix.length;
    if (title.length <= available) return title;
    return title.substring(0, available - 3) + "...";
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug: rawSlug } = await params;
    const slug = rawSlug.replace(/\.md$/, "");
    const post = await fetchPostBySlug(slug);

    if (!post) {
        return { title: "Post Not Found", robots: { index: false, follow: false } };
    }

    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    const ogImage = post.image
        ? post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`
        : `${SITE_URL}${DEFAULT_OG_IMAGE}`;
    const metaDescription = post.description.length > 160
        ? post.description.substring(0, 157) + "..."
        : post.description;

    return {
        title: seoTitle(post.title),
        description: metaDescription,
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-snippet": -1,
                "max-image-preview": "large" as const,
                "max-video-preview": -1,
            },
        },
        alternates: {
            canonical: postUrl,
        },
        openGraph: {
            title: seoTitle(post.title),
            description: metaDescription,
            url: postUrl,
            type: "article",
            siteName: SITE_NAME,
            locale: "en_US",
            images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
            publishedTime: new Date(post.date).toISOString(),
            modifiedTime: new Date(post.updatedAt || post.date).toISOString(),
            ...(post.authorName && { authors: [post.authorName] }),
            tags: post.tags || [],
        },
        twitter: {
            card: "summary_large_image",
            site: "@hirenest",
            creator: "@hirenest",
            title: seoTitle(post.title),
            description: metaDescription,
            images: [ogImage],
        },
    };
}

export async function generateStaticParams() {
    const slugs = await fetchAllPostSlugs();
    return slugs.map((slug) => ({ slug: `${slug}.md` }));
}

export const dynamicParams = true;

export default async function RawMarkdownPage({ params }: PageProps) {
    const { slug: rawSlug } = await params;
    const slug = rawSlug.replace(/\.md$/, "");
    const post = await fetchPostBySlug(slug);

    if (!post) notFound();

    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    const authorName = post.authorName || "Hirenest Team";
    const dateISO = new Date(post.date).toISOString();

    const frontmatter = [
        "---",
        `title: "${post.title.replace(/"/g, '\\"')}"`,
        `description: "${post.description.replace(/"/g, '\\"')}"`,
        `date: ${post.date}`,
        `tags: [${post.tags?.join(", ") || ""}]`,
        ...(post.readTime ? [`readTime: ${post.readTime}`] : []),
        ...(post.authorName ? [`authorName: ${post.authorName}`] : []),
        `slug: ${post.slug}`,
        "---",
    ].join("\n");

    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: dateISO,
        dateModified: new Date(post.updatedAt || post.date).toISOString(),
        author: { "@type": "Person", name: authorName },
        publisher: {
            "@type": "Organization",
            name: "Hirenest AI",
            url: SITE_URL,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg`, width: 250, height: 60 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
        url: postUrl,
        keywords: post.tags?.join(", ") || "",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />
            <article
                itemScope
                itemType="https://schema.org/BlogPosting"
                style={{ margin: 0, padding: 0 }}
            >
                <meta itemProp="headline" content={post.title} />
                <meta itemProp="url" content={postUrl} />
                <meta itemProp="datePublished" content={dateISO} />
                <meta itemProp="dateModified" content={new Date(post.updatedAt || post.date).toISOString()} />
                <span itemProp="author" itemScope itemType="https://schema.org/Person">
                    <meta itemProp="name" content={authorName} />
                </span>
                <pre
                    itemProp="articleBody"
                    style={{
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        fontFamily: "monospace",
                        fontSize: "14px",
                        lineHeight: 1.6,
                        margin: 0,
                        padding: "1rem",
                        background: "none",
                    }}
                >
                    {frontmatter}
                    {"\n\n"}
                    {post.content}
                </pre>
            </article>
        </>
    );
}

export const revalidate = 3600;
