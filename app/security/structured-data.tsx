'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function SecurityStructuredData() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate Image Schema
    const imageSchema = generateImageObjectSchema(
        'https://www.hirenest.ai/job-provider-og.png',
        {
            name: 'Security at Hirenest - Your Data Protection',
            description: 'Learn about our security practices, encryption standards, and commitment to protecting your data.',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    return (
        <>
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
