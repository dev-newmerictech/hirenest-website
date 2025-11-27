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
            bg={isPrimary ? "#0f2442" : "white"}
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
                bg={isPrimary ? "rgba(255, 255, 255, 0.1)" : "rgba(66, 65, 255, 0.05)"}
                filter="blur(60px)"
            />
            <Box
                position="absolute"
                bottom="-100px"
                left="-100px"
                w="300px"
                h="300px"
                borderRadius="full"
                bg={isPrimary ? "rgba(255, 255, 255, 0.1)" : "rgba(66, 65, 255, 0.05)"}
                filter="blur(60px)"
            />

            <Container maxW="7xl" position="relative" zIndex={1}>
                <Flex
                    direction="column"
                    alignItems="center"
                    textAlign="center"
                    gap={{ base: 6, md: 8 }}
                >
                    {/* Icon */}
                    {isPrimary && (
                        <Flex
                            w={{ base: '60px', md: '80px' }}
                            h={{ base: '60px', md: '80px' }}
                            bg="rgba(255, 255, 255, 0.2)"
                            borderRadius="full"
                            alignItems="center"
                            justifyContent="center"
                            animation="pulse 2s infinite"
                        >
                            <Sparkles size={40} color="white" strokeWidth={2} />
                        </Flex>
                    )}

                    {/* Heading */}
                    <VStack gap={4} maxW="900px">
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="700"
                            color={isPrimary ? "white" : "#000"}
                            lineHeight="1.2"
                        >
                            {isPrimary ? (
                                <>
                                    Start Your Job Search
                                    Today
                                </>
                            ) : (
                                <>
                                    Join Thousands of
                                    <Text as="span" display="block" color="#4241ff">
                                        Successful Job Seekers
                                    </Text>
                                </>
                            )}
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                            color={isPrimary ? "rgba(255, 255, 255, 0.9)" : "#000"}
                            maxW="700px"
                            lineHeight="1.6"
                        >
                            {isPrimary
                                ? "Create your free account and get matched with your dream job in minutes. No credit card required."
                                : "Don't let your dream job slip away. Start your journey to career success with our AI-powered platform."}
                        </Text>
                    </VStack>

                    {/* CTA Buttons */}
                    <Flex
                        direction={{ base: 'column', sm: 'row' }}
                        gap={4}
                        mt={4}
                    >
                        <Button
                            size={{ base: 'md', md: 'lg' }}
                            bg={isPrimary ? "white" : "linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"}
                            color={isPrimary ? "#4241ff" : "white"}
                            px={{ base: 8, md: 10 }}
                            py={{ base: 6, md: 7 }}
                            fontSize={{ base: 'md', md: 'lg' }}
                            fontWeight="600"
                            borderRadius="lg"
                            rounded={'full'}
                            _hover={{

                                background: isPrimary ? "white" : 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                                transform: "translateY(-2px)",
                                boxShadow: "lg"
                            }}
                            transition="all 0.3s"
                        >
                            {isPrimary ? "Get Started Free" : "Create Free Account"}
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
                            fontSize={{ base: 'xs', sm: 'sm' }}
                        >
                            <Flex alignItems="center" gap={2}>
                                <Box w="4px" h="4px" borderRadius="full" bg="white" />
                                <Text>Free to join</Text>
                            </Flex>
                            <Flex alignItems="center" gap={2}>
                                <Box w="4px" h="4px" borderRadius="full" bg="white" />
                                <Text>No credit card required</Text>
                            </Flex>
                            <Flex alignItems="center" gap={2}>
                                <Box w="4px" h="4px" borderRadius="full" bg="white" />
                                <Text>Cancel anytime</Text>
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Container>
        </Box>
    )
}
