"use client";

import dynamic from "next/dynamic";
import SkeletonLoader from "@/app/components/SkeletonLoader";

const AuthorPage = dynamic(() => import("@/src/views/AuthorPage"), {
    ssr: false,
    loading: () => <SkeletonLoader type="blog" />,
});

export default function AuthorClient() {
    return <AuthorPage />;
}