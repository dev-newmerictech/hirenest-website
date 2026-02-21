import { Suspense } from "react";
import { Metadata } from "next";
import WriteClient from "./write-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function WritePage() {
    return (
        <Suspense fallback={null}>
            <WriteClient />
        </Suspense>
    );
}