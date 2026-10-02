'use client'

import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    Grid,
    VStack
} from '@chakra-ui/react';
import Image from 'next/image';

export const OurStory = () => {
    return (
        <Box bg="rgba(66, 65, 255, 0.02)" py={{ base: 16, md: 20 }}>
            <Container maxW="container.xl">
                <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 8, lg: 16 }} alignItems="center">
                    {/* Left - Image */}
                    <Box position="relative" h={{ base: '400px', md: '500px' }} order={{ base: 2, lg: 1 }}>
                        <Image
                            src="/our-story.png"
                            alt="Our story"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '16px' }}
                        />
                    </Box>

                    {/* Right - Content */}
                    <VStack alignItems="flex-start" gap={6} order={{ base: 1, lg: 2 }}>
                        <Text

                            fontSize="sm" fontWeight="600" color="#4241ff" textTransform="uppercase" letterSpacing="wider"
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            Our Story
                        </Text>
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="800"
                            color="#1d1d1f"
                            lineHeight="1.1"
                            letterSpacing="tight"
                        >
                            From Idea to{' '}
                            <Box as="span" bg="#4241ff" bgClip="text">Innovation</Box>
                        </Heading>
                        <Text
                            fontSize={{ base: 'lg', md: 'xl' }} color="#6e6e73" maxW="4xl"
                            lineHeight="1.6"
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            Founded in 2019, Hirenest was born from a simple observation: the traditional hiring process was broken. Talented candidates were getting lost in the noise, and companies were spending months trying to find the right fit.
                        </Text>
                        <Text
                            fontSize={{ base: 'lg', md: 'xl' }} color="#6e6e73" maxW="4xl"
                            lineHeight="1.6"
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            Our founders, experienced technologists and HR professionals, knew there had to be a better way. By combining cutting-edge AI with deep industry expertise, they created a platform that doesn't just match resumes to job descriptions—it understands potential.
                        </Text>
                        <Text
                            fontSize={{ base: 'lg', md: 'xl' }} color="#6e6e73" maxW="4xl"
                            lineHeight="1.6"
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            Today, we're proud to serve over 100,000 users and 5,000+ companies worldwide, helping them build teams that drive innovation and success.
                        </Text>
                    </VStack>
                </Grid>
            </Container>
        </Box>
    );
};
