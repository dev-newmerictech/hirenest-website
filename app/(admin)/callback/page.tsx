import { Suspense } from "react";
import CallbackClient from "./callback-client";

export const dynamic = "force-dynamic";

export default function CallbackPage() {
    return (
        <Suspense fallback={null}>
            <CallbackClient />
        </Suspense>
    );
}