import { Suspense } from "react";
import DashboardAIClient from "./dashboard-ai-client";

export const dynamic = "force-dynamic";

export default function DashboardAIPage() {
    return (
        <Suspense fallback={null}>
            <DashboardAIClient />
        </Suspense>
    );
}