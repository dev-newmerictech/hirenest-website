import { Box, Button, Container, Flex, Grid, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

export const Work = () => (
  <Box
    w="full"
    position="relative"
    bg="#fff"
  >
    <Container py={{ base: '16' }} maxW="7xl" position="relative" zIndex="1">
      <VStack gap="10" textAlign="center">
        <Stack gap="8">
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            maxW={{ md: '6xl' }}
            mx="auto"
            lineHeight="1.2"
            fontWeight="700"
            color="#000"
          >
            How Hirenest Works
          </Heading>
          <Text
            color="#000"
            fontSize={{ base: 'md', md: 'lg' }}
            maxW={{ md: '4xl' }}
            mx="auto"
            lineHeight="1.6"
          >
            Your Smart Path, From Search to Success.
          </Text>
        </Stack>
        <Grid width={{ base: 'full', md: '5xl' }} templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={14}>
          <Box display="flex" flexDirection="column" alignItems="start" justifyContent="start" bg="rgba(242, 241, 255, 1)" borderRadius="24px" p={8} w="full">

            <Heading
              as="h3"
              fontSize={{ base: 'xl', md: '2xl' }}
              lineHeight="1.2"
              fontWeight="700"
              color="#000"
              mb={8}
            >
              For Job Seekers
            </Heading>
            <Flex flexDirection="row" alignItems="center" gap={4} mb={6}>

              <Image src="/Group 160.svg" alt="AI Career Matcher" width={60} height={60} />
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="#000" lineHeight="1.6">
                Create profile & upload resume.
              </Text>
            </Flex>

            <Flex flexDirection="row" alignItems="center" gap={4} mb={6}>

              <Image src="/Group 161.svg" alt="AI Career Matcher" width={60} height={60} />
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="#000" lineHeight="1.6">
                AI matches you with best-fit roles.
              </Text>
            </Flex>

            <Flex flexDirection="row" alignItems="center" gap={4}>

              <Image src="/Group 162.svg" alt="AI Career Matcher" width={60} height={60} />
              <Text fontSize={{ base: 'sm', md: 'md' }} textAlign="left" fontWeight="400" color="#000" lineHeight="1.6">
                Take skill assessments & get ranked higher.
              </Text>
            </Flex>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="start" justifyContent="start" bg="rgba(250, 236, 255, 1)" borderRadius="24px" p={8} w="full">
            <Heading
              as="h3"
              fontSize={{ base: 'xl', md: '2xl' }}
              lineHeight="1.2"
              fontWeight="700"
              color="#000"
              mb={8}
            >
              For Employers
            </Heading>
            <Flex flexDirection="row" alignItems="center" gap={4} mb={6}>

              <Image src="/Group 163.svg" alt="AI Career Matcher" width={60} height={60} />
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="#000" lineHeight="1.6">
                Post a job or add an assessment.
              </Text>
            </Flex>

            <Flex flexDirection="row" alignItems="center" gap={4} mb={6}>

              <Image src="/Group 163.svg" alt="AI Career Matcher" width={60} height={60} />
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="#000" lineHeight="1.6">
                Get AI-ranked candidates instantly.
              </Text>
            </Flex>


            <Flex flexDirection="row" alignItems="center" gap={4}>

              <Image src="/Group 164.svg" alt="AI Career Matcher" width={60} height={60} />
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="#000" lineHeight="1.6">
                Hire faster with confidence.
              </Text>
            </Flex>
          </Box>
        </Grid>
      </VStack>
    </Container>
  </Box>
)
