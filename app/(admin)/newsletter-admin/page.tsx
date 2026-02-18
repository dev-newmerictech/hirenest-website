import { Suspense } from "react";
import NewsletterAdminClient from "./newsletter-admin-client";

export const dynamic = "force-dynamic";

export default function NewsletterAdminPage() {
    return (
        <Suspense fallback={null}>
            <NewsletterAdminClient />
        </Suspense>
    );
}