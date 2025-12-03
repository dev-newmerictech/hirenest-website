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

export const CultureValues = () => {
    return (
        <Box bg="white" py={{ base: 16, md: 20 }}>
            <Container maxW="container.xl">
                <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 8, lg: 16 }} alignItems="center">
                    {/* Left - Content */}
                    <VStack alignItems="flex-start" gap={6}>
                        <Text
                            color="#4241ff"
                            fontWeight="600"
                            fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                            letterSpacing="wider"
                            textTransform="uppercase"
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            Our Culture
                        </Text>
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '4xl' }}
                            fontWeight="700"
                            lineHeight="1.2"
                            color="#000"
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            A Place Where{' '}
                            <Box as="span" bg="#4241ff" bgClip="text">
                                You Belong
                            </Box>
                        </Heading>
                        <Text
                            color="#000"
                            fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                            lineHeight="1.6"
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            Our culture is built on trust, transparency, and collaboration. We believe in empowering our team members to do their best work while maintaining a healthy work-life balance.
                        </Text>
                        <Text
                            color="#000"
                            fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                            lineHeight="1.6"
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            We celebrate diversity, encourage innovation, and support each other's growth. Whether you're working remotely or in the office, you'll find a welcoming community that values your unique perspective.
                        </Text>

                        {/* Culture Highlights */}
                        <Grid templateColumns="repeat(2, 1fr)" gap={4} w="full" mt={4}>
                            <CultureHighlight number="4.9/5" label="Employee Rating" />
                            <CultureHighlight number="95%" label="Retention Rate" />
                            <CultureHighlight number="20+" label="Team Events/Year" />
                            <CultureHighlight number="100%" label="Say They'd Recommend" />
                        </Grid>
                    </VStack>

                    {/* Right - Image */}
                    <Box position="relative" h={{ base: '400px', md: '500px' }}>
                        <Image
                            src="/culture-values.png"
                            alt="Our culture"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '16px' }}
                        />
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
};

const CultureHighlight = ({ number, label }: { number: string, label: string }) => (
    <Box
        p={4}
        bg="rgba(66, 65, 255, 0.05)"
        borderRadius="lg"
        textAlign="center"
    >
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="700" color="#4241ff" mb={1}>
            {number}
        </Text>
        <Text fontSize={{ base: 'xs', md: 'sm' }} color="#000">
            {label}
        </Text>
    </Box>
);
