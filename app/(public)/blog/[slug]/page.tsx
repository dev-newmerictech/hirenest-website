import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchPostBySlug, fetchAdjacentPosts } from "@/lib/blog-data";
import { extractFAQs } from "@/src/utils/extractFAQs";
import { extractHeadings } from "@/src/utils/extractHeadings";
import PostClient from "./post-client";
import { organizationSchema, websiteSchema } from '@/app/lib/structured-data';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";
const SITE_NAME = "Hirenest AI";
const DEFAULT_OG_IMAGE = "/images/data.webp";

/** Truncate title to ~60 chars for SEO */
function truncateTitle(title: string, maxChars = 60): string {
    const full = `${title} | ${SITE_NAME}`;
    if (full.length <= maxChars) return full;
    const suffix = ` | ${SITE_NAME}`;
    const available = maxChars - suffix.length;
    if (available < 15) return title.substring(0, maxChars - 3) + "...";
    return `${title.substring(0, available - 3)}...${suffix}`;
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await fetchPostBySlug(slug);

    if (!post) {
        return { title: "Post Not Found" };
    }

    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    const ogImage = post.image
        ? post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`
        : `${SITE_URL}${DEFAULT_OG_IMAGE}`;
    const metaDescription = post.description.length > 160
        ? post.description.substring(0, 157) + "..."
        : post.description;

    return {
        title: truncateTitle(post.title),
        description: metaDescription,
        robots: "index, follow, max-snippet:-1, max-image-preview:large",
        alternates: {
            canonical: postUrl,
            languages: { "en-US": postUrl, "x-default": postUrl },
        },
        openGraph: {
            title: truncateTitle(post.title),
            description: metaDescription,
            url: postUrl,
            type: "article",
            siteName: SITE_NAME,
            locale: "en_US",
            images: [{ url: `${SITE_URL}/about-hero.png`, width: 1200, height: 630 }],
            publishedTime: new Date(post.date).toISOString(),
            modifiedTime: new Date(post.date).toISOString(),
            ...(post.authorName && { authors: [post.authorName] }),
        },
        twitter: {
            card: "summary_large_image",
            site: "@hirenest",
            creator: "@hirenest",
            title: truncateTitle(post.title),
            description: metaDescription,
            images: [`${SITE_URL}/about-hero.png`],
        },
    };
}

/** Build all JSON-LD schemas for a blog post */
function buildPostJsonLd(post: NonNullable<Awaited<ReturnType<typeof fetchPostBySlug>>>) {
    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    const ogImage = post.image
        ? post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`
        : `${SITE_URL}${DEFAULT_OG_IMAGE}`;

    const schemas: object[] = [];

    // BlogPosting schema
    schemas.push({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        image: { "@type": "ImageObject", url: ogImage, width: 1200, height: 630 },
        author: {
            "@type": "Person",
            name: post.authorName || "Hirenest Team",
            url: post.authorName
                ? `${SITE_URL}/blog/author/${post.authorName.toLowerCase().replace(/\s+/g, "-")}`
                : `${SITE_URL}/about-us`,
        },
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".blog-post-content"] },
        publisher: {
            "@type": "Organization",
            name: "Hirenest AI",
            url: "https://hirenest.ai",
            logo: { "@type": "ImageObject", url: "https://hirenest.ai/logo.svg", width: 250, height: 60 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
        url: postUrl,
        articleSection: post.tags?.[0] || "Recruitment",
        keywords: post.tags?.join(", ") || "",
    });

    // BreadcrumbList
    schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
        ],
    });

    // TOC schema
    const headings = extractHeadings(post.content);
    if (headings.length > 0) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "Table",
            about: { "@type": "Article", name: post.title },
            hasPart: headings.map((h, i) => ({
                "@type": "WebPageElement",
                name: h.text,
                url: `${postUrl}#${h.id}`,
                position: i + 1,
            })),
        });
    }

    // FAQ schema
    const faqs = extractFAQs(post.content);
    if (faqs) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        });
    }

    // Video schema (YouTube embeds)
    const videoRegex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/gi;
    const videos: string[] = [];
    let match;
    while ((match = videoRegex.exec(post.content)) !== null) {
        videos.push(match[1]);
    }
    if (videos.length > 0) {
        schemas.push(
            ...videos.map((id) => ({
                "@context": "https://schema.org",
                "@type": "VideoObject",
                name: `Video: ${post.title}`,
                description: `Video content for ${post.title}`,
                thumbnailUrl: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
                uploadDate: post.date,
                contentUrl: `https://www.youtube.com/watch?v=${id}`,
                embedUrl: `https://www.youtube.com/embed/${id}`,
            })),
        );
    }

    return schemas;
}


export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await fetchPostBySlug(slug);

    if (!post) notFound();

    const adjacentPosts = await fetchAdjacentPosts(slug);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@graph': [
                            // Remove @context from individual schemas when using @graph
                            { ...organizationSchema, '@context': undefined },
                            { ...websiteSchema, '@context': undefined },
                        ].map(schema => {
                            // Clean up undefined values
                            // @ts-ignore
                            const { '@context': _, ...rest } = schema;
                            return rest;
                        }),
                    }),
                }}
            />
            {buildPostJsonLd(post).map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <PostClient initialPost={post} adjacentPosts={adjacentPosts} />
        </>
    );
}

// Revalidate every 48 hours
export const revalidate = 172800; // 48 hours

export async function generateStaticParams() {
    const slugs = await fetchAdjacentPosts("").catch(() => null); // Dummy call to trigger imports if needed, but wait we have fetchAllPostSlugs!
    // Let's import fetchAllPostSlugs at the top instead! Wait, I will just do it inline here to avoid touching imports if possible, or I can just re-import it.
    const { fetchAllPostSlugs } = await import("@/lib/blog-data");
    const allSlugs = await fetchAllPostSlugs();
    return allSlugs.map((slug) => ({
        slug,
    }));
}
