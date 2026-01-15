import { Box } from '@chakra-ui/react';
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
import { generateFAQSchema } from './lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';

export default function Home() {
  // Generate FAQ Schema for SEO
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
