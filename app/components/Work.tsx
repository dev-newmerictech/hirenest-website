import { Box, Button, Container, Flex, Grid, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

export const Work = () => (
  <Box
    w="full"
    position="relative"
    bg="#fff"
  >
    <Container py={{ base: '16', md: '24' }} maxW="7xl" position="relative" zIndex="1">
      <VStack gap="10" textAlign="center">
        <Stack gap="8">
          <Heading
            as="h2"
            fontSize={{ base: '4xl', md: '6xl' }}
            maxW={{ md: '6xl' }}
            mx="auto"
            lineHeight="tighter"
            fontWeight="bold"
            color="#2a3f5d"
          >
            How Hirenest Works
          </Heading>
          <Text
            color="#2a3f5d"
            fontSize={{ base: 'lg', md: '2xl', lg: '24px' }}
            maxW={{ md: '4xl' }}
            mx="auto"
            lineHeight="relaxed"
          >
            Your Smart Path, From Search to Success.
          </Text>
        </Stack>
        <Grid width={{ base: 'full', md: '5xl' }} templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={14}>
          <Box display="flex" flexDirection="column" alignItems="start" justifyContent="start" bg="rgba(242, 241, 255, 1)" borderRadius="24px" p={8} w="full">

            <Heading
              as="h3"
              fontSize={{ base: 'xl', md: '3xl' }}
              lineHeight="tighter"
              fontWeight="bold"
              color="rgba(42, 63, 94, 1)"
              mb={8}
            >
              For Job Seekers
            </Heading>
            <Flex flexDirection="row" alignItems="center" gap={4} mb={6}>

              <Image src="/Group 160.svg" alt="AI Career Matcher" width={60} height={60} />
              <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="400" color="rgba(42, 63, 94, 1)" lineHeight="1.5">
                Create profile & upload resume.
              </Text>
            </Flex>
            
            <Flex flexDirection="row" alignItems="center" gap={4} mb={6}>

              <Image src="/Group 161.svg" alt="AI Career Matcher" width={60} height={60} />
              <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="400" color="rgba(42, 63, 94, 1)" lineHeight="1.5">
              AI matches you with best-fit roles.
              </Text>
            </Flex>
            
            <Flex flexDirection="row" alignItems="center" gap={4}>

              <Image src="/Group 162.svg" alt="AI Career Matcher" width={60} height={60} />
              <Text fontSize={{ base: 'md', md: 'xl' }} textAlign="left" fontWeight="400" color="rgba(42, 63, 94, 1)" lineHeight="1.5">
              Take skill assessments & get ranked higher.
              </Text>
            </Flex>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="start" justifyContent="start" bg="rgba(250, 236, 255, 1)" borderRadius="24px" p={8} w="full">
            <Heading
              as="h3"
              fontSize={{ base: 'xl', md: '3xl' }}
              lineHeight="tighter"
              fontWeight="bold"
              color="rgba(42, 63, 94, 1)"
              mb={8}
            >
              For Employers
            </Heading>
            <Flex flexDirection="row" alignItems="center" gap={4} mb={6}>

              <Image src="/Group 163.svg" alt="AI Career Matcher" width={60} height={60} />
              <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="400" color="rgba(42, 63, 94, 1)" lineHeight="1.5">
              Post a job or add an assessment.
              </Text>
            </Flex>
            
            <Flex flexDirection="row" alignItems="center" gap={4} mb={6}>

              <Image src="/Group 163.svg" alt="AI Career Matcher" width={60} height={60} />
              <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="400" color="rgba(42, 63, 94, 1)" lineHeight="1.5">
              Get AI-ranked candidates instantly.
              </Text>
            </Flex>

            
            <Flex flexDirection="row" alignItems="center" gap={4}>

              <Image src="/Group 164.svg" alt="AI Career Matcher" width={60} height={60} />
              <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="400" color="rgba(42, 63, 94, 1)" lineHeight="1.5">
              Hire faster with confidence.
              </Text>
            </Flex>
          </Box>
        </Grid>
      </VStack>
    </Container>
  </Box>
)
