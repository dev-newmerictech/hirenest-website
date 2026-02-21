import { Suspense } from "react";
import { Metadata } from "next";
import DashboardWriterClient from "./dashboard-writer-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function DashboardWriterPage() {
    return (
        <Suspense fallback={null}>
            <DashboardWriterClient />
        </Suspense>
    );
}