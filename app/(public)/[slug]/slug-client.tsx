"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import SkeletonLoader from "@/app/components/SkeletonLoader";

const Post = dynamic(() => import("@/src/views/Post"), {
    ssr: false,
    loading: () => <SkeletonLoader type="post" />,
});

// Slugs that have dedicated pages elsewhere - don't render as blog posts
const RESERVED_SLUGS = [
    "blog", "stats", "unsubscribe",
    "dashboard", "login", "callback", "write", "newsletter-admin",
    "features", "pricing", "why", "about", "our-story", "affiliate",
    "alternatives", "cookies", "refund", "privacy-policy", "terms",
    "seo-guide", "special", "landing",
];

export default function SlugClient() {
    const { slug } = useParams<{ slug: string }>();

    if (slug && RESERVED_SLUGS.includes(slug)) return null;

    return <Post />;
}