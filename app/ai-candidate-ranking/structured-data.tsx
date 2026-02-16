'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateVideoObjectSchema,
    generateWebPageSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function AICandidateRankingStructuredData() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate Image Schema
    const imageSchema = generateImageObjectSchema(
        'https://hirenest.ai/ai_candidate_ranking_hero.png',
        {
            name: 'AI Candidate Ranking - Hire the Best, Ignore the Rest',
            description: 'Automatically rank and score candidates with AI to make data-driven hiring decisions.',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    // Generate Video Schema
    const videoSchema = generateVideoObjectSchema(
        'AI Candidate Ranking Demo',
        'Learn how our AI Candidate Ranking system helps you identify top talent instantly and remove bias from your hiring process.',
        'https://hirenest.ai/ai_candidate_ranking_hero.png',
        '2024-01-15T00:00:00.000Z',
        {
            duration: 'PT3M15S',
            width: 1920,
            height: 1080
        }
    );

    // Generate WebPage Schema
    const webPageSchema = generateWebPageSchema(
        'AI Candidate Ranking - Smart Hiring Decisions',
        'Instantly identify top talent with AI Candidate Ranking. Our smart scoring system evaluates skills and fit for faster, data-driven hiring decisions.',
        'https://hirenest.ai/ai-candidate-ranking',
        [
            { name: 'Home', url: 'https://hirenest.ai' },
            { name: 'AI Candidate Ranking', url: 'https://hirenest.ai/ai-candidate-ranking' }
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
