'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateWebPageSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function SkillAssessmentsStructuredData() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate Image Schema
    const imageSchema = generateImageObjectSchema(
        'https://hirenest.ai/skill_assessments_hero.png',
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

    // Generate WebPage Schema
    const webPageSchema = generateWebPageSchema(
        'Skill Assessments - Validate Your Expertise',
        'Validate your expertise with 350+ industry-standard skill assessments. Earn verified badges in coding, soft skills, and more to stand out to top employers.',
        'https://hirenest.ai/skill-assessments',
        [
            { name: 'Home', url: 'https://hirenest.ai' },
            { name: 'Skill Assessments', url: 'https://hirenest.ai/skill-assessments' }
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
