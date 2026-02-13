'use client'

import { Box, Button, Container, Flex, Heading, Stack, Text, VStack, Grid } from '@chakra-ui/react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const CareersHero = () => (
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
                            fontSize="sm"
                            fontWeight="600"
                            color="#4241ff"
                            textTransform="uppercase"
                            letterSpacing="wider"
                            mb={3}
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            Careers at Hirenest
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
                            Build the Future of
                            <Text as="span" display="block" bg="#4241ff" bgClip="text">
                                Recruitment with Us
                            </Text>
                        </Heading>
                        <Text
                            fontSize={{ base: 'lg', md: 'xl' }} color="gray.500" maxW="lg" lineHeight="1.6"
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            Join our mission to transform how people find jobs and companies find talent. We're looking for passionate individuals ready to make an impact.
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
                            onClick={() => window.open('https://app.hirenest.ai/', '_blank')}
                        >
                            View Open Positions
                            <Box as={ArrowRight} ml={1} />
                        </Button>
                    </Stack>

                    {/* Stats */}
                    <Flex gap={{ base: 6, md: 8 }} mt={4} flexWrap="wrap">
                        <Box>
                            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700" color="#000" opacity={0.5}>
                                50+
                            </Text>
                            <Text fontSize={{ base: 'xs', md: 'sm' }} color="#000" opacity={0.5}>
                                Team Members
                            </Text>
                        </Box>
                        <Box>
                            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700" color="#000" opacity={0.5}>
                                15+
                            </Text>
                            <Text fontSize={{ base: 'xs', md: 'sm' }} color="#000" opacity={0.5}>
                                Countries
                            </Text>
                        </Box>
                        <Box>
                            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700" color="#000" opacity={0.5}>
                                100%
                            </Text>
                            <Text fontSize={{ base: 'xs', md: 'sm' }} color="#000" opacity={0.5}>
                                Remote Friendly
                            </Text>
                        </Box>
                    </Flex>
                </VStack>

                {/* Right Images */}
                <Box position="relative" h={{ base: '400px', md: '500px' }}>
                    {/* Main Image */}
                    <Image
                        src="/careers-hero.png"
                        alt="Careers at Hirenest"
                        fill
                        style={{ objectFit: 'cover', borderRadius: '16px' }}
                        priority
                    />
                </Box>
            </Grid>
        </Container>
    </Box>
)
