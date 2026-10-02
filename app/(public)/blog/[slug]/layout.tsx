import { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";

export const metadata: Metadata = {
    alternates: {
        types: {
            "application/rss+xml": `${SITE_URL}/rss.xml`,
        },
    },
    openGraph: {
        type: "article",
        siteName: "Hirenest AI",
    },
};

export default function BlogPostLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <article className="blog-post-layout">{children}</article>;
}