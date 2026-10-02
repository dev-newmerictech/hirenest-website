import { Metadata } from 'next';
import { Box, Container, VStack, Heading, Text, SimpleGrid } from '@chakra-ui/react';
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
import { generateFAQSchema, generateWebPageSchema, generateImageObjectSchema } from './lib/structured-data';
import { faqs } from '@/src/components/blocks/faqs/faq-with-inline-headline/data';
import Link from 'next/link';

// Force static generation for optimal performance
export const dynamic = 'force-static';

// SEO Resource Card Component
function SeoResourceCard({ href, title, description, icon }: { href: string; title: string; description: string; icon: string }) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <Box
        p={5}
        bg="white"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="gray.200"
        _hover={{ borderColor: 'blue.400', shadow: 'md', transform: 'translateY(-2px)' }}
        transition="all 0.2s"
      >
        <VStack gap={2} align="center">
          <Text fontSize="2xl">{icon}</Text>
          <Heading as="h3" size={{ base: 'lg', lg: 'xl' }} fontWeight="600">
            {title}
          </Heading>
          <Text fontSize="md" color="gray.500">
            {description}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
}

export const metadata: Metadata = pageMetadata.home;

export default function Home() {
  // Generate FAQ Schema for SEO
  const faqSchema = generateFAQSchema(faqs);

  // Generate Image Schema
  const imageSchema = generateImageObjectSchema(
    'https://hirenest.ai/og-image.png',
    {
      name: 'Hirenest - Connect Job Seekers with Employers',
      description: 'AI-powered platform connecting job seekers with employers. Find your dream job or hire exceptional talent with smart matching technology.',
      width: 1200,
      height: 630,
      encodingFormat: 'image/png',
      uploadDate: '2024-01-01T00:00:00.000Z',
      author: 'Hirenest Team'
    }
  );

  // Generate WebPage Schema
  const webPageSchema = generateWebPageSchema(
    pageMetadata.home.title as string,
    pageMetadata.home.description as string,
    'https://hirenest.ai',
    [{ name: 'Home', url: 'https://hirenest.ai' }],
    {
      image: imageSchema,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
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

      {/* SEO Resources Section */}
      <Box as="section" pb={16} px={4} bg="white">
        <Container maxW="6xl" centerContent>
          <VStack gap={3} mb={10} textAlign="center">
            <Heading
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="800"
              color="#1d1d1f"
              lineHeight="1.1"
              letterSpacing="tight">
              Career Resources
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }} color="#6e6e73"
              lineHeight="1.4" maxW="3xl">
              Explore our comprehensive guides for job seekers, including interview questions, resume tips, salary insights, and more.
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} gap={4} width="full">
            <SeoResourceCard
              href="/interview-questions"
              title="Interview Questions"
              description="1,100+ questions with answers"
              icon="💼"
            />
            <SeoResourceCard
              href="/resume-keywords"
              title="Resume Keywords"
              description="ATS-friendly keywords"
              icon="📝"
            />
            <SeoResourceCard
              href="/salary"
              title="Salary Guides"
              description="Industry salary data"
              icon="💰"
            />
            <SeoResourceCard
              href="/cover-letter"
              title="Cover Letters"
              description="Professional templates"
              icon="✉️"
            />
            <SeoResourceCard
              href="/job-description"
              title="Job Descriptions"
              description="Role templates"
              icon="📋"
            />
            <SeoResourceCard
              href="/seo-sitemap"
              title="Site Map"
              description="View all pages"
              icon="🗺️"
            />
          </SimpleGrid>
        </Container>
      </Box>

      <Pricing />
      <FAQ />
      <CTADualButton />
    </>
  );
}
