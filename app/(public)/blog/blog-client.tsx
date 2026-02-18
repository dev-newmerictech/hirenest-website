"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import SkeletonLoader from "@/app/components/SkeletonLoader";
import type { PostSummary } from "@/lib/convex-server";

const Blog = dynamic(() => import("@/src/views/Blog"), {
    ssr: false,
    loading: () => <SkeletonLoader type="blog" />,
});

interface BlogClientProps {
    initialPosts?: PostSummary[];
}

export default function BlogClient({ initialPosts }: BlogClientProps) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        ref.current?.setAttribute("data-client-mounted", "");
    }, []);
    return (
        <div ref={ref}>
            <Blog initialPosts={initialPosts} />
        </div>
    );
}