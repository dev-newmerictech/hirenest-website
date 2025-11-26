import { Metadata } from 'next'
import { Box } from '@chakra-ui/react'
import { AboutHero } from '../components/AboutHero'
import { OurMission } from '../components/OurMission'
import { OurStory } from '../components/OurStory'
import { OurValues } from '../components/OurValues'
import { TeamSection } from '../components/TeamSection'
import { Testimonials } from '../components/Testimonials'
import { Block as CTA } from '@/src/components/blocks/cta/cta-dual-button/block'
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block';

export const metadata: Metadata = {
    title: 'About Us - Transforming Talent Acquisition with AI',
    description: 'Learn about Hirenest\'s mission to revolutionize recruitment through AI-powered matching. Discover our story, values, and the team behind the innovation.',
    keywords: ['about hirenest', 'our mission', 'company values', 'AI recruitment', 'team', 'careers'],
    openGraph: {
        title: 'About Us - Transforming Talent Acquisition with AI | Hirenest',
        description: 'Learn about Hirenest\'s mission to revolutionize recruitment through AI-powered matching.',
        type: 'website',
        images: [
            {
                url: '/about-hero.png',
                width: 1200,
                height: 630,
                alt: 'About Hirenest',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Us - Transforming Talent Acquisition with AI | Hirenest',
        description: 'Learn about Hirenest\'s mission to revolutionize recruitment through AI-powered matching.',
        images: ['/about-hero.png'],
    },
}

export default function AboutPage() {
    return (
        <Box>
            {/* Hero Section */}
            <AboutHero />

            {/* Mission Section */}
            <OurMission />

            {/* Story Section */}
            <OurStory />

            {/* Values Section */}
            <OurValues />

            {/* Team Section */}
            <TeamSection />

            {/* Testimonials */}
            <Testimonials />

            {/* Final CTA */}
            <CTA />
            <FAQ />
        </Box>
    )
}
