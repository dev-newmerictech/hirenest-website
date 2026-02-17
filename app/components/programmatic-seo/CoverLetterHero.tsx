'use client'

import { Box, Container, Grid, Heading, Stack, Text, VStack, Button } from '@chakra-ui/react'
import { ArrowRight } from 'lucide-react'

interface CoverLetterHeroProps {
    badge: string
    title: string
    titleHighlight: string
    description: string
    ctaText?: string
    ctaHref?: string
    stats?: Array<{
        value: string
        label: string
    }>
}

export const CoverLetterHero = ({
    badge,
    title,
    titleHighlight,
    description,
    ctaText,
    ctaHref,
    stats
}: CoverLetterHeroProps) => (
    <Box
        w="full"
        position="relative"
        bgGradient="transparent"
        overflow="hidden"
    >
        {/* Background Pattern */}
        {/* Background Pattern - Simple gradient instead of complex SVG */}

        <Container pt={{ base: '28', lg: '32' }} pb={{ base: '16', md: '20' }} maxW="7xl" position="relative">
            <VStack alignItems="center" gap={6} textAlign="center">
                <Box>
                    <Text
                        fontSize="sm"
                        fontWeight="600"
                        color="#4241ff"
                        textTransform="uppercase"
                        letterSpacing="wider"
                        mb={3}
                    >
                        {badge}
                    </Text>
                    <Heading
                        as="h1"
                        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                        fontWeight="800"
                        lineHeight="1.1"
                        color="black"
                        mb={3}
                    >
                        {title}
                        <Text as="span" display="block" color="#4241ff">
                            {titleHighlight}
                        </Text>
                    </Heading>
                    <Text
                        fontSize={{ base: 'lg', md: 'xl' }}
                        color="black"
                        maxW="3xl"
                        lineHeight="1.6"
                    >
                        {description}
                    </Text>
                </Box>

                {ctaText && ctaHref && (
                    <Stack direction={{ base: 'column', sm: 'row' }} gap={4}>
                        <Button
                            bg="white"
                            color="black"
                            _hover={{
                                bg: 'gray.100',
                                transform: "translateY(-2px)",
                                boxShadow: "lg"
                            }}
                            transition="all 0.3s"
                            size="lg"
                            borderRadius="full"
                            fontWeight="600"
                            px={8}
                            onClick={() => window.open(ctaHref, '_self')}
                        >
                            {ctaText}
                            <Box as={ArrowRight} ml={2} />
                        </Button>
                    </Stack>
                )}

                {/* Stats */}
                {stats && stats.length > 0 && (
                    <Box display="flex" gap={{ base: 6, md: 10 }} mt={4} flexWrap="wrap" justifyContent="center">
                        {stats.map((stat, index) => (
                            <Box key={index}>
                                <Text
                                    fontSize={{ base: '2xl', md: '3xl' }}
                                    fontWeight="700"
                                    color="black"
                                >
                                    {stat.value}
                                </Text>
                                <Text fontSize="sm" color="black" fontWeight="500">
                                    {stat.label}
                                </Text>
                            </Box>
                        ))}
                    </Box>
                )}
            </VStack>
        </Container>
    </Box>
)
