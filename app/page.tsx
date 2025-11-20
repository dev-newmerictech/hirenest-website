import { Box } from '@chakra-ui/react';
import { Block as Navbar } from '@/src/components/blocks/marketing-navbars/navbar-island/block';
import { Block as Hero } from '@/src/components/blocks/heroes/hero-with-image-bottom-centered/block';
import { Block as Logos } from '@/src/components/blocks/logos/logo-centered/block';
import { Block as Pricing } from '@/src/components/blocks/pricing/pricing-simple/block';
import { Block as FAQ } from '@/src/components/blocks/faqs/faq-with-inline-headline/block';
import { Block as CTA } from '@/src/components/blocks/cta/cta-02/block';
import { Block as CTADualButton } from '@/src/components/blocks/cta/cta-dual-button/block';
import { GotTalent } from './components/GotTalent';
import { NeedTalent } from './components/Needtalent';
import { Work } from './components/Work';
import { ResumeCTA } from './components/resumeCTA';
import { Block as Footer } from '@/src/components/blocks/footers/footer-with-four-columns/block';

export default function Home() {
  return (
    <>
      <Navbar />
      <Box>
        <Hero />
      </Box>
      <GotTalent />
      <NeedTalent />
      <CTA />
      <Work />
      <ResumeCTA />
      <Logos />
      <Pricing />
      <FAQ />
      <CTADualButton />
    <Footer />
    </>
  );
}
