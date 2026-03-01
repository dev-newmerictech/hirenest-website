"use client";

import { useEffect, useRef } from "react";
import type { PostSummary } from "@/lib/convex-server";
import Blog from "@/src/views/Blog";

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