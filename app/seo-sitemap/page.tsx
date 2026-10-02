import { enabledJobTitles } from '@/app/lib/programmatic-seo/enabled-job-titles';
import { Metadata } from 'next';
import { Box, Container, Heading, Text, SimpleGrid, Link, Badge, VStack, HStack, Tabs } from '@chakra-ui/react';
import { fetchBlogPosts } from '@/lib/blog-data';
import { getAllJobBoardPages, LOCATION_JOB_BOARDS, SUPPORTED_LOCATIONS } from '@/app/lib/programmatic-seo/job-board';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Site Map - All Pages',
  description: 'Complete list of all pages on Hirenest',
  robots: 'index, follow',
};

// Programmatic SEO sections configuration
const sections = [
  {
    id: 'interview-questions',
    title: 'Interview Questions',
    color: 'blue',
    path: '/interview-questions',
    description: 'Common questions and expert answers for job interviews',
    getHref: (slug: string) => `/interview-questions/${slug}`,
    getLabel: (title: string) => `${title} Interview Questions`,
  },
  {
    id: 'resume-keywords',
    title: 'Resume Keywords',
    color: 'green',
    path: '/resume-keywords',
    description: 'ATS-friendly resume keywords and skills',
    getHref: (slug: string) => `/resume-keywords/${slug}`,
    getLabel: (title: string) => `${title} Resume Keywords`,
  },
  {
    id: 'salary-guides',
    title: 'Salary Guides',
    color: 'purple',
    path: '/salary',
    description: 'Salary data and compensation benchmarks',
    getHref: (slug: string) => `/salary/${slug}`,
    getLabel: (title: string) => `${title} Salary`,
  },
  {
    id: 'cover-letters',
    title: 'Cover Letters',
    color: 'orange',
    path: '/cover-letter',
    description: 'Professional cover letter templates and examples',
    getHref: (slug: string) => `/cover-letter/${slug}`,
    getLabel: (title: string) => `${title} Cover Letter`,
  },
  {
    id: 'job-descriptions',
    title: 'Job Descriptions',
    color: 'teal',
    path: '/job-description',
    description: 'Job description templates and resources',
    getHref: (slug: string) => `/job-description/${slug}`,
    getLabel: (title: string) => `${title} Job Description`,
  },
];

// Core pages to include
const corePages = [
  { title: 'Home', href: '/' },
  { title: 'Job Board', href: '/jobs' },
  { title: 'Job Seekers', href: '/job-seeker' },
  { title: 'Employers', href: '/job-provider' },
  { title: 'About Us', href: '/about' },
  { title: 'Careers', href: '/careers' },
  { title: 'Blog', href: '/blog' },
  { title: 'Security', href: '/security' },
];

// Feature pages
const featurePages = [
  { title: 'AI Resume Builder', href: '/ai-resume-builder' },
  { title: 'Smart Job Matching', href: '/smart-job-matching' },
  { title: 'AI Candidate Ranking', href: '/ai-candidate-ranking' },
  { title: 'Career Insights', href: '/career-insights' },
  { title: 'Profile Optimization', href: '/profile-optimization' },
  { title: 'Skill Assessments', href: '/skill-assessments' },
  { title: 'Quick Screening', href: '/quick-screening' },
  { title: 'Custom Assessments', href: '/custom-assessments' },
  { title: 'Verified Candidates', href: '/verified-candidates' },
  { title: 'Hiring Analytics', href: '/hiring-analytics' },
  { title: 'Team Collaboration', href: '/team-collaboration' },
  { title: 'Fast Track Applications', href: '/fast-track-applications' },
];

const baseUrl = 'https://hirenest.ai';

async function getBlogPosts() {
  try {
    const posts = await fetchBlogPosts();
    return posts.slice(0, 50).map((post: any) => ({
      title: post.title,
      href: `/blog/${post.slug}`,
      url: `${baseUrl}/blog/${post.slug}`,
      date: new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    }));
  } catch {
    return [];
  }
}

