"use client";

import { usePathname } from "next/navigation";
import { organizationSchema, websiteSchema } from './lib/structured-data';

export default function StructuredDataWrapper() {
    const pathname = usePathname();

    // Don't render global structured data on blog pages as they have their own
    if (pathname?.startsWith('/blog')) {
        return null;
    }

    // Extract the actual schema objects (without @context) for @graph array
    const { '@context': _orgCtx, ...orgSchema } = organizationSchema;
    const { '@context': _webCtx, ...webSchema } = websiteSchema;

    return (
        <>
            {/* Organization Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            {/* WebSite Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
        </>
    );
}
