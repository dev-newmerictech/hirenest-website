'use client'

import { Box, Button, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { ArrowRight, Sparkles } from 'lucide-react'

interface JobSeekerCTAProps {
  variant?: 'primary' | 'secondary'
}

export const JobSeekerCTA = ({ variant = 'primary' }: JobSeekerCTAProps) => {
  const isPrimary = variant === 'primary'

  return (
    <Box
      w="full"
      position="relative"
      bg={isPrimary ? '#0f2442' : 'white'}
      py={{ base: '12', md: '16', lg: '20' }}
      overflow="hidden"
    >
      {/* Decorative Background Elements */}
      <Box
        position="absolute"
        top="-100px"
        right="-100px"
        w="300px"
        h="300px"
        borderRadius="full"
        bg={isPrimary ? 'rgba(255, 255, 255, 0.1)' : 'rgba(66, 65, 255, 0.05)'}
        filter="blur(60px)"
      />
      <Box
        position="absolute"
        bottom="-100px"
        left="-100px"
        w="300px"
        h="300px"
        borderRadius="full"
        bg={isPrimary ? 'rgba(255, 255, 255, 0.1)' : 'rgba(66, 65, 255, 0.05)'}
        filter="blur(60px)"
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <Flex direction="column" alignItems="center" textAlign="center" gap={{ base: 6, md: 8 }}>
          {/* Icon */}
          {isPrimary && (
            <Flex
              w={{ base: '60px', md: '80px' }}
              h={{ base: '60px', md: '80px' }}
              bg="rgba(255, 255, 255, 0.2)"
              borderRadius="full"
              alignItems="center"
              justifyContent="center"
            >
              <Sparkles size={40} color="white" strokeWidth={2} />
            </Flex>
          )}

          {/* Heading */}
          <VStack gap={4}>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="800"
              lineHeight="1.1"
              letterSpacing="tight"
              color={isPrimary ? 'white' : '#000'}
            >
              But Don’t Assessments Take Forever?
            </Heading>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={isPrimary ? 'rgba(255, 255, 255, 0.9)' : '#000'}
              lineHeight="1.7"
            >
              Not even close. Most assessments take just <strong>15–20 minutes</strong>.
              One assessment opens doors to multiple employers actively searching for your exact skills.
            </Text>
          </VStack>

          {/* Comparison Block */}
          <VStack
            gap={3}
            fontSize={{ base: 'lg', md: 'xl' }}
            color={isPrimary ? 'rgba(255, 255, 255, 0.85)' : '#000'}
          >
            <Text>• Tailoring 50 resumes: <strong>10+ hours</strong></Text>
            <Text>• Applying to 100 jobs: <strong>20+ hours</strong></Text>
            <Text>• Getting zero responses: <strong>Priceless frustration</strong></Text>
            <Text fontWeight="600" pt={2}>
              15 minutes once vs. 30+ hours of resume tweaking. You choose.
            </Text>
            <Text opacity={0.85}>
              Plus, you get detailed feedback showing exactly where to improve.
              Think of it as a skills diagnostic — not a pass/fail test.
            </Text>
          </VStack>

          {/* CTA Button */}
          <Flex direction={{ base: 'column', sm: 'row' }} gap={4} mt={6}>
            <Button
              size={{ base: 'md', md: 'lg' }}
              bg={isPrimary ? 'white' : 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)'}
              color={isPrimary ? '#4241ff' : 'white'}
              px={{ base: 8, md: 10 }}
              py={{ base: 6, md: 7 }}
              fontSize={{ base: 'lg' }}
              fontWeight="600"
              borderRadius="full"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              transition="all 0.3s"
              onClick={() => window.open('https://app.hirenest.ai/jobseeker', '_blank')}
            >
              Start My Free Profile
              <Box as={ArrowRight} ml={2} />
            </Button>
          </Flex>

          {/* Trust Indicators */}
          {isPrimary && (
            <Flex
              gap={{ base: 4, md: 8 }}
              mt={6}
              flexWrap="wrap"
              justifyContent="center"
              color="rgba(255, 255, 255, 0.8)"
              fontSize={{ base: 'sm', sm: 'md' }}
            >
              <Text>Free to join</Text>
              <Text>No credit card required</Text>
              <Text>Cancel anytime</Text>
            </Flex>
          )}
        </Flex>
      </Container>
    </Box>
  )
}
