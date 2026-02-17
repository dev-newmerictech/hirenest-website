'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
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
