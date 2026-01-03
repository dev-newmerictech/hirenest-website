'use client'

import { Box, Container, Flex, Heading, Text, VStack, Grid, Button } from '@chakra-ui/react'
import { Brain, FileText, BarChart3, MessageCircle, CheckCircle, Search } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: '🎯 AI Career Matcher',
    description:
      'Stop guessing which jobs fit. Get matched with roles based on your validated skills and career goals — not keywords. Fibo finds opportunities you are actually qualified for.',
  },
  {
    icon: FileText,
    title: '📝 Smart Resume Builder',
    description:
      'Create ATS-friendly resumes that actually reach human recruiters. Optimize for each role in minutes with AI-suggested keywords, templates, and one-click customization.',
  },
  {
    icon: BarChart3,
    title: '📊 Application Tracking',
    description:
      'Never wonder “where did my application go?” Track views, reviews, and next steps in real time. No stress. No guessing. One dashboard for your entire job search.',
  },
  {
    icon: MessageCircle,
    title: '💡 Career Insights',
    description:
      'Get real market-backed insights — salary ranges, in-demand skills, and personalized recommendations to close gaps and advance faster.',
  },
  {
    icon: CheckCircle,
    title: '⭐ Skill Verification',
    description:
      'Prove your expertise with 350+ verified assessments. Rank higher in employer searches. Stand out from applicants who only make claims.',
  },
  {
    icon: Search,
    title: '🔍 Profile Optimization',
    description:
      'Your profile works 24/7. Employers searching for your skills discover you — even when you’re not actively applying. Opportunities come to you.',
  },
]

export const JobSeekerFeatures = () => (
  <Box w="full" bg="white" py={{ base: '12', md: '20' }}>
    <Container maxW="7xl">
      {/* Section Header */}
      <VStack gap={4} textAlign="center" mb={{ base: 12, md: 16 }}>
        <Heading fontSize={{ base: '3xl', md: '4xl' }} fontWeight="700" display={'flex'} gap={2}>
          What You Get With
            Hirenest
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl">
          Everything you need to get discovered, prove your skills, and land the right job — without wasting time on broken systems.
        </Text>
      </VStack>

      {/* Features Grid */}
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={8}>
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <VStack
              key={index}
              align="flex-start"
              bg="white"
              p={8}
              border="1px solid"
              borderColor="gray.200"
              rounded="2xl"
              gap={5}
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-6px)', shadow: 'xl', borderColor: '#4241ff' }}
            >
              <Flex
                w={14}
                h={14}
                align="center"
                justify="center"
                rounded="xl"
                bg="blue.50"
                color="#4241ff"
              >
                <Icon size={28} />
              </Flex>

              <Heading size="md" fontWeight="700">
                {feature.title}
              </Heading>

              <Text color="gray.600" fontSize="sm" lineHeight="1.6">
                {feature.description}
              </Text>
            </VStack>
          )
        })}
      </Grid>

      {/* Bottom CTA */}
      <VStack mt={{ base: 14, md: 20 }} gap={6} textAlign="center">
        <Heading size="lg">Results Beat Resumes.</Heading>
        <Text maxW="2xl">
          With Hirenest, you prove your abilities upfront. Employers find you based on what you can actually do — not how well you play the keyword game.
        </Text>
        <Button
          size="lg"
          rounded="full"
          bg="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
          color="white"
          px={10}
          py={6}
          _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
          onClick={() => window.open('https://app.hirenest.ai/jobseeker', '_blank')}
        >
          Create My Free Profile
        </Button>
      </VStack>
    </Container>
  </Box>
)
