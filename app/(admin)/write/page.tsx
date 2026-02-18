import { Suspense } from "react";
import WriteClient from "./write-client";

export const dynamic = "force-dynamic";

export default function WritePage() {
    return (
        <Suspense fallback={null}>
            <WriteClient />
        </Suspense>
    );
}