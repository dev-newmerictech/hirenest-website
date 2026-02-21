import { Suspense } from "react";
import { Metadata } from "next";
import DashboardAIClient from "./dashboard-ai-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function DashboardAIPage() {
    return (
        <Suspense fallback={null}>
            <DashboardAIClient />
        </Suspense>
    );
}