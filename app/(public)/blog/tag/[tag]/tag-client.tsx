"use client";

import dynamic from "next/dynamic";
import SkeletonLoader from "@/app/components/SkeletonLoader";

const TagPage = dynamic(() => import("@/src/views/TagPage"), {
    ssr: false,
    loading: () => <SkeletonLoader type="blog" />,
});

export default function TagClient() {
    return <TagPage />;
}