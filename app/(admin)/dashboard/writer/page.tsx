import { Suspense } from "react";
import DashboardWriterClient from "./dashboard-writer-client";

export const dynamic = "force-dynamic";

export default function DashboardWriterPage() {
    return (
        <Suspense fallback={null}>
            <DashboardWriterClient />
        </Suspense>
    );
}