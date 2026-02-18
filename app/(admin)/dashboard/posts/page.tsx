import { Suspense } from "react";
import DashboardPostsClient from "./dashboard-posts-client";

export const dynamic = "force-dynamic";

export default function DashboardPostsPage() {
    return (
        <Suspense fallback={null}>
            <DashboardPostsClient />
        </Suspense>
    );
}