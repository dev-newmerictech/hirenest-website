"use client"

import { Box, VStack, HStack, Heading, Text, SimpleGrid, Badge, Link as ChakraLink, Icon } from '@chakra-ui/react'
import { CheckCircle, Shield, Users, Star, Zap, Building2 } from 'lucide-react'
import Link from 'next/link'

export default function JobsCTASection() {
    return (
        <Box
            bg="linear-gradient(135deg, #4241ff 0%, #b000ea 100%)"
            p={{ base: 8, md: 12 }}
            borderRadius="2xl"
            textAlign="center"
            position="relative"
            overflow="hidden"
            w="full"
        >
            {/* Background Pattern */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                opacity={0.1}
                backgroundImage="radial-gradient(circle at 2px 2px, white 1px, transparent 0)"
                backgroundSize="24px 24px"
            />

            <VStack align="center" gap={8} position="relative">
                <Badge
                    bg="whiteAlpha.200"
                    color="white"
                    px={4}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="600"
                >
                    Free AI-Powered Job Matching
                </Badge>

                <Heading
                    as="h2"
                    size={{ base: '2xl', md: '4xl' }}
                    fontWeight="800"
                    color="white"
                    lineHeight="1.2"
                >
                    Let AI Match You with Your Dream Job
                </Heading>

                <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color="whiteAlpha.900"
                    maxW="2xl"
                    lineHeight="1.6"
                >
                    Upload your resume once and let our AI analyze your skills, experience, and preferences
                    to find the perfect opportunities. Stop scrolling, start getting matched.
                </Text>

                {/* Benefits List */}
                <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} maxW="4xl" w="full">
                    <HStack gap={3} align="start">
                        <Icon as={Zap} color="white" boxSize={5} mt={1} flexShrink={0} />
                        <VStack align="start" gap={1}>
                            <Text color="white" fontWeight="600" fontSize="md">Instant Matching</Text>
                            <Text color="whiteAlpha.800" fontSize="sm">Get matched in seconds, not hours</Text>
                        </VStack>
                    </HStack>
                    <HStack gap={3} align="start">
                        <Icon as={Shield} color="white" boxSize={5} mt={1} flexShrink={0} />
                        <VStack align="start" gap={1}>
                            <Text color="white" fontWeight="600" fontSize="md">Verified Companies</Text>
                            <Text color="whiteAlpha.800" fontSize="sm">All employers vetted for quality</Text>
                        </VStack>
                    </HStack>
                    <HStack gap={3} align="start">
                        <Icon as={CheckCircle} color="white" boxSize={5} mt={1} flexShrink={0} />
                        <VStack align="start" gap={1}>
                            <Text color="white" fontWeight="600" fontSize="md">100% Free</Text>
                            <Text color="whiteAlpha.800" fontSize="sm">No hidden fees, ever</Text>
                        </VStack>
                    </HStack>
                </SimpleGrid>

                {/* CTA Buttons */}
                <HStack gap={4} flexWrap="wrap" justifyContent="center">
                    <Link href={'https://app.hirenest.ai'}>
                        <Box
                            bg="white"
                            color="brand.600"
                            px={10}
                            py={4}
                            borderRadius="full"
                            fontWeight="700"
                            fontSize="lg"
                            _hover={{
                                transform: "translateY(-2px)",
                                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                            }}
                            transition="all 0.2s"
                            cursor="pointer"
                        >
                            Upload Resume — It's Free
                        </Box>
                    </Link>
                    <Link href="/job-seeker" passHref legacyBehavior>
                        <ChakraLink
                            bg="transparent"
                            color="white"
                            border="2px solid"
                            borderColor="whiteAlpha.400"
                            px={10}
                            py={4}
                            borderRadius="full"
                            fontWeight="600"
                            fontSize="lg"
                            _hover={{
                                bg: "whiteAlpha.100",
                                borderColor: "white"
                            }}
                            transition="all 0.2s"
                        >
                            How It Works
                        </ChakraLink>
                    </Link>
                </HStack>

                {/* Trust Indicators */}
                <HStack gap={8} pt={4} flexWrap="wrap" justifyContent="center">
                    <HStack gap={2}>
                        <Icon as={Users} color="whiteAlpha.800" boxSize={4} />
                        <Text color="whiteAlpha.800" fontSize="sm" fontWeight="500">
                            50,000+ Job Seekers
                        </Text>
                    </HStack>
                    <HStack gap={2}>
                        <Icon as={Building2} color="whiteAlpha.800" boxSize={4} />
                        <Text color="whiteAlpha.800" fontSize="sm" fontWeight="500">
                            5,000+ Companies
                        </Text>
                    </HStack>
                    <HStack gap={2}>
                        <Icon as={Star} color="whiteAlpha.800" boxSize={4} />
                        <Text color="whiteAlpha.800" fontSize="sm" fontWeight="500">
                            4.9/5 Rating
                        </Text>
                    </HStack>
                </HStack>
            </VStack>
        </Box>
    )
}
