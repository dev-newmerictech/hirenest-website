'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateVideoObjectSchema,
    generateWebPageSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function SmartJobMatchingStructuredData() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate Image Schema
    const imageSchema = generateImageObjectSchema(
        'https://hirenest.ai/smart_job_matching_hero.png',
        {
            name: 'Smart Job Matching - Find Your Dream Job Without the Search',
            description: 'AI-powered job matching interface showing personalized job recommendations',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    // Generate Video Schema
    const videoSchema = generateVideoObjectSchema(
        'Smart Job Matching Demo',
        'See how Hirenest AI analyzes your profile to deliver perfect job opportunities directly to you. Stop scrolling endlessly and let our smart matching find your dream job.',
        'https://hirenest.ai/smart_job_matching_hero.png',
        '2024-01-15T00:00:00.000Z',
        {
            duration: 'PT4M30S', // 4 minutes 30 seconds
            width: 1920,
            height: 1080
        }
    );

    // Generate WebPage Schema
    const webPageSchema = generateWebPageSchema(
        'Smart Job Matching - Find Perfect Opportunities',
        'AI-driven job matching that analyzes your skills, experience, and preferences to deliver personalized job recommendations. Find your perfect role faster.',
        'https://hirenest.ai/smart-job-matching',
        [
            { name: 'Home', url: 'https://hirenest.ai' },
            { name: 'Smart Job Matching', url: 'https://hirenest.ai/smart-job-matching' }
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
