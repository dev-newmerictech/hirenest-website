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
                <VStack alignItems="flex-start" gap={6}>
                    <Box>
                        <Text
                            fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                            fontWeight="600"
                            color="#4241ff"
                            textTransform="uppercase"
                            letterSpacing="wider"
                            mb={3}
                        >
                            For Employers
                        </Text>
                        <Heading
                            as="h1"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="700"
                            color="#000"
                            lineHeight="1.2"
                            mb={4}
                        >
                            Find Top Talent
                            <Text as="span" display="block" color="#4241ff">
                                Faster & Smarter
                            </Text>
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                            fontWeight="400"
                            color="#000"
                            lineHeight="1.6"
                            maxW="600px"
                        >
                            AI-powered candidate matching connects you with qualified professionals who perfectly align with your job requirements and company culture.
                        </Text>
                    </Box>

                    <Stack direction={{ base: 'column', sm: 'row' }} gap={4} w="full">
                        <Button
                            as="a"
                            href="https://app.hirenest.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
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
                            Post a Job
                            <Box as={ArrowRight} ml={1} />
                        </Button>
                    </Stack>

                    {/* Stats */}
                    <Flex gap={{ base: 6, md: 8 }} mt={4} flexWrap="wrap">
                        <Box>
                            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700" color="#000">
                                100K+
                            </Text>
                            <Text fontSize={{ base: 'xs', md: 'sm' }} color="#000">
                                Active Candidates
                            </Text>
                        </Box>
                        <Box>
                            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700" color="#000">
                                5K+
                            </Text>
                            <Text fontSize={{ base: 'xs', md: 'sm' }} color="#000">
                                Companies Hiring
                            </Text>
                        </Box>
                        <Box>
                            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700" color="#000">
                                48hrs
                            </Text>
                            <Text fontSize={{ base: 'xs', md: 'sm' }} color="#000">
                                Avg. Time to Hire
                            </Text>
                        </Box>
                    </Flex>
                </VStack>

                {/* Right Images */}
                <Box position="relative" h={{ base: '400px', md: '500px' }}>
                    {/* Main Image */}
                    <Image
                        src="/job-provider-hero.png"
                        alt="Professional hiring manager"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </Box>
            </Grid>
        </Container>
    </Box>
)
