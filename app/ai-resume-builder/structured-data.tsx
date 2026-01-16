'use client'

import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateVideoObjectSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export function AIResumeBuilderStructuredData() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate Image Schema
    const imageSchema = generateImageObjectSchema(
        'https://www.hirenest.ai/resume-builder-hero.png',
        {
            name: 'AI Resume Builder - Build a Resume That Gets You Hired',
            description: 'AI-powered resume builder interface showing professional templates',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    // Generate Video Schema
    const videoSchema = generateVideoObjectSchema(
        'AI Resume Builder Tutorial',
        'Learn how to create a professional, ATS-optimized resume using Hirenest AI Resume Builder. Get personalized suggestions and stand out to employers.',
        'https://www.hirenest.ai/resume-builder-hero.png',
        '2024-01-15T00:00:00.000Z',
        {
            duration: 'PT5M00S', // 5 minutes
            width: 1920,
            height: 1080
        }
    );

    return (
        <>
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
