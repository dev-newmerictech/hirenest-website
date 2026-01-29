'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import Image from 'next/image'
import { Search, MapPin, PlayCircle, Star, Briefcase } from 'lucide-react'

export const Block = () => {
  return (
    <Box w="full" position="relative" bg="gray.100" overflow="hidden" py={{ base: 24, lg: 36 }}>
      <Container maxW="7xl" px={{ base: 5, md: 10 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 10, lg: 20 }} alignItems="center">

          {/* Left Column */}
          <VStack align={{ base: 'center', lg: 'flex-start' }} gap={8} w="full">

            {/* Badge */}
            <HStack px={4} py={2} rounded="full" gap={3}>
              <Box bgGradient="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)" p={1} rounded="full" color="white">
                <PlayCircle size={14} fill="currentColor" />
              </Box>
              <Text fontSize="sm" fontWeight="600" color="#4241ff">
                Welcome to Hirenest!
              </Text>
            </HStack>

            {/* Heading */}
            <Heading
              as="h1"
              fontSize={{ base: '4xl' }}
              fontWeight="800"
              lineHeight="1.1"
              color="#1d1d1f"
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Intelligent <Text as="span" bg="#0071fb" bgClip="text" color="transparent">Hiring Platform</Text>  Where Top Skills Get Matched With the Best Opportunities
            </Heading>

            {/* Subtext */}
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.500" maxW="lg" lineHeight="1.6" textAlign={{ base: 'center', lg: 'left' }}>
              An AI-powered hiring platform where job seekers show what they can do and employers meet candidates who've already demonstrated they can perform.
            </Text>

            {/* Search Bar */}
            <Box
              bg="white"
              rounded="full"
              w="auto"
              maxW="xl"
            >
              <Flex align="center" gap={2} direction={{ base: 'column', md: 'row' }}>
                <Button
                  rounded="full"
                  bgGradient="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                  color="white"
                  px={8}
                  h="12"
                  fontSize="md"
                  _hover={{ opacity: 0.9 }}
                  w={{ base: 'full', md: 'auto' }}
                  onClick={() => window.open('https://app.hirenest.ai/jobseeker/find-jobs', '_blank')}
                >
                  Find Your Job
                </Button>
              </Flex>
            </Box>

            {/* Social Proof */}
            <Stack direction={{ base: 'column', sm: 'row' }} align="flex-end" gap={6} pt={0}>
              <VStack align="flex-start" gap={1}>
                <Text fontSize="sm" fontWeight="700" bgGradient="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)" bgClip="text" color="transparent">
                  &gt;100k+ People Join
                </Text>
                <HStack>
                  {[
                    "https://bit.ly/ryan-florence",
                    "https://bit.ly/kent-c-dodds",
                    "https://bit.ly/prosper-baba"
                  ].map((src, i) => (
                    <Box
                      key={i}
                      ml={i === 0 ? 0 : -2}
                      w="8"
                      h="8"
                      rounded="full"
                      border="2px solid white"
                      overflow="hidden"
                      position="relative"
                    >
                      <Image src={src} alt="User" fill style={{ objectFit: 'cover' }} />
                    </Box>
                  ))}
                </HStack>
              </VStack>

              <Box h="10" w="1px" bg="gray.200" display={{ base: 'none', sm: 'block' }} />

              <HStack gap={1}>
                <Text fontWeight="800" fontSize="xl">5.0</Text>
                <Flex color="#b000ea">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </Flex>
              </HStack>
            </Stack>

            {/* Trusted Companies Text */}
            <Text fontSize="sm" color="gray.500" fontWeight="600">
              Trusted <Text as="span" bgGradient="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)" bgClip="text" color="transparent">1000+</Text> company find best jobseeker
            </Text>

          </VStack>

          {/* Right Column - Image & Stats */}
          <Box position="relative" h="full" minH={{ base: '400px', lg: '500px' }}>
            {/* Main Hero Image */}
            <Box
              position="relative"
              w="full"
              h="full"
              rounded="3xl"
              overflow="hidden"
              bgGradient="linear(to-br, #f3e8ff, #e9d5ff)"
            >
              <Image
                src="/hero-illustration.png"
                alt="Happy professional finding a job"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>

            {/* Floating Stat Card 2 - Job Available */}
            <Box
              position="absolute"
              top="20%"
              right="-5%"
              shadow="xl"
              rounded="full"
              bg="white"
              py={2}
              px={4}
              zIndex={2}
              display={{ base: 'none', md: 'block' }}
            >
              <HStack gap={3}>
                <Box bg="blue.50" p={1.5} rounded="full" color="#0071fb">
                  <Briefcase size={16} />
                </Box>
                <Text fontSize="sm" fontWeight="700">Job available</Text>
              </HStack>
            </Box>

            {/* Floating Stat Card 3 - Diversity */}
            <Box
              position="absolute"
              bottom="5%"
              right="5%"
              shadow="2xl"
              rounded="2xl"
              bg="white"
              maxW="260px"
              zIndex={2}
              display={{ base: 'none', lg: 'block' }}
              p={4}
              onClick={() => window.open('https://app.hirenest.ai', '_blank')}
              cursor="pointer"
            >
              <HStack gap={4}>
                <Box rounded="lg" overflow="hidden" w="16" h="16" position="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Diversity"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <VStack align="flex-start" gap={1}>
                  <Text fontSize="sm" fontWeight="700" lineHeight="1.2">
                    Where Diversity Aligns with Possibilities
                  </Text>
                  <Text fontSize="xs" bgGradient="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)" bgClip="text" color="transparent" fontWeight="600" cursor="pointer">
                    &gt; Browse your expertise
                  </Text>
                </VStack>
              </HStack>
            </Box>

          </Box>

        </SimpleGrid>
      </Container>
    </Box>
  )
}
