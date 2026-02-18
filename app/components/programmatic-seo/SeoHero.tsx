'use client'

import { Box, Container, Grid, Heading, Stack, Text, VStack, Button } from '@chakra-ui/react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface SeoHeroProps {
    badge: string
    title: string
    titleHighlight: string
    description: string
    ctaText?: string
    ctaHref?: string
    imageSrc?: string
    stats?: Array<{
        value: string
        label: string
    }>
}

export const SeoHero = ({
    badge,
    title,
    titleHighlight,
    description,
    ctaText,
    ctaHref,
    imageSrc = '/about-hero.png',
    stats
}: SeoHeroProps) => (
    <Box
        w="full"
        position="relative"
        bgGradient="linear(to-br, rgba(66, 65, 255, 0.05), rgba(248, 248, 248, 1))"
        overflow="hidden"
    >
        <Container pt={{ base: '32', lg: '40' }} maxW="7xl" position="relative">
            <Grid
                templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
                gap={{ base: 8, lg: 16 }}
                alignItems="center"
            >
                {/* Left Content */}
                <VStack alignItems={{ base: 'center', lg: 'flex-start' }} gap={6}>
                    <Box>
                        <Text
                            fontSize="sm"
                            fontWeight="600"
                            color="#4241ff"
                            textTransform="uppercase"
                            letterSpacing="wider"
                            mb={3}
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            {badge}
                        </Text>
                        <Heading
                            as="h1"
                            fontSize={{ base: '4xl' }}
                            fontWeight="800"
                            lineHeight="1.1"
                            color="#1d1d1f"
                            textAlign={{ base: 'center', lg: 'left' }}
                            mb={3}
                        >
                            {title}
                            <Text as="span" display="block" bg="#4241ff" bgClip="text">
                                {titleHighlight}
                            </Text>
                        </Heading>
                        <Text
                            fontSize={{ base: 'lg', md: 'xl' }}
                            color="gray.500"
                            maxW="lg"
                            lineHeight="1.6"
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            {description}
                        </Text>
                    </Box>

                    {ctaText && ctaHref && (
                        <Stack direction={{ base: 'column', sm: 'row' }} gap={4} w="full">
                            <Button
                                _hover={{
                                    background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                                    transform: "translateY(-2px)",
                                    boxShadow: "lg"
                                }}
                                transition="all 0.3s"
                                size={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
                                borderRadius="full"
                                background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                                color="white"
                                minW={{ base: '80px', md: '250px' }}
                                onClick={() => window.open(ctaHref, '_blank')}
                            >
                                {ctaText}
                                <Box as={ArrowRight} ml={1} />
                            </Button>
                        </Stack>
                    )}

                    {/* Stats */}
                    {stats && stats.length > 0 && (
                        <Box display="flex" gap={{ base: 6, md: 8 }} mt={4} flexWrap="wrap">
                            {stats.map((stat, index) => (
                                <Box key={index}>
                                    <Text
                                        fontSize={{ base: '2xl', md: '3xl' }}
                                        fontWeight="700"
                                        color="#000"
                                        opacity={0.5}
                                    >
                                        {stat.value}
                                    </Text>
                                    <Text fontSize={{ base: 'xs', md: 'sm' }} color="#000">
                                        {stat.label}
                                    </Text>
                                </Box>
                            ))}
                        </Box>
                    )}
                </VStack>

                {/* Right Image */}
                <Box position="relative" h={{ base: '400px', md: '500px' }}>
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        style={{ objectFit: 'cover', borderRadius: '16px' }}
                        priority
                    />
                </Box>
            </Grid>
        </Container>
    </Box>
)
