"use client";

import { useEffect, useRef } from "react";
import type { PostMetadata } from "@/lib/blog-data";
import Post from "@/src/views/Post";

interface PostClientProps {
    initialPost?: PostMetadata | null;
    adjacentPosts?: {
        newer: any | null;
        older: any | null;
    } | null;
}

export default function PostClient({ initialPost, adjacentPosts }: PostClientProps) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        ref.current?.setAttribute("data-client-mounted", "");
    }, []);
    return (
        <div ref={ref}>
            <Post 
                initialPost={initialPost ?? undefined} 
                initialAdjacentPosts={adjacentPosts ?? undefined} 
            />
        </div>
    );
}