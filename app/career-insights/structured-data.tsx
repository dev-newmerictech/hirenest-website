'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateWebPageSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function CareerInsightsStructuredData() {
    const faqSchema = generateFAQSchema(faqs);

    const imageSchema = generateImageObjectSchema(
        'https://hirenest.ai/career_insights_hero.png',
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

    const webPageSchema = generateWebPageSchema(
        'Career Insights - Data-Driven Career Decisions',
        'Get personalized AI-powered career insights, real-time salary benchmarks, and emerging market trends to make data-driven decisions and advance your career.',
        'https://hirenest.ai/career-insights',
        [
            { name: 'Home', url: 'https://hirenest.ai' },
            { name: 'Career Insights', url: 'https://hirenest.ai/career-insights' }
        ],
        {
            image: imageSchema,
            author: 'Hirenest Team'
        }
    );

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        </>
    );
}
