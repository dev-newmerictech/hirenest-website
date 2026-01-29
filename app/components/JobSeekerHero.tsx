'use client'

import { Box, Button, Container, Flex, Heading, Text, VStack, Grid } from '@chakra-ui/react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const JobSeekerHero = () => (
  <Box
    w="full"
    position="relative"
    bgGradient="linear(to-br, rgba(2, 62, 138, 0.05), rgba(248, 248, 248, 1))"
    overflow="hidden"
  >
    <Container pt={{ base: '36', md: '20', lg: '40' }} maxW="7xl">
      <Grid
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gap={{ base: 8, lg: 16 }}
        alignItems="center"
      >
        {/* Left Content */}
        <VStack align={{ base: 'center', lg: 'flex-start' }} gap={6}>
          <Box>
            <Text
              fontSize="sm" fontWeight="600" color="#4241ff"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={3}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Job Seekers
            </Text>

            <Heading
              as="h1"
              fontSize={{ base: '4xl' }}
              fontWeight="800"
              lineHeight="1.1"
              color="#1d1d1f"
              mb={4}
              textAlign={{ base: 'center', lg: 'left' }}

            >
              Stop Applying Into the Void.&nbsp;<Text as="span" display="block" color="#4241ff">Get Matched With Jobs That Actually Want You.</Text>
            </Heading>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }} color="gray.500" lineHeight="1.6"
              maxW="600px"
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Tired of sending 50 applications and hearing nothing back?
              <br />
              Your resume gets filtered out before any human sees it.
              <br />
              With Hirenest, you prove your skills upfront with quick,
              15-minute assessments — and employers discover you for what
              you can actually do, not how well your resume is formatted.
            </Text>
          </Box>

          {/* CTA */}
          <Button
            size="lg"
            fontWeight={'600'}
            borderRadius="full"
            background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
            color="white"
            minW={{ base: '200px', md: '260px' }}
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            onClick={() => window.open('https://app.hirenest.ai/', '_blank')}
          >
            Create My Free Profile
            <Box as={ArrowRight} ml={2} />
          </Button>

          {/* Proof Points */}
          <Flex gap={{ base: 6 }} mt={2} flexWrap="wrap">
            <Box>
              <Text
                fontSize={{ base: '4xl' }}
                fontWeight="800"
                lineHeight="1.1"
                color="#1d1d1f">
                75%
              </Text>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }} color="gray.500">Resumes never reach a human</Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '4xl' }}
                fontWeight="800"
                lineHeight="1.1"
                color="#1d1d1f">
                300+
              </Text>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }} color="gray.500">Applicants per job</Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '4xl' }}
                fontWeight="800"
                lineHeight="1.1"
                color="#1d1d1f">
                15 min
              </Text>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }} color="gray.500">To prove your skills once</Text>
            </Box>
          </Flex>
        </VStack>

        {/* Right Image */}
        <Box position="relative" h={{ base: '400px', md: '500px' }}>
          <Image
            src="/find_job.png"
            alt="Job seeker proving skills with assessments"
            fill
            priority
          />
        </Box>
      </Grid>
    </Container>
  </Box>
)
