import { Suspense } from "react";
import DashboardPagesClient from "./dashboard-pages-client";

export const dynamic = "force-dynamic";

export default function DashboardPagesPage() {
    return (
        <Suspense fallback={null}>
            <DashboardPagesClient />
        </Suspense>
    );
}