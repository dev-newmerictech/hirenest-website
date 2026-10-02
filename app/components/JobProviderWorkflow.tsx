'use client'

import { Box, Container, Flex, Heading, Text, VStack, Grid } from '@chakra-ui/react'
import { FileSearch, Zap, TrendingUp } from 'lucide-react'

const workflowSteps = [
  {
    icon: FileSearch,
    title: 'Get Ranked Candidates by Skills',
    description:
      'Applicants complete AI-powered assessments across 350+ skills. You see candidates ranked by demonstrated ability — not resumes or keywords.',
    step: '01',
  },
  {
    icon: Zap,
    title: 'Validate Skills Without Limits',
    description:
      'Unlimited automated skill verification means no per-test fees and no rationing. Evaluate everyone fairly with the same questions and scoring.',
    step: '02',
  },
  {
    icon: TrendingUp,
    title: 'Hire Faster with Data-Backed Confidence',
    description:
      'Interview only candidates who have already proven they can do the job. Reduce bias, cut time-to-hire by ~40%, and improve hiring quality.',
    step: '03',
  },
]

export const JobProviderWorkflow = () => (
  <Box w="full" position="relative" py={{ base: '12', md: '20', lg: '24' }}>
    <Container maxW="7xl" position="relative">
      {/* Section Header */}
      <VStack alignItems="center" mb={{ base: 12, md: 16 }} textAlign="center">
        <Text
          fontSize="sm" fontWeight="600" color="#4241ff" textTransform="uppercase" letterSpacing="wider"
          mb={3}
        >
          How It Works
        </Text>

        <Heading
          as="h2"
          fontSize={{ base: '3xl', md: '4xl' }}
          fontWeight="800"
          color="#1d1d1f"
          lineHeight="1.1"
          letterSpacing="tight"
          display={'flex'}
          gap={2}
        >
          3 Simple Steps. Zero Guesswork.
        </Heading>

        <Text fontSize={{ base: 'lg', md: 'xl' }} color="#6e6e73"
          maxW="4xl"
          mt={2}
        >
          Skills-first hiring that replaces assumptions with proof — for better hires and better outcomes.
        </Text>
      </VStack>

      {/* Workflow Steps */}
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={8}
      >
        {workflowSteps.map((step, index) => {
          const Icon = step.icon
          return (
            <VStack
              key={index}
              bg="white"
              p={8}
              rounded="2xl"
              border="1px solid"
              borderColor="gray.200"
              align="flex-start"
              gap={6}
              position="relative"
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-8px)',
                shadow: 'xl',
                borderColor: '#4241ff',
              }}
            >
              {/* Step Number */}
              <Text
                position="absolute"
                top={4}
                right={4}
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="800"
                color="rgba(66, 65, 255, 0.1)"
              >
                {step.step}
              </Text>

              {/* Icon */}
              <Flex
                w={14}
                h={14}
                align="center"
                justify="center"
                rounded="xl"
                bg="blue.50"
                color="#4241ff"
              >
                <Icon size={28} strokeWidth={2} />
              </Flex>

              {/* Content */}
              <VStack align="flex-start" gap={3}>
                <Heading fontSize={{ base: 'lg', md: 'xl' }} fontWeight="700" color="#1d1d1f">
                  {step.title}
                </Heading>
                <Text color="#6e6e73" lineHeight="1.6" fontSize={{ base: 'md', md: 'lg' }}>
                  {step.description}
                </Text>
              </VStack>
            </VStack>
          )
        })}
      </Grid>

      {/* Bottom CTA */}
      <VStack mt={{ base: 12, md: 16 }} textAlign="center">
        <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="600" color="#000">
          Everyone saves time, effort, money — and frustration.
        </Text>
      </VStack>
    </Container>
  </Box>
)
