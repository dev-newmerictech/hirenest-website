import { Suspense } from "react";
import { Metadata } from "next";
import NewsletterAdminClient from "./newsletter-admin-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function NewsletterAdminPage() {
    return (
        <Suspense fallback={null}>
            <NewsletterAdminClient />
        </Suspense>
    );
}