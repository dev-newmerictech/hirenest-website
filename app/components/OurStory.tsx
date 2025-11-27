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
                            color="#4241ff"
                            fontWeight="600"
                            fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                            letterSpacing="wider"
                            textTransform="uppercase"
                        >
                            Our Story
                        </Text>
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="700"
                            lineHeight="1.2"
                            color="#000"
                        >
                            From Idea to{' '}
                            <Box as="span" bg="#4241ff" bgClip="text">Innovation</Box>
                        </Heading>
                        <Text
                            color="#000"
                            fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                            lineHeight="1.6"
                        >
                            Founded in 2019, Hirenest was born from a simple observation: the traditional hiring process was broken. Talented candidates were getting lost in the noise, and companies were spending months trying to find the right fit.
                        </Text>
                        <Text
                            color="#000"
                            fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                            lineHeight="1.6"
                        >
                            Our founders, experienced technologists and HR professionals, knew there had to be a better way. By combining cutting-edge AI with deep industry expertise, they created a platform that doesn't just match resumes to job descriptions—it understands potential.
                        </Text>
                        <Text
                            color="#000"
                            fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                            lineHeight="1.6"
                        >
                            Today, we're proud to serve over 100,000 users and 5,000+ companies worldwide, helping them build teams that drive innovation and success.
                        </Text>
                    </VStack>
                </Grid>
            </Container>
        </Box>
    );
};
