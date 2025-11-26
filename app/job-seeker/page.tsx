import { Metadata } from 'next'
import { Box } from '@chakra-ui/react'
import { JobSeekerHero } from '../components/JobSeekerHero'
import { JobSeekerWorkflow } from '../components/JobSeekerWorkflow'
import { JobSeekerFeatures } from '../components/JobSeekerFeatures'
import { JobSeekerCTA } from '../components/JobSeekerCTA'
import { Block as Pricing } from '@/src/components/blocks/pricing/pricing-simple/block';
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block';
import { Testimonials } from '../components/Testimonials';

export const metadata: Metadata = {
    title: 'For Job Seekers - Find Your Dream Job',
    description: 'AI-powered job matching platform for job seekers. Create your profile, upload your resume, and get matched with opportunities that align with your skills and career goals.',
    keywords: ['job seeker', 'find jobs', 'career opportunities', 'AI job matching', 'resume builder', 'job search', 'career development'],
    openGraph: {
        title: 'For Job Seekers - Find Your Dream Job | Hirenest',
        description: 'AI-powered job matching platform for job seekers. Get matched with opportunities that align with your skills and career goals.',
        type: 'website',
        images: [
            {
                url: '/job-seeker-hero-1.png',
                width: 1200,
                height: 630,
                alt: 'Job Seeker Platform',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'For Job Seekers - Find Your Dream Job | Hirenest',
        description: 'AI-powered job matching platform for job seekers. Get matched with opportunities that align with your skills and career goals.',
        images: ['/job-seeker-hero-1.png'],
    },
}

export default function JobSeekerPage() {
    return (
        <Box>
            {/* Hero Section with Images */}
            <JobSeekerHero />

            {/* How Job Seeker Works - Workflow */}
            <JobSeekerWorkflow />

            {/* First CTA */}
            <JobSeekerCTA variant="primary" />

            {/* Features Section */}
            <JobSeekerFeatures />

            {/* Second CTA */}
            {/* Second CTA */}
            <JobSeekerCTA variant="secondary" />

            <Testimonials />
            <Pricing />
            <FAQ />
        </Box>
    )
}
