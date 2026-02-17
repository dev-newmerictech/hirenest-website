import { Metadata } from 'next';
import { Box } from '@chakra-ui/react';
import { pageMetadata } from './lib/metadata';
import { Block as Hero } from '@/src/components/blocks/heroes/hero-with-image-bottom-centered/block';
import { Block as Logos } from '@/src/components/blocks/logos/logo-centered/block';
import { Block as Pricing } from '@/src/components/blocks/pricing/pricing-simple/block';
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block';
import { Block as CTA } from '@/src/components/blocks/cta/cta-02/block';
import { Block as CTADualButton } from '@/src/components/blocks/cta/cta-dual-button/block';
import { GotTalent } from './components/GotTalent';
import { NeedTalent } from './components/Needtalent';
import { Work } from './components/Work';
import { AIWorks } from './components/AIWorks';
import { ResumeCTA } from './components/resumeCTA';
import { TabsComponent } from './components/Tabs';
import { ComparisonTable } from './components/ComparisonTable';
import { AICareerPartner } from './components/AICareerPartner';
import { AIAssistantDemo } from './components/AIAssistantDemo';
import { Testimonials } from './components/Testimonials';
import { AIInterviewDemo } from './components/AIInterviewDemo';
import { generateFAQSchema, generateWebPageSchema } from './lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

// Force static generation for optimal performance
export const dynamic = 'force-static';

export const metadata: Metadata = pageMetadata.home;

export default function Home() {
  // Generate FAQ Schema for SEO
  const faqSchema = generateFAQSchema(faqs);

  // Generate WebPage Schema
  const webPageSchema = generateWebPageSchema(
    pageMetadata.home.title as string,
    pageMetadata.home.description as string,
    'https://hirenest.ai',
    [{ name: 'Home', url: 'https://hirenest.ai' }],
    {
      image: 'https://hirenest.ai/og-image.png',
      datePublished: '2024-01-01T00:00:00.000Z',
      dateModified: new Date().toISOString()
    }
  );

  // Generate Article Schema for SEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: pageMetadata.home.title as string,
    description: pageMetadata.home.description as string,
    image: 'https://hirenest.ai/og-image.png',
    author: {
      '@type': 'Organization',
      name: 'Hirenest',
      url: 'https://hirenest.ai'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hirenest',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hirenest.ai/HpLogo.svg'
      }
    },
    datePublished: '2024-01-01T00:00:00.000Z',
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://hirenest.ai'
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Box>
        <Hero />
      </Box>
      <AIInterviewDemo />
      <AIAssistantDemo />
      <GotTalent />
      <NeedTalent />
      <CTA />
      <Work />
      <AIWorks />
      <TabsComponent />
      <ResumeCTA />
      <AICareerPartner />
      <ComparisonTable />
      <Testimonials />
      {/* <Logos /> */}
      <Pricing />
      <FAQ />
      <CTADualButton />
    </>
  );
}
