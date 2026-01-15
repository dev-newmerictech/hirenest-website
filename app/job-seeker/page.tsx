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
import { generateWebPageSchema, generateSoftwareApplicationSchema } from '../lib/structured-data';

export const metadata: Metadata = pageMetadata.jobSeeker;

export default function JobSeekerPage() {
    const webPageSchema = generateWebPageSchema(
        'For Job Seekers - Find Your Dream Job',
        'AI-powered job matching platform for job seekers. Create your profile, upload your resume, and get matched with opportunities.',
        'https://hirenest.ai/job-seeker',
        [
            { name: 'Home', url: 'https://hirenest.ai' },
            { name: 'For Job Seekers' }
        ]
    );

    const softwareSchema = generateSoftwareApplicationSchema(
        'Hirenest Job Seeker Platform',
        'AI-powered job matching and career development platform for job seekers',
        'https://hirenest.ai/job-seeker',
        'BusinessApplication'
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
