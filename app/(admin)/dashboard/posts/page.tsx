import { Suspense } from "react";
import { Metadata } from "next";
import DashboardPostsClient from "./dashboard-posts-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function DashboardPostsPage() {
    return (
        <Suspense fallback={null}>
            <DashboardPostsClient />
        </Suspense>
    );
}