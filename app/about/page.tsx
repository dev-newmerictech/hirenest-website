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
import { pageMetadata } from '../lib/metadata';
import { AboutStructuredData } from './structured-data';

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
    return (
        <Box>
            <AboutStructuredData />
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
