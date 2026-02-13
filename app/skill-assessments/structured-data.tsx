'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateVideoObjectSchema,
    generateWebPageSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function SkillAssessmentsStructuredData() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate WebPage Schema
    const webPageSchema = generateWebPageSchema(
        'Skill Assessments - Validate Your Expertise',
        'Validate your expertise with 350+ industry-standard skill assessments. Earn verified badges in coding, soft skills, and more to stand out to top employers.',
        'https://hirenest.ai/skill-assessments',
        [
            { name: 'Home', url: 'https://hirenest.ai' },
            { name: 'Skill Assessments', url: 'https://hirenest.ai/skill-assessments' }
        ]
    );

    // Generate Image Schema
    const imageSchema = generateImageObjectSchema(
        'https://www.hirenest.ai/skill_assessments_hero.png',
        {
            name: 'Skill Assessments - Validate Your Expertise',
            description: 'Prove your skills with industry-standard assessments and earn verified badges.',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    // Generate Video Schema
    const videoSchema = generateVideoObjectSchema(
        'Skill Assessments Demo',
        'Learn how to take skill assessments, earn badges, and showcase your expertise to potential employers.',
        'https://www.hirenest.ai/skill_assessments_hero.png',
        '2024-01-15T00:00:00.000Z',
        {
            duration: 'PT3M30S',
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
