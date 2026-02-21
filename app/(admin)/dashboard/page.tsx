import { Suspense } from "react";
import { Metadata } from "next";
import DashboardClient from "./dashboard-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function DashboardPage() {
    return (
        <Suspense fallback={null}>
            <DashboardClient />
        </Suspense>
    );
}