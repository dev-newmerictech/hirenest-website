import { jobTitles } from '@/app/lib/programmatic-seo/job-titles';
import { Metadata } from 'next';
import { Box, Container, Heading, Text, SimpleGrid, Link, Badge, VStack, HStack, Icon } from '@chakra-ui/react';

export const metadata: Metadata = {
  title: 'Site Map - All Pages',
  description: 'Complete list of all pages on Hirenest',
  robots: 'index, follow',
};

const sections = [
  {
    id: 'interview-questions',
    title: 'Interview Questions',
    color: 'blue',
    getHref: (slug: string) => `/interview-questions/${slug}`,
    getLabel: (title: string) => `${title} Interview Questions`,
  },
  {
    id: 'resume-keywords',
    title: 'Resume Keywords',
    color: 'green',
    getHref: (slug: string) => `/resume-keywords/${slug}`,
    getLabel: (title: string) => `${title} Resume Keywords`,
  },
  {
    id: 'salary-guides',
    title: 'Salary Guides',
    color: 'purple',
    getHref: (slug: string) => `/salary/${slug}`,
    getLabel: (title: string) => `${title} Salary`,
  },
  {
    id: 'cover-letters',
    title: 'Cover Letters',
    color: 'orange',
    getHref: (slug: string) => `/cover-letter/${slug}`,
    getLabel: (title: string) => `${title} Cover Letter`,
  },
  {
    id: 'job-descriptions',
    title: 'Job Descriptions',
    color: 'teal',
    getHref: (slug: string) => `/job-description/${slug}`,
    getLabel: (title: string) => `${title} Job Description`,
  },
];

export default function SeoSitemapPage() {
  return (
    <Box bg="gray.50" minH="100vh" py={12}>
      <Container maxW="7xl">
        {/* Header */}
        <VStack gap={3} mb={12} textAlign="center" mt={24}>
          <Heading as="h1" size="2xl" fontWeight="bold" color="gray.800">
            Site Map
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Complete index of all pages on Hirenest
          </Text>
          <HStack gap={3} flexWrap="wrap" justifyContent="center">
            {sections.map((s) => (
              <Badge
                key={s.id}
                colorPalette={s.color}
                size="md"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
              >
                {s.title}: {jobTitles.length}
              </Badge>
            ))}
          </HStack>
        </VStack>

        {/* Sections */}
        <VStack gap={12} align="stretch">
          {sections.map((section, idx) => (
            <Box
              key={section.id}
              bg="white"
              borderRadius="2xl"
              boxShadow="sm"
              border="1px solid"
              borderColor="gray.200"
              overflow="hidden"
            >
              {/* Section Header */}
              <Box
                px={8}
                py={5}
                borderBottom="1px solid"
                borderColor="gray.100"
                bg={`${section.color}.50`}
              >
                <HStack justify="space-between" align="center">
                  <Heading as="h2" size="lg" color={`${section.color}.700`} fontWeight="700">
                    {section.title}
                  </Heading>
                  <Badge
                    colorPalette={section.color}
                    variant="subtle"
                    fontSize="sm"
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    {jobTitles.length} pages
                  </Badge>
                </HStack>
              </Box>

              {/* Links Grid */}
              <Box p={8}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={2}>
                  {jobTitles.map((job) => (
                    <Link
                      key={`${section.id}-${job.slug}`}
                      href={section.getHref(job.slug)}
                      fontSize="sm"
                      color="gray.600"
                      _hover={{ color: `${section.color}.600`, textDecoration: 'underline' }}
                      py={1}
                      display="block"
                      truncate
                    >
                      {section.getLabel(job.title)}
                    </Link>
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
          ))}
        </VStack>

        {/* Footer note */}
        <Box mt={12} textAlign="center">
          <Text fontSize="sm" color="gray.400">
            Total: {sections.length * jobTitles.length} pages across {sections.length} categories
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
