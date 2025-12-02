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

export const metadata: Metadata = {
    title: 'For Employers - Find Top Talent Fast',
    description: 'AI-powered recruitment platform for employers. Post jobs, get matched with qualified candidates, and build your dream team faster with our intelligent hiring tools.',
    keywords: ['employer', 'hire talent', 'recruitment', 'AI hiring', 'job posting', 'candidate matching', 'talent acquisition'],
    openGraph: {
        title: 'For Employers - Find Top Talent Fast | Hirenest',
        description: 'AI-powered recruitment platform for employers. Post jobs and get matched with qualified candidates instantly.',
        type: 'website',
        images: [
            {
                url: '/job-provider-hero.png',
                width: 1200,
                height: 630,
                alt: 'Employer Platform',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'For Employers - Find Top Talent Fast | Hirenest',
        description: 'AI-powered recruitment platform for employers. Post jobs and get matched with qualified candidates instantly.',
        images: ['/job-provider-hero.png'],
    },
}

export default function JobProviderPage() {
    return (
        <Box>
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
