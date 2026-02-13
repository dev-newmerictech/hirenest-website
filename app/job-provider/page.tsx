import { Metadata } from 'next'
import { Box } from '@chakra-ui/react'
import { JobProviderHero } from '../components/JobProviderHero'
import { JobProviderWorkflow } from '../components/JobProviderWorkflow'
import { JobProviderFeatures } from '../components/JobProviderFeatures'
import { AdvancedScreening } from '../components/AdvancedScreening'
import { EnterpriseReady } from '../components/EnterpriseReady'
import { JobProviderCTA } from '../components/JobProviderCTA'
import { Block as Pricing } from '@/src/components/blocks/pricing/pricing-simple/block';
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block';
import { Testimonials } from '../components/Testimonials';
import { FindPerfectCandidates } from '../components/FindPerfectCandidates';
import { pageMetadata } from '../lib/metadata';
import {
    generateFAQSchema,
    generateImageObjectSchema,
    generateVideoObjectSchema,
    generateWebPageSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

// Force static generation for optimal performance
export const dynamic = 'force-static';

export const metadata: Metadata = pageMetadata.jobProvider;

export default function JobProviderPage() {
    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate WebPage Schema
    const webPageSchema = generateWebPageSchema(
        'For Employers - Hire Top Talent',
        'Find and hire exceptional talent with AI-powered candidate ranking, screening tools, and comprehensive analytics.',
        'https://hirenest.ai/job-provider',
        [
            { name: 'Home', url: 'https://hirenest.ai' },
            { name: 'For Employers', url: 'https://hirenest.ai/job-provider' }
        ]
    );

    // Generate Image Schema for the OG image
    const imageSchema = generateImageObjectSchema(
        'https://hirenest.ai/job-provider-og.png',
        {
            name: 'Hirenest for Employers - Find Top Talent Fast',
            description: 'AI-powered recruitment platform dashboard for employers',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    // Generate Video Schema (example - replace with actual video if you have one)
    const videoSchema = generateVideoObjectSchema(
        'Hirenest for Employers - Platform Demo',
        'See how Hirenest helps employers find and hire top talent with AI-powered candidate matching, screening tools, and comprehensive analytics.',
        'https://hirenest.ai/job-provider-og.png', // Using OG image as thumbnail
        '2024-01-15T00:00:00.000Z',
        {
            // Add actual video URLs when available
            // embedUrl: 'https://youtube.com/embed/your-video-id',
            // contentUrl: 'https://hirenest.ai/videos/employer-demo.mp4',
            duration: 'PT3M30S', // 3 minutes 30 seconds
            width: 1920,
            height: 1080
        }
    );

    return (
        <Box>
            {/* Structured Data - WebPage */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />

            {/* Structured Data - FAQ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Structured Data - Image */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
            />

            {/* Structured Data - Video */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
            />

            {/* Hero Section */}
            <JobProviderHero />

            <FindPerfectCandidates />

            {/* How It Works - Workflow */}
            <JobProviderWorkflow />

            {/* First CTA */}
            <JobProviderCTA variant="primary" />

            {/* Features Section */}
            <JobProviderFeatures />

            {/* Advanced Screening Section */}
            <AdvancedScreening />

            {/* Enterprise Ready Section */}
            <Box pb={10} bg="#fff">
                <EnterpriseReady />
            </Box>

            <Testimonials />
            <Pricing />
            <FAQ />
        </Box>
    )
}
