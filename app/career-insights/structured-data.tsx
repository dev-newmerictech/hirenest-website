'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateVideoObjectSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function CareerInsightsStructuredData() {
    const faqSchema = generateFAQSchema(faqs);

    const imageSchema = generateImageObjectSchema(
        'https://www.hirenest.ai/career_insights_hero.png',
        {
            name: 'Career Insights Dashboard - Data-Driven Career Decisions',
            description: 'AI-powered career insights dashboard with salary benchmarks and market trends',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    const videoSchema = generateVideoObjectSchema(
        'Career Insights Dashboard Demo',
        'Get personalized career insights, salary benchmarks, and market trends to advance your career with Hirenest.',
        'https://www.hirenest.ai/career_insights_hero.png',
        '2024-01-15T00:00:00.000Z',
        {
            duration: 'PT4M00S',
            width: 1920,
            height: 1080
        }
    );

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
        </>
    );
}
