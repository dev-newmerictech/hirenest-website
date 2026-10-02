"use client";

import { useEffect, useRef } from "react";
import type { PostSummary, PaginatedBlogPostsResult } from "@/lib/blog-data";
import Blog from "@/src/views/Blog";

interface BlogClientProps {
    initialPosts?: PostSummary[];
    paginatedData?: PaginatedBlogPostsResult;
}

export default function BlogClient({ initialPosts, paginatedData }: BlogClientProps) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        ref.current?.setAttribute("data-client-mounted", "");
    }, []);
    return (
        <div ref={ref}>
            <Blog initialPosts={initialPosts} paginatedData={paginatedData} />
        </div>
    );
}