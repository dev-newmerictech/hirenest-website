'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateWebPageSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function RefundPolicyStructuredData() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate WebPage Schema
    const webPageSchema = generateWebPageSchema(
        'Refund Policy - Hirenest',
        'Read our Refund Policy to understand our terms regarding subscriptions, cancellations, and refunds.',
        'https://www.hirenest.ai/refund-policy',
        [
            { name: 'Home', url: 'https://hirenest.ai' },
            { name: 'Refund Policy', url: 'https://www.hirenest.ai/refund-policy' }
        ]
    );

    // Generate Image Schema
    const imageSchema = generateImageObjectSchema(
        'https://www.hirenest.ai/job-provider-og.png',
        {
            name: 'Hirenest Refund Policy',
            description: 'Information about refunds, cancellations, and money-back guarantees on Hirenest.',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    return (
        <>
            {/* Structured Data - WebPage */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />

            {/* FAQ Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Image Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
            />
        </>
    );
}
