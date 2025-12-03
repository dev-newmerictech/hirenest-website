'use client'

import { Box, Button, Container, Flex, Heading, Stack, Text, VStack, Grid } from '@chakra-ui/react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const AboutHero = () => (
    <Box
        w="full"
        position="relative"
        bgGradient="linear(to-br, rgba(66, 65, 255, 0.05), rgba(248, 248, 248, 1))"
        overflow="hidden"
    >
        <Container pt={{ base: '36', lg: '40' }} pb={{ base: '12', md: '16' }} maxW="7xl" position="relative">
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
                            About Us
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
                            Transforming Talent
                            <Text as="span" display="block" bg="#4241ff" bgClip="text">
                                Acquisition with AI
                            </Text>
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                            fontWeight="400"
                            color="#000"
                            lineHeight="1.6"
                            maxW="600px"
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            We're on a mission to revolutionize recruitment by making it faster, smarter, and more human-centered through the power of artificial intelligence.
                        </Text>
                    </Box>

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
                        >
                            Join Our Team
                            <Box as={ArrowRight} ml={1} />
                        </Button>
                    </Stack>

                    {/* Stats */}
                    <Flex gap={{ base: 6, md: 8 }} mt={4} flexWrap="wrap">
                        <Box>
                            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700" color="#000">
                                2019
                            </Text>
                            <Text fontSize={{ base: 'xs', md: 'sm' }} color="#000">
                                Founded
                            </Text>
                        </Box>
                        <Box>
                            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700" color="#000">
                                50+
                            </Text>
                            <Text fontSize={{ base: 'xs', md: 'sm' }} color="#000">
                                Team Members
                            </Text>
                        </Box>
                        <Box>
                            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700" color="#000">
                                100K+
                            </Text>
                            <Text fontSize={{ base: 'xs', md: 'sm' }} color="#000">
                                Users Served
                            </Text>
                        </Box>
                    </Flex>
                </VStack>

                {/* Right Images */}
                <Box position="relative" h={{ base: '400px', md: '500px' }}>
                    {/* Main Image */}
                    <Image
                        src="/about-hero.png"
                        alt="About Hirenest team"
                        fill
                        style={{ objectFit: 'cover', borderRadius: '16px' }}
                        priority
                    />
                </Box>
            </Grid>
        </Container>
    </Box>
)
