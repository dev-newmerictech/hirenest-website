'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateVideoObjectSchema,
    generateWebPageSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function CustomAssessmentsStructuredData() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate Image Schema - Using provider OG image as specific hero doesn't exist yet
    const imageSchema = generateImageObjectSchema(
        'https://www.hirenest.ai/job-provider-og.png',
        {
            name: 'Custom Assessments - Test What Matters To Your Business',
            description: 'Build tailored assessments with our drag-and-drop builder to measure the exact skills you need.',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    // Generate Video Schema
    const videoSchema = generateVideoObjectSchema(
        'Custom Assessments Demo',
        'See how easily you can create custom technical and soft skill assessments to find the perfect candidate.',
        'https://www.hirenest.ai/job-provider-og.png',
        '2024-01-15T00:00:00.000Z',
        {
            duration: 'PT3M30S',
            width: 1920,
            height: 1080
        }
    );

    // Generate WebPage Schema
    const webPageSchema = generateWebPageSchema(
        'Custom Assessments - Tailored Hiring Tests',
        'Create custom skill assessments tailored to your specific job requirements. Use our drag-and-drop builder to test coding, soft skills, and more.',
        'https://www.hirenest.ai/custom-assessments',
        [
            { name: 'Home', url: 'https://www.hirenest.ai' },
            { name: 'Custom Assessments', url: 'https://www.hirenest.ai/custom-assessments' }
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

            {/* FAQ Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
