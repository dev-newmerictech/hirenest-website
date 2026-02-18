import { Suspense } from "react";
import DashboardNewsletterClient from "./dashboard-newsletter-client";

export const dynamic = "force-dynamic";

export default function DashboardNewsletterPage() {
    return (
        <Suspense fallback={null}>
            <DashboardNewsletterClient />
        </Suspense>
    );
}