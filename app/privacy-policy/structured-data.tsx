'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateWebPageSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function PrivacyPolicyStructuredData() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate Image Schema
    const imageSchema = generateImageObjectSchema(
        'https://hirenest.ai/job-provider-og.png',
        {
            name: 'Hirenest Privacy Policy',
            description: 'Learn how Hirenest collects, uses, and protects your personal information.',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    // Generate WebPage Schema
    const webPageSchema = generateWebPageSchema(
        'Privacy Policy - Your Privacy Matters',
        'Read our Privacy Policy to understand how we collect, use, and protect your personal data.',
        'https://hirenest.ai/privacy-policy',
        [
            { name: 'Home', url: 'https://hirenest.ai' },
            { name: 'Privacy Policy', url: 'https://hirenest.ai/privacy-policy' }
        ],
        {
            image: imageSchema,
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
        </>
    );
}
