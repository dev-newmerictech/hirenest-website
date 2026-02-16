'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateVideoObjectSchema,
    generateWebPageSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function VerifiedCandidatesStructuredData() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate Image Schema - Using provider OG image as specific hero doesn't exist yet
    const imageSchema = generateImageObjectSchema(
        'https://hirenest.ai/job-provider-og.png',
        {
            name: 'Verified Candidates - Hire With Confidence',
            description: 'Stop worrying about resume fraud and bad hires. Our verification process ensures every candidate is exactly who they say they are.',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    // Generate Video Schema
    const videoSchema = generateVideoObjectSchema(
        'Verified Candidates Demo',
        'See how our comprehensive background checks and skill verification process ensure you only hire trusted talent.',
        'https://hirenest.ai/job-provider-og.png',
        '2024-01-15T00:00:00.000Z',
        {
            duration: 'PT2M50S',
            width: 1920,
            height: 1080
        }
    );

    // Generate WebPage Schema
    const webPageSchema = generateWebPageSchema(
        'Verified Candidates - Pre-Screened Talent Pool',
        'Hire with confidence using Verified Candidates. Access a pool of pre-screened talent with verified skills and background checks.',
        'https://hirenest.ai/verified-candidates',
        [
            { name: 'Home', url: 'https://hirenest.ai' },
            { name: 'Verified Candidates', url: 'https://hirenest.ai/verified-candidates' }
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
