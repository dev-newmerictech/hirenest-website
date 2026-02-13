'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateVideoObjectSchema,
    generateWebPageSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function HiringAnalyticsStructuredData() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate WebPage Schema
    const webPageSchema = generateWebPageSchema(
        'Hiring Analytics - Data-Driven Recruitment',
        'Optimize your recruitment with comprehensive Hiring Analytics. Track metrics, identify bottlenecks, and improve your time-to-hire with real-time data.',
        'https://www.hirenest.ai/hiring-analytics',
        [
            { name: 'Home', url: 'https://www.hirenest.ai' },
            { name: 'Hiring Analytics', url: 'https://www.hirenest.ai/hiring-analytics' }
        ]
    );

    // Generate Image Schema - Using provider OG image as specific hero doesn't exist yet
    const imageSchema = generateImageObjectSchema(
        'https://www.hirenest.ai/job-provider-og.png',
        {
            name: 'Hiring Analytics - Turn Data Into Hiring Success',
            description: 'Make smarter hiring decisions with powerful analytics that reveal what\'s working and what\'s not.',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    // Generate Video Schema
    const videoSchema = generateVideoObjectSchema(
        'Hiring Analytics Demo',
        'Learn how to track hiring metrics, identify bottlenecks, and optimize your recruitment process with Hiring Analytics.',
        'https://www.hirenest.ai/job-provider-og.png',
        '2024-01-15T00:00:00.000Z',
        {
            duration: 'PT3M00S',
            width: 1920,
            height: 1080
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

            {/* Video Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
            />
        </>
    );
}
