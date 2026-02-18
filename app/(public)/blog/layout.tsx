import { Metadata } from "next";
import "../../styles/route-styles.css";
import BlogRouteKey from "./blog-route-key";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";

export const metadata: Metadata = {
    title: "Hirenest Blog – Latest Articles & Guides | Hirenest AI",
    description:
        "Discover the latest Hirenest insights, artificial intelligence trends, and content automation guides to help you rank higher.",
    alternates: {
        canonical: `${SITE_URL}/blog`,
        languages: { "en-US": `${SITE_URL}/blog`, "x-default": `${SITE_URL}/blog` },
    },
    openGraph: {
        title: "Hirenest Blog – Latest Articles & Guides | Hirenest AI",
        description:
            "Discover the latest Hirenest insights, artificial intelligence trends, and content automation guides to help you rank higher.",
        url: `${SITE_URL}/blog`,
        type: "website",
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <BlogRouteKey>{children}</BlogRouteKey>;
}