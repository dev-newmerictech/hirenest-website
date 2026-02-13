'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateVideoObjectSchema,
    generateWebPageSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function TeamCollaborationStructuredData() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate WebPage Schema
    const webPageSchema = generateWebPageSchema(
        'Team Collaboration - Hire Together, Decide Smarter',
        'Streamline your hiring process with Team Collaboration tools. Share feedback, rate candidates, and make hiring decisions together.',
        'https://www.hirenest.ai/team-collaboration',
        [
            { name: 'Home', url: 'https://hirenest.ai' },
            { name: 'Team Collaboration', url: 'https://www.hirenest.ai/team-collaboration' }
        ]
    );

    // Generate Image Schema - Using provider OG image as specific hero doesn't exist yet
    const imageSchema = generateImageObjectSchema(
        'https://www.hirenest.ai/job-provider-og.png',
        {
            name: 'Team Collaboration - Hire Together, Decide Smarter',
            description: 'Bring your entire hiring team together with tools designed for seamless collaboration and faster decision-making.',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    // Generate Video Schema
    const videoSchema = generateVideoObjectSchema(
        'Team Collaboration Demo',
        'Learn how to streamline your hiring process with shared pipelines, real-time chat, and collaborative decision-making tools.',
        'https://www.hirenest.ai/job-provider-og.png',
        '2024-01-15T00:00:00.000Z',
        {
            duration: 'PT3M10S',
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
