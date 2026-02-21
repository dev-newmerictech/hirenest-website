import { Suspense } from "react";
import { Metadata } from "next";
import DashboardNewsletterClient from "./dashboard-newsletter-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function DashboardNewsletterPage() {
    return (
        <Suspense fallback={null}>
            <DashboardNewsletterClient />
        </Suspense>
    );
}