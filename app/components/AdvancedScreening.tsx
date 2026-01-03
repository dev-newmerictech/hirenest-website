'use client'
import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, Flex } from '@chakra-ui/react'
import { Video, Brain, BarChart3, Sparkles } from 'lucide-react'
import { CheckCircle2 } from 'lucide-react'

const screeningFeatures = [
  {
    title: 'See Who Can Communicate — Before You Book a Call',
    icon: Video,
    items: [
      'Watch 30-second video responses instead of reading resumes',
      'AI scores communication, confidence, and clarity automatically',
      'Spot your top 5 candidates in under 10 minutes',
      'No Zoom fatigue. No wasted interview hours',
      'Interview only people who can actually articulate their thinking',
    ],
  },
  {
    title: "Know Who’ll Succeed — Before You Make the Offer",
    icon: Brain,
    items: [
      'Fibo analyzes validated skills, assessments, and experience',
      'Predict on-the-job performance with up to 98.5% accuracy',
      'Search candidates by real abilities — not keywords',
      'Bias detection flags inconsistencies in real time',
      'Make data-backed decisions instead of gambling on gut instinct',
    ],
  },
  {
    title: 'Test Every Candidate — Without Costs Exploding',
    icon: BarChart3,
    items: [
      'Unlimited assessments across 350+ skills included',
      'Test 50 candidates for one role if you want — no penalties',
      'No per-candidate or per-test fees',
      'Objectively compare everyone on the same criteria',
      'More data = better hires and lower turnover',
    ],
  },
  {
    title: 'Your AI Assistant That Never Stops Working',
    icon: Sparkles,
    items: [
      'Overnight applicant screening and ranking — done automatically',
      'Top candidates flagged before you log in',
      'For job seekers: 24/7 resume fixes, interview prep, and matching',
      'For employers: ranked shortlists without manual screening',
      'No overtime. No burnout. Just better outcomes',
    ],
  },
]

const brandGradient = 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)'

export const AdvancedScreening = () => {
  return (
    <Box pb={{ base: 16 }} bg="white" position="relative">
      <Container maxW="7xl">
        <VStack gap={4} textAlign="center" mb={12}>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="700"
            color="#000"
          >
            Your Key <Text as="span" color="#4241ff">Hiring Advantages</Text>
          </Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="#000" maxW="3xl">
            Stop screening resumes. Start hiring based on proof.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          {screeningFeatures.map((feature, index) => (
            <Box
              key={index}
              bg="gray.50"
              p={8}
              rounded="2xl"
              border="1px solid"
              borderColor="gray.100"
              transition="all 0.3s"
              _hover={{
                shadow: 'xl',
                borderColor: '#4241ff',
                transform: 'translateY(-4px)',
              }}
            >
              <Flex align="center" gap={4} mb={6}>
                <Flex
                  w={12}
                  h={12}
                  align="center"
                  justify="center"
                  rounded="xl"
                  background={brandGradient}
                  color="white"
                >
                  <Icon as={feature.icon} boxSize={6} />
                </Flex>
                <Heading as="h3" fontSize="xl" fontWeight="700" color="#000">
                  {feature.title}
                </Heading>
              </Flex>

              <VStack as="ul" gap={3} align="start">
                {feature.items.map((item, idx) => (
                  <Flex key={idx} align="center">
                    <Icon as={CheckCircle2} color="#4241ff" mr={3} />
                    <Text fontSize="md" color="#000">
                      {item}
                    </Text>
                  </Flex>
                ))}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
