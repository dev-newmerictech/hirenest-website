'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateVideoObjectSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function AboutStructuredData() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate Image Schema
    const imageSchema = generateImageObjectSchema(
        'https://www.hirenest.ai/about-hero.png',
        {
            name: 'About Hirenest - Transforming Talent Acquisition',
            description: 'Learn about Hirenest mission to revolutionize recruitment through AI-powered technology.',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    // Generate Video Schema
    const videoSchema = generateVideoObjectSchema(
        'About Hirenest',
        'Discover the story behind Hirenest and our mission to transform the recruitment industry with AI.',
        'https://www.hirenest.ai/about-hero.png',
        '2024-01-15T00:00:00.000Z',
        {
            duration: 'PT2M00S',
            width: 1920,
            height: 1080
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

            {/* Video Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
            />
        </>
    );
}
