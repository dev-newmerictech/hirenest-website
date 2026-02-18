"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import SkeletonLoader from "@/app/components/SkeletonLoader";
import type { PostMetadata } from "@/lib/convex-server";

const Post = dynamic(() => import("@/src/views/Post"), {
    ssr: false,
    loading: () => <SkeletonLoader type="post" />,
});

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