import { Metadata } from 'next'
import { Box } from '@chakra-ui/react'
import { JobSeekerHero } from '../components/JobSeekerHero'
import { JobSeekerWorkflow } from '../components/JobSeekerWorkflow'
import { JobSeekerFeatures } from '../components/JobSeekerFeatures'
import { JobSeekerCTA } from '../components/JobSeekerCTA'
import { Block as Pricing } from '@/src/components/blocks/pricing/pricing-simple/block';
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block';
import { Testimonials } from '../components/Testimonials';
import { pageMetadata } from '../lib/metadata';
import {
    generateWebPageSchema,
    generateSoftwareApplicationSchema,
    generateFAQSchema,
    generateImageObjectSchema,
    generateVideoObjectSchema
} from '../lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

// Force static generation for optimal performance
export const dynamic = 'force-static';

export const metadata: Metadata = pageMetadata.jobSeeker;

export default function JobSeekerPage() {
    const webPageSchema = generateWebPageSchema(
        'For Job Seekers - Find Your Dream Job',
        'AI-powered job matching platform for job seekers. Create your profile, upload your resume, and get matched with opportunities.',
        'https://www.hirenest.ai/job-seeker',
        [
            { name: 'Home', url: 'https://www.hirenest.ai' },
            { name: 'For Job Seekers', url: 'https://www.hirenest.ai/job-seeker' }
        ]
    );

    const softwareSchema = generateSoftwareApplicationSchema(
        'Hirenest Job Seeker Platform',
        'AI-powered job matching and career development platform for job seekers',
        'https://www.hirenest.ai/job-seeker',
        'BusinessApplication'
    );

    // Generate FAQ Schema
    const faqSchema = generateFAQSchema(faqs);

    // Generate Image Schema
    const imageSchema = generateImageObjectSchema(
        'https://www.hirenest.ai/job-seeker-og.png',
        {
            name: 'Hirenest for Job Seekers - Find Your Dream Job',
            description: 'AI-powered job matching platform for job seekers',
            width: 1200,
            height: 630,
            encodingFormat: 'image/png',
            uploadDate: '2024-01-15T00:00:00.000Z',
            author: 'Hirenest Team'
        }
    );

    // Generate Video Schema
    const videoSchema = generateVideoObjectSchema(
        'Hirenest for Job Seekers - Platform Demo',
        'Learn how Hirenest helps job seekers find their dream job with AI-powered matching, resume building, and career insights.',
        'https://www.hirenest.ai/job-seeker-og.png',
        '2024-01-15T00:00:00.000Z',
        {
            duration: 'PT4M15S', // 4 minutes 15 seconds
            width: 1920,
            height: 1080
        }
    );

    return (
        <Box>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
            />

            {/* Hero Section with Images */}
            <JobSeekerHero />

            {/* How Job Seeker Works - Workflow */}
            <JobSeekerWorkflow />

            {/* First CTA */}
            <JobSeekerCTA variant="primary" />

            {/* Features Section */}
            <JobSeekerFeatures />

            <Testimonials />
            <Pricing />
            <FAQ />
        </Box>
    )
}
