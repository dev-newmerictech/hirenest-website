'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateVideoObjectSchema,
    generateWebPageSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function FastTrackApplicationsStructuredData() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate WebPage Schema
    const webPageSchema = generateWebPageSchema(
        'Fast-Track Applications - Simplify Applying',
        'Apply to hundreds of jobs instantly and get priority status with hiring managers. Improve candidate experience with Fast-Track Applications.',
        'https://hirenest.ai/fast-track-applications',
        [
            { name: 'Home', url: 'https://hirenest.ai' },
            { name: 'Fast-Track Applications', url: 'https://hirenest.ai/fast-track-applications' }
        ]
    );

    // Generate Image Schema
    const imageSchema = generateImageObjectSchema(
        'https://www.hirenest.ai/fast_track_applications_hero.png',
        {
            name: 'Fast-Track Applications - Skip the Queue & Get Hired Faster',
            description: 'Apply to hundreds of jobs instantly and get priority status with hiring managers.',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    // Generate Video Schema
    const videoSchema = generateVideoObjectSchema(
        'Fast-Track Applications Demo',
        'See how Fast-Track Applications can reduce your job search time by 90% and get you hired faster.',
        'https://www.hirenest.ai/fast_track_applications_hero.png',
        '2024-01-15T00:00:00.000Z',
        {
            duration: 'PT2M45S',
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