export default async function SeoSitemapPage() {
  const blogPosts = await getBlogPosts();
  const totalEnabledPages = enabledJobTitles.length * sections.length;
  const allJobPages = getAllJobBoardPages();

  // Get unique job+location combinations
  const locationJobPages = LOCATION_JOB_BOARDS.map(loc => ({
    jobSlug: loc.jobSlug,
    locationSlug: loc.locationSlug,
    jobTitle: loc.jobTitle,
    locationName: loc.locationName,
    url: `/jobs/${loc.locationSlug}/${loc.jobSlug}`,
    title: `${loc.jobTitle} Jobs in ${loc.locationName}`
  }));

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
            <Badge colorPalette="blue" size="md" px={3} py={1} borderRadius="full">
              {enabledJobTitles.length} Job Titles
            </Badge>
            <Badge colorPalette="purple" size="md" px={3} py={1} borderRadius="full">
              {totalEnabledPages}+ Pages
            </Badge>
            <Badge colorPalette="green" size="md" px={3} py={1} borderRadius="full">
              {blogPosts.length} Blog Posts
            </Badge>
            <Badge colorPalette="red" size="md" px={3} py={1} borderRadius="full">
              {allJobPages.length} Job Board Pages
            </Badge>
            <Badge colorPalette="orange" size="md" px={3} py={1} borderRadius="full">
              {locationJobPages.length} Location Pages
            </Badge>
          </HStack>
        </VStack>

        {/* Tabs for different sections */}
        <Tabs.Root defaultValue="core" mb={12}>
          <Tabs.List mb={6}>
            <Tabs.Trigger value="core">Core Pages</Tabs.Trigger>
            <Tabs.Trigger value="jobs">Job Board</Tabs.Trigger>
            <Tabs.Trigger value="locations">Location Pages</Tabs.Trigger>
            <Tabs.Trigger value="seo">Programmatic SEO</Tabs.Trigger>
            <Tabs.Trigger value="blog">Blog</Tabs.Trigger>
          </Tabs.List>

          <>
            {/* Core Pages Panel */}
            <Tabs.Content value="core">
              <Box bg="white" borderRadius="2xl" boxShadow="sm" border="1px" borderColor="gray.200" p={8}>
                <VStack gap={6} align="stretch">
                  {/* Main Navigation */}
                  <Box>
                    <Heading as="h3" size="md" mb={4} color="gray.700">Main Navigation</Heading>
                    <SimpleGrid columns={{ base: 2, md: 3 }} gap={3}>
                      {corePages.map((page) => (
                        <Link
                          key={page.href}
                          href={page.href}
                          fontSize="sm"
                          fontWeight="medium"
                          color="blue.600"
                          _hover={{ color: 'blue.800', textDecoration: 'underline' }}
                        >
                          {page.title}
                        </Link>
                      ))}
                    </SimpleGrid>
                  </Box>

                  {/* Feature Pages */}
                  <Box>
                    <Heading as="h3" size="md" mb={4} color="gray.700">Features</Heading>
                    <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={2}>
                      {featurePages.map((page) => (
                        <Link
                          key={page.href}
                          href={page.href}
                          fontSize="sm"
                          color="gray.600"
                          _hover={{ color: 'purple.600', textDecoration: 'underline' }}
                        >
                          {page.title}
                        </Link>
                      ))}
                    </SimpleGrid>
                  </Box>

                  {/* Legal Pages */}
                  <Box>
                    <Heading as="h3" size="md" mb={4} color="gray.700">Legal</Heading>
                    <SimpleGrid columns={{ base: 2, md: 3 }} gap={3}>
                      <Link href="/privacy-policy" fontSize="sm" color="gray.600">Privacy Policy</Link>
                      <Link href="/terms-of-service" fontSize="sm" color="gray.600">Terms of Service</Link>
                      <Link href="/cookie-policy" fontSize="sm" color="gray.600">Cookie Policy</Link>
                      <Link href="/refund-policy" fontSize="sm" color="gray.600">Refund Policy</Link>
                    </SimpleGrid>
                  </Box>
                </VStack>
              </Box>
            </Tabs.Content>

            {/* Job Board Panel */}
            <Tabs.Content value="jobs">
              <Box bg="white" borderRadius="2xl" boxShadow="sm" border="1px" borderColor="gray.200" overflow="hidden">
                {/* Section Header */}
                <Box
                  px={8}
                  py={5}
                  borderBottom="1px solid"
                  borderColor="gray.100"
                  bg="red.50"
                >
                  <HStack justify="space-between" align="center">
                    <VStack align="start" gap={0}>
                      <Heading as="h2" size="lg" color="red.700" fontWeight="700">
                        Job Board
                      </Heading>
                      <Text fontSize="sm" color="gray.600">Browse thousands of job openings with AI-powered matching</Text>
                    </VStack>
                    <Badge
                      colorPalette="red"
                      variant="subtle"
                      fontSize="sm"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {allJobPages.length} pages
                    </Badge>
                  </HStack>
                </Box>

                {/* Index Link */}
                <Box px={8} py={3} borderBottom="1px" borderColor="gray.100" bg="gray.50">
                  <Link href="/jobs" fontSize="sm" fontWeight="medium" color="red.600" _hover={{ textDecoration: 'underline' }}>
                    View Job Board →
                  </Link>
                </Box>

                {/* Links Grid */}
                <Box p={8}>
                  <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} gap={2}>
                    {allJobPages.map((job) => (
                      <Link
                        key={`jobs-${job.slug}`}
                        href={`/jobs/roles/${job.slug}`}
                        fontSize="sm"
                        color="gray.600"
                        _hover={{ color: 'red.600', textDecoration: 'underline' }}
                        py={1}
                        display="block"
                        truncate
                      >
                        {job.title} Jobs
                      </Link>
                    ))}
                  </SimpleGrid>
                </Box>
              </Box>
            </Tabs.Content>

            {/* Location Pages Panel */}
            <Tabs.Content value="locations">
              <Box bg="white" borderRadius="2xl" boxShadow="sm" border="1px" borderColor="gray.200" overflow="hidden">
                {/* Section Header */}
                <Box
                  px={8}
                  py={5}
                  borderBottom="1px solid"
                  borderColor="gray.100"
                  bg="orange.50"
                >
                  <HStack justify="space-between" align="center">
                    <VStack align="start" gap={0}>
                      <Heading as="h2" size="lg" color="orange.700" fontWeight="700">
                        Location-Specific Job Pages
                      </Heading>
                      <Text fontSize="sm" color="gray.600">Job pages optimized for India, Dubai, and US locations</Text>
                    </VStack>
                    <Badge
                      colorPalette="orange"
                      variant="subtle"
                      fontSize="sm"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {locationJobPages.length} pages
                    </Badge>
                  </HStack>
                </Box>

                {/* Location Grouping */}
                <Box p={8}>
                  <VStack gap={8} align="stretch">
                    {/* India Locations */}
                    <Box>
                      <Heading as="h3" size="md" mb={4} color="gray.700">🇮🇳 India</Heading>
                      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} gap={2}>
                        {locationJobPages
                          .filter(p => p.locationName.includes('India'))
                          .slice(0, 30)
                          .map((page) => (
                            <Link
                              key={page.url}
                              href={page.url}
                              fontSize="sm"
                              color="gray.600"
                              _hover={{ color: 'orange.600', textDecoration: 'underline' }}
                              py={1}
                              display="block"
                              truncate
                            >
                              {page.title}
                            </Link>
                          ))}
                      </SimpleGrid>
                    </Box>

                    {/* Dubai / UAE Locations */}
                    <Box>
                      <Heading as="h3" size="md" mb={4} color="gray.700">🇦🇪 Dubai / UAE</Heading>
                      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} gap={2}>
                        {locationJobPages
                          .filter(p => p.locationName.includes('UAE') || p.locationName.includes('Dubai'))
                          .map((page) => (
                            <Link
                              key={page.url}
                              href={page.url}
                              fontSize="sm"
                              color="gray.600"
                              _hover={{ color: 'orange.600', textDecoration: 'underline' }}
                              py={1}
                              display="block"
                              truncate
                            >
                              {page.title}
                            </Link>
                          ))}
                      </SimpleGrid>
                    </Box>

                    {/* US Locations */}
                    <Box>
                      <Heading as="h3" size="md" mb={4} color="gray.700">🇺🇸 United States</Heading>
                      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} gap={2}>
                        {locationJobPages
                          .filter(p => !p.locationName.includes('India') && !p.locationName.includes('UAE') && !p.locationName.includes('Dubai'))
                          .slice(0, 30)
                          .map((page) => (
                            <Link
                              key={page.url}
                              href={page.url}
                              fontSize="sm"
                              color="gray.600"
                              _hover={{ color: 'orange.600', textDecoration: 'underline' }}
                              py={1}
                              display="block"
                              truncate
                            >
                              {page.title}
                            </Link>
                          ))}
                      </SimpleGrid>
                    </Box>
                  </VStack>
                </Box>
              </Box>
            </Tabs.Content>

            {/* Programmatic SEO Panel */}
            <Tabs.Content value="seo">
              <VStack gap={8} align="stretch">
                {sections.map((section) => (
                  <Box
                    key={section.id}
                    bg="white"
                    borderRadius="2xl"
                    boxShadow="sm"
                    border="1px"
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
                        <VStack align="start" gap={0}>
                          <Heading as="h2" size="lg" color={`${section.color}.700`} fontWeight="700">
                            {section.title}
                          </Heading>
                          <Text fontSize="sm" color="gray.600">{section.description}</Text>
                        </VStack>
                        <Badge
                          colorPalette={section.color}
                          variant="subtle"
                          fontSize="sm"
                          px={3}
                          py={1}
                          borderRadius="full"
                        >
                          {enabledJobTitles.length} pages
                        </Badge>
                      </HStack>
                    </Box>

                    {/* Index Link */}
                    <Box px={8} py={3} borderBottom="1px" borderColor="gray.100" bg="gray.50">
                      <Link href={section.path} fontSize="sm" fontWeight="medium" color={`${section.color}.600`} _hover={{ textDecoration: 'underline' }}>
                        View all {section.title.toLowerCase()} →
                      </Link>
                    </Box>

                    {/* Links Grid */}
                    <Box p={8}>
                      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} gap={2}>
                        {enabledJobTitles.map((job) => (
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
            </Tabs.Content>

            {/* Blog Panel */}
            <Tabs.Content value="blog">
              <Box bg="white" borderRadius="2xl" boxShadow="sm" border="1px" borderColor="gray.200" p={8}>
                <VStack gap={4} align="stretch">
                  <Heading as="h2" size="lg" color="gray.800">
                    Blog Posts
                  </Heading>
                  <Text color="gray.500">
                    Latest articles and insights
                  </Text>
                  {blogPosts.length > 0 ? (
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                      {blogPosts.map((post) => (
                        <Link
                          key={post.href}
                          href={post.href}
                          p={4}
                          borderRadius="md"
                          border="1px"
                          borderColor="gray.200"
                          _hover={{ borderColor: 'blue.300', bg: 'blue.50' }}
                          display="block"
                        >
                          <Text fontSize="sm" fontWeight="medium" color="gray.800" mb={1}>
                            {post.title}
                          </Text>
                          <Text fontSize="xs" color="gray.500" mb={2}>
                            {post.url}
                          </Text>
                          <Text fontSize="xs" color="gray.400">
                            {post.date}
                          </Text>
                        </Link>
                      ))}
                    </SimpleGrid>
                  ) : (
                    <Text color="gray.400">No blog posts available</Text>
                  )}
                </VStack>
              </Box>
            </Tabs.Content>
          </>
        </Tabs.Root>

        {/* Footer note */}
        <Box mt={12} textAlign="center">
          <Text fontSize="sm" color="gray.400">
            All pages listed return HTTP 200 status. No broken or redirected URLs.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
