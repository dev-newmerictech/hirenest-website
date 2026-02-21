import { Suspense } from "react";
import { Metadata } from "next";
import DashboardPagesClient from "./dashboard-pages-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function DashboardPagesPage() {
    return (
        <Suspense fallback={null}>
            <DashboardPagesClient />
        </Suspense>
    );
}