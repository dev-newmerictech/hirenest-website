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

export const metadata: Metadata = {
    title: 'Careers - Join Our Team',
    description: 'Build the future of recruitment with Hirenest. Explore open positions and discover a workplace where innovation meets purpose.',
    keywords: ['careers', 'jobs at hirenest', 'join our team', 'remote jobs', 'hiring', 'work at hirenest'],
    openGraph: {
        title: 'Careers - Join Our Team | Hirenest',
        description: 'Build the future of recruitment with Hirenest. Explore open positions and discover a workplace where innovation meets purpose.',
        type: 'website',
        images: [
            {
                url: '/careers-hero.png',
                width: 1200,
                height: 630,
                alt: 'Careers at Hirenest',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Careers - Join Our Team | Hirenest',
        description: 'Build the future of recruitment with Hirenest. Explore open positions and discover a workplace where innovation meets purpose.',
        images: ['/careers-hero.png'],
    },
}

export default function CareersPage() {
    return (
        <Box>
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
