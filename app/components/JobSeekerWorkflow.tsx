'use client'

import { Box, Container, Flex, Heading, Text, VStack, Grid, Button } from '@chakra-ui/react'
import { UserPlus, Brain, Target } from 'lucide-react'

const workflowSteps = [
  {
    icon: UserPlus,
    title: 'Create Your Profile',
    description:
      'Upload your resume and let our AI build your profile instantly. No long forms. No repetitive fields. Takes under 5 minutes.',
    step: '01',
  },
  {
    icon: Brain,
    title: 'Prove Your Skills',
    description:
      'Complete AI-powered assessments across 350+ skill areas. One assessment takes 15–20 minutes and unlocks visibility with multiple employers.',
    step: '02',
  },
  {
    icon: Target,
    title: 'Get Matched & Discovered',
    description:
      'Our AI matches you with roles that fit your validated skills and goals. Employers searching for your abilities find you—even while you sleep.',
    step: '03',
  },
]

export const JobSeekerWorkflow = () => (
  <Box w="full" position="relative" py={{ base: '12', md: '20', lg: '24' }}>
    <Container maxW="7xl" position="relative">
      {/* Section Header */}
      <VStack alignItems="center" mb={{ base: 12 }} textAlign="center">
        <Text fontSize="sm" fontWeight="600" color="#4241ff" textTransform="uppercase" letterSpacing="wider"
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
          maxW="3xl"
          mt={2}
        >
          Stop applying into the void. Prove your skills once and get discovered by employers who actually want you.
        </Text>
      </VStack>

      {/* Workflow Steps */}
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={{ base: 6, md: 8 }}
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
              h="full"
              position="relative"
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-6px)',
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
                lineHeight="1.1"
                letterSpacing="tight"
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
                <Heading fontSize={{ base: 'lg', md: 'xl' }} color="#1d1d1f">
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

      {/* CTA */}
      <VStack mt={{ base: 12, md: 16 }} textAlign="center">
        <Button
          size="lg"
          px={10}
          py={7}
          fontSize="lg"
          fontWeight="600"
          borderRadius="full"
          background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
          color="white"
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
          transition="all 0.3s"
          onClick={() => window.open('https://app.hirenest.ai/', '_blank')}
        >
          Start Your Free Profile
        </Button>
      </VStack>
    </Container>
  </Box >
)
