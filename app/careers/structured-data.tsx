'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateVideoObjectSchema,
    generateWebPageSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function CareersStructuredData() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate Image Schema
    const imageSchema = generateImageObjectSchema(
        'https://hirenest.ai/careers-hero.png',
        {
            name: 'Careers at Hirenest - Join the Future of Hiring',
            description: 'Join the Hirenest team and help us build the next generation of AI-powered recruitment technology.',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    // Generate Video Schema
    const videoSchema = generateVideoObjectSchema(
        'Life at Hirenest',
        'Get a glimpse of our culture, values, and the people building the future of recruitment at Hirenest.',
        'https://hirenest.ai/careers-hero.png',
        '2024-01-15T00:00:00.000Z',
        {
            duration: 'PT2M30S',
            width: 1920,
            height: 1080
        }
    );

    // Generate WebPage Schema
    const webPageSchema = generateWebPageSchema(
        'Careers at Hirenest - Join Our Team',
        'Join the Hirenest team and help us build the next generation of AI-powered recruitment technology. View open positions and apply today.',
        'https://hirenest.ai/careers',
        [
            { name: 'Home', url: 'https://hirenest.ai' },
            { name: 'Careers', url: 'https://hirenest.ai/careers' }
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
