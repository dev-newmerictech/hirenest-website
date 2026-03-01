"use client";

import { useEffect, useRef } from "react";
import type { PostMetadata } from "@/lib/convex-server";
import Post from "@/src/views/Post";

interface PostClientProps {
    initialPost?: PostMetadata | null;
}

export default function PostClient({ initialPost }: PostClientProps) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        ref.current?.setAttribute("data-client-mounted", "");
    }, []);
    return (
        <div ref={ref}>
            <Post initialPost={initialPost ?? undefined} />
        </div>
    );
}