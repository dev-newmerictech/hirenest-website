"use client";

import { usePathname } from "next/navigation";
import { organizationSchema, websiteSchema } from './lib/structured-data';

export default function StructuredDataWrapper() {
    const pathname = usePathname();

    // Don't render global structured data on blog pages as they have their own
    if (pathname?.startsWith('/blog')) {
        return null;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@graph': [
                        // Remove @context from individual schemas when using @graph
                        { ...organizationSchema, '@context': undefined },
                        { ...websiteSchema, '@context': undefined },
                    ].map(schema => {
                        // Clean up undefined values
                        // @ts-ignore
                        const { '@context': _, ...rest } = schema;
                        return rest;
                    }),
                }),
            }}
        />
    );
}
