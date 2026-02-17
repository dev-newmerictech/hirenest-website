'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateVideoObjectSchema,
    generateWebPageSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function QuickScreeningStructuredData() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate Image Schema
    const imageSchema = generateImageObjectSchema(
        'https://hirenest.ai/quick_screening_hero.png',
        {
            name: 'Quick Screening - Screen Candidates in Minutes',
            description: 'Accelerate your hiring process with automated screening tools that filter out unqualified candidates instantly.',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    // Generate Video Schema
    const videoSchema = generateVideoObjectSchema(
        'Quick Screening Demo',
        'Learn how to cut your screening time by 70% with our automated candidate filtering and shortlisting tools.',
        'https://hirenest.ai/quick_screening_hero.png',
        '2024-01-15T00:00:00.000Z',
        {
            duration: 'PT2M45S',
            width: 1920,
            height: 1080
        }
    );

    // Generate WebPage Schema
    const webPageSchema = generateWebPageSchema(
        'Quick Screening - Accelerate Your Hiring',
        'Accelerate your hiring with Quick Screening. Use automated tools to filter candidates, screen in minutes not days, and fast-track the best talent.',
        'https://hirenest.ai/quick-screening',
        [
            { name: 'Home', url: 'https://hirenest.ai' },
            { name: 'Quick Screening', url: 'https://hirenest.ai/quick-screening' }
        ],
        {
            image: imageSchema,
            video: videoSchema,
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

            {/* Structured Data - ImageObject */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
            />

            {/* FAQ Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
