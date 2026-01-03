"use client"
import { Box, Container, Flex, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

export const Work = () => (
  <Box
    w="full"
    position="relative"
    bg="white"
    overflow="hidden"
  >
    <Container py={{ base: '20' }} maxW="7xl">
      <VStack gap={{ base: 10 }}>
        {/* Section Header - Apple Style */}
        <VStack textAlign="center" gap={2} maxW="7xl" mx="auto">
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="700"
            color="#000"
            lineHeight="1.2"
            maxW="7xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            How Hirenest <Text as="span" display="block" bg="#4241ff" bgClip="text">works.</Text>
          </Heading>
          <Text
            fontSize={{ base: 'lg' }}
            color="#6e6e73"
            lineHeight="1.4"
            fontWeight="400"
          >
            Simple. Powerful. Designed for everyone.
          </Text>
        </VStack>

        {/* Cards Grid - Minimalist Apple Style */}
        <Grid
          width="full"
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={{ base: 6, md: 8 }}
          maxW="1200px"
          mx="auto"
        >
          {/* Job Seekers Card */}
          <Box
            position="relative"
            bg="#f5f5f7"
            borderRadius="28px"
            p={{ base: 10, md: 12 }}
            w="full"
            overflow="hidden"
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
              bg: "#fafafa",
              transform: 'scale(1.02)'
            }}
          >
            <VStack align="flex-start" gap={8} h="full">
              {/* Header */}
              <VStack align="flex-start" gap={3}>
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  color="#4241ff"
                  textTransform="uppercase"
                  letterSpacing="0.08em"
                >
                  For Job Seekers
                </Text>
                <Heading
                  as="h3"
                  fontSize={{ base: '2xl', md: '3xl' }}
                  lineHeight="1.2"
                  fontWeight="600"
                  color="#1d1d1f"
                  letterSpacing="-0.01em"
                >
                  Find your dream job.
                </Heading>
              </VStack>

              {/* Steps - Clean List */}
              <VStack align="flex-start" gap={6} w="full" flex="1">
                {/* Step 1 */}
                <Flex align="flex-start" gap={4} w="full">
                  <Box
                    w={12}
                    h={12}
                    flexShrink={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image src="/Group 160.svg" alt="Create Profile" width={48} height={48} />
                  </Box>
                  <VStack align="flex-start" gap={1} flex="1">
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      fontWeight="500"
                      color="#1d1d1f"
                      lineHeight="1.3"
                    >
                      Create your profile
                    </Text>
                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      color="#6e6e73"
                      lineHeight="1.5"
                    >
                      Upload your resume and let AI build your profile instantly.
                    </Text>
                  </VStack>
                </Flex>

                {/* Step 2 */}
                <Flex align="flex-start" gap={4} w="full">
                  <Box
                    w={12}
                    h={12}
                    flexShrink={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image src="/Group 161.svg" alt="AI Matching" width={48} height={48} />
                  </Box>
                  <VStack align="flex-start" gap={1} flex="1">
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      fontWeight="500"
                      color="#1d1d1f"
                      lineHeight="1.3"
                    >
                      Get matched instantly
                    </Text>
                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      color="#6e6e73"
                      lineHeight="1.5"
                    >
                      AI finds the perfect roles that match your skills and goals.
                    </Text>
                  </VStack>
                </Flex>

                {/* Step 3 */}
                <Flex align="flex-start" gap={4} w="full">
                  <Box
                    w={12}
                    h={12}
                    flexShrink={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image src="/Group 162.svg" alt="Skill Assessment" width={48} height={48} />
                  </Box>
                  <VStack align="flex-start" gap={1} flex="1">
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      fontWeight="500"
                      color="#1d1d1f"
                      lineHeight="1.3"
                    >
                      Stand Out with Skills
                    </Text>
                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      color="#6e6e73"
                      lineHeight="1.5"
                    >
                    Take assessments to prove your abilities and rank higher in employer searches.                    
                    </Text>
                  </VStack>
                </Flex>
              </VStack>
            </VStack>
          </Box>

          {/* Employers Card */}
          <Box
            position="relative"
            bg="#f5f5f7"
            borderRadius="28px"
            p={{ base: 10, md: 12 }}
            w="full"
            overflow="hidden"
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
              bg: "#fafafa",
              transform: 'scale(1.02)'
            }}
          >
            <VStack align="flex-start" gap={8} h="full">
              {/* Header */}
              <VStack align="flex-start" gap={3}>
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  color="#b000ea"
                  textTransform="uppercase"
                  letterSpacing="0.08em"
                >
                  For Employers
                </Text>
                <Heading
                  as="h3"
                  fontSize={{ base: '2xl', md: '3xl' }}
                  lineHeight="1.2"
                  fontWeight="600"
                  color="#1d1d1f"
                  letterSpacing="-0.01em"
                >
                  Hire the best talent.
                </Heading>
              </VStack>

              {/* Steps - Clean List */}
              <VStack align="flex-start" gap={6} w="full" flex="1">
                {/* Step 1 */}
                <Flex align="flex-start" gap={4} w="full">
                  <Box
                    w={12}
                    h={12}
                    flexShrink={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image src="/Group 163.svg" alt="Post Job" width={48} height={48} />
                  </Box>
                  <VStack align="flex-start" gap={1} flex="1">
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      fontWeight="500"
                      color="#1d1d1f"
                      lineHeight="1.3"
                    >
                      Post your opening
                    </Text>
                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      color="#6e6e73"
                      lineHeight="1.5"
                    >Our AI helps you define requirements, create job listings or custom skill assessments in minutes.
                    </Text>
                  </VStack>
                </Flex>

                {/* Step 2 */}
                <Flex align="flex-start" gap={4} w="full">
                  <Box
                    w={12}
                    h={12}
                    flexShrink={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image src="/Group 163.svg" alt="AI Ranking" width={48} height={48} />
                  </Box>
                  <VStack align="flex-start" gap={1} flex="1">
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      fontWeight="500"
                      color="#1d1d1f"
                      lineHeight="1.3"
                    >
                      AI ranks candidates
                    </Text>
                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      color="#6e6e73"
                      lineHeight="1.5"
                    >
                    Our AI reviews all the matched candidates, ranks them and brings you the best matches, ready to interview.
                    
                    </Text>
                  </VStack>
                </Flex>

                {/* Step 3 */}
                <Flex align="flex-start" gap={4} w="full">
                  <Box
                    w={12}
                    h={12}
                    flexShrink={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image src="/Group 164.svg" alt="Hire Fast" width={48} height={48} />
                  </Box>
                  <VStack align="flex-start" gap={1} flex="1">
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      fontWeight="500"
                      color="#1d1d1f"
                      lineHeight="1.3"
                    >
                      Hire with confidence
                    </Text>
                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      color="#6e6e73"
                      lineHeight="1.5"
                    >
                    Make faster, smarter hiring decisions backed by real data. No scope for costly bad hires.                    
                    </Text>
                  </VStack>
                </Flex>
              </VStack>
            </VStack>
          </Box>
        </Grid>
      </VStack>
    </Container>
  </Box>
)
