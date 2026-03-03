import { Metadata } from "next";
import BlogClient from "./blog-client";
import { fetchBlogPosts, type PostSummary } from "@/lib/convex-server";
import { organizationSchema, websiteSchema } from '@/app/lib/structured-data';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";

export const metadata: Metadata = {
    title: "Hirenest Blog – Recruitment & Hiring Insights",
    description:
        "Explore expert insights on recruitment strategies, AI-powered hiring, and talent acquisition trends. Learn how to build better teams with Hirenest.",
    alternates: {
        canonical: `${SITE_URL}/blog`,
        languages: { "en-US": `${SITE_URL}/blog`, "x-default": `${SITE_URL}/blog` },
    },
    openGraph: {
        title: "Hirenest Blog – Recruitment Insights & Hiring Guides | Hirenest AI",
        description:
            "Explore expert insights on recruitment strategies, AI-powered hiring, and talent acquisition trends.",
        url: `${SITE_URL}/blog`,
        type: "website",
        siteName: "Hirenest AI",
        images: [{ url: `${SITE_URL}/about-hero.png`, width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        site: "@hirenest",
        creator: "@hirenest",
        title: "Hirenest Blog – Recruitment Insights & Hiring Guides | Hirenest AI",
        description:
            "Explore expert insights on recruitment strategies, AI-powered hiring, and talent acquisition trends.",
        images: [`${SITE_URL}/about-hero.png`],
    },
};

const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Hirenest Blog – Recruitment Insights & Hiring Guides | Hirenest AI",
    description:
        "Explore expert insights on recruitment strategies, AI-powered hiring, and talent acquisition trends to help you build better teams.",
    url: `${SITE_URL}/blog`,
    datePublished: "2024-01-01T00:00:00.000Z",
    publisher: {
        "@type": "Organization",
        name: "Hirenest AI",
        logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/HpLogo.svg`
        }
    }
};

export default async function BlogPage() {
    const initialPosts = await fetchBlogPosts();

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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
            />
            <BlogClient initialPosts={initialPosts} />
        </>
    );
}

// Revalidate every 48 hours
export const revalidate = 172800; // 48 hours

