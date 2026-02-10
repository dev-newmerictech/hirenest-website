import { Metadata } from 'next'
import { Box } from '@chakra-ui/react'
import { CareersHero } from '../components/CareersHero'
import { WhyJoinUs } from '../components/WhyJoinUs'
import { OpenPositions } from '../components/OpenPositions'
import { CultureValues } from '../components/CultureValues'
import { ApplicationProcess } from '../components/ApplicationProcess'
import { Testimonials } from '../components/Testimonials'
import { Block as CTA } from '@/src/components/blocks/cta/cta-dual-button/block'
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block';
import { pageMetadata } from '../lib/metadata';
import { CareersStructuredData } from './structured-data';

// Force static generation for optimal performance
export const dynamic = 'force-static';

export const metadata: Metadata = pageMetadata.careers;

export default function CareersPage() {
    return (
        <Box>
            <CareersStructuredData />
            {/* Hero Section */}
            <CareersHero />

            {/* Why Join Us Section */}
            <WhyJoinUs />

            {/* Culture & Values Section */}
            <CultureValues />

            {/* Open Positions Section */}
            <OpenPositions />

            {/* Application Process Section */}
            <ApplicationProcess />

            {/* Testimonials */}
            <Testimonials />

            {/* Final CTA */}
            <CTA />
            <FAQ />
        </Box>
    )
}
