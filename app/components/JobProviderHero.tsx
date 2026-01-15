'use client'

import { Box, Button, Container, Flex, Heading, Stack, Text, VStack, Grid } from '@chakra-ui/react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const JobProviderHero = () => (
  <Box
    w="full"
    position="relative"
    bgGradient="linear(to-br, rgba(2, 62, 138, 0.05), rgba(248, 248, 248, 1))"
    overflow="hidden"
    pt={20}
  >
    <Container py={{ base: '12', md: '20' }} maxW="7xl" position="relative">
      <Grid
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gap={{ base: 8, lg: 16 }}
        alignItems="center"
      >
        {/* Left Content */}
        <VStack alignItems={{ base: 'center', lg: 'flex-start' }} gap={6}>
          <Box>
            <Text
              fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
              fontWeight="600"
              color="#4241ff"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={3}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Skills-Based Hiring Platform
            </Text>

            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="700"
              color="#000"
              lineHeight="1.2"
              mb={4}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Hire People Who Deliver Results
              <Text as="span" display="block" color="#4241ff">
                Not Just Impressive Resumes
              </Text>
            </Heading>

            <Text
              fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
              fontWeight="500"
              color="#000"
              lineHeight="1.6"
              maxW="600px"
              textAlign={{ base: 'center', lg: 'left' }}
              mb={4}
            >
              Because resumes lie. Skills don’t.
            </Text>

            <Text
              fontSize={{ base: 'md', sm: 'lg' }}
              color="#000"
              lineHeight="1.6"
              maxW="650px"
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Hirenest is an intelligent <strong>skills-first hiring platform</strong> powered by a multi-AI agent system with ~85% matching accuracy.
              We help employers see who can actually perform <em>before</em> interviews—and help candidates prove what they can do beyond resume keywords.
            </Text>
          </Box>

          {/* CTAs */}
          <Stack direction={{ base: 'column', sm: 'row' }} gap={4} w="full">
            <Button
              _hover={{
                background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              transition="all 0.3s"
              size={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
              borderRadius="full"
              background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
              color="white"
              minW={{ base: '80px', md: '250px' }}
              onClick={() => window.open('https://app.hirenest.ai/jobprovider/post-job', '_blank')}
            >
              Book My Demo
              <Box as={ArrowRight} ml={1} />
            </Button>

            <Button
              variant="outline"
              borderColor="#4241ff"
              color="#4241ff"
              size={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
              borderRadius="full"
              minW={{ base: '80px', md: '250px' }}
              onClick={() => window.open('https://app.hirenest.ai/jobseeker', '_blank')}
            >
              Create Free Profile
            </Button>
          </Stack>

          {/* Supporting Copy */}
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            color="#000"
            maxW="650px"
            textAlign={{ base: 'center', lg: 'left' }}
            mt={2}
          >
            Not just another job board. LinkedIn, Indeed, and Monster are resume databases where you compete with 300+ applicants.
            <br /><br />
            <strong>Hirenest is different:</strong> candidates prove skills first, employers search verified abilities, and matches happen based on real capability—not keywords.
          </Text>
        </VStack>

        {/* Right Image */}
        <Box position="relative" h={{ base: '400px', md: '500px' }}>
          <Image
            src="/Hire.png"
            alt="Skills-based hiring dashboard"
            fill
            priority
          />
        </Box>
      </Grid>
    </Container>
  </Box>
)
