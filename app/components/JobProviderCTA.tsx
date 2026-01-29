'use client'

import { Box, Button, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { ArrowRight, Sparkles } from 'lucide-react'

interface JobProviderCTAProps {
    variant?: 'primary' | 'secondary'
}

export const JobProviderCTA = ({ variant = 'primary' }: JobProviderCTAProps) => {
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
                            fontWeight="800"
                            color={isPrimary ? "white" : "#000"}
                            lineHeight="1.2"
                        >
                            {isPrimary ? (
                                <>
                                    Start Hiring Top Talent
                                    Today
                                </>
                            ) : (
                                <>
                                    Join Thousands of
                                    <Text as="span" display="block" color="#4241ff">
                                        Successful Employers
                                    </Text>
                                </>
                            )}
                        </Heading>
                        <Text
                            fontSize={{ base: 'lg', md: 'xl' }}
                            color={isPrimary ? "rgba(255, 255, 255, 0.9)" : "#000"}
                            maxW="700px"
                            lineHeight="1.6"
                        >
                            {isPrimary
                                ? "Post your first job for free and get matched with qualified candidates in minutes. No credit card required."
                                : "Transform your hiring process with our AI-powered recruitment platform and build your dream team faster."}
                        </Text>
                    </VStack>

                    {/* CTA Buttons */}
                    <Flex
                        direction={{ base: 'column', sm: 'row' }}
                        gap={4}
                        mt={4}
                    >
                        <Button
                            size={{ base: 'lg' }}
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
                            onClick={() => {
                                window.open("https://app.hirenest.ai/", "_blank");
                            }}
                        >
                            {isPrimary ? "Post a Job Free" : "Get Started Now"}
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
                                <Text fontSize={{ base: 'md' }}>Free job posting</Text>
                            </Flex>
                            <Flex alignItems="center" gap={2}>
                                <Box w="4px" h="4px" borderRadius="full" bg="white" />
                                <Text fontSize={{ base: 'md' }}>No credit card required</Text>
                            </Flex>
                            <Flex alignItems="center" gap={2}>
                                <Box w="4px" h="4px" borderRadius="full" bg="white" />
                                <Text fontSize={{ base: 'md' }}>Cancel anytime</Text>
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Container>
        </Box>
    )
}
