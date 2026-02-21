import { Suspense } from "react";
import { Metadata } from "next";
import CallbackClient from "./callback-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function CallbackPage() {
    return (
        <Suspense fallback={null}>
            <CallbackClient />
        </Suspense>
    );
}