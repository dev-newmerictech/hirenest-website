'use client'

import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    Grid,
    VStack,
    Button
} from '@chakra-ui/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const TeamSection = () => {
    const teamMembers = [
        {
            name: 'Sarah Chen',
            role: 'CEO & Co-Founder',
            image: '/team-member-1.png'
        },
        {
            name: 'Michael Rodriguez',
            role: 'CTO & Co-Founder',
            image: '/team-member-2.png'
        },
        {
            name: 'Emily Watson',
            role: 'Head of Product',
            image: '/team-member-3.png'
        },
        {
            name: 'David Kim',
            role: 'Head of Engineering',
            image: '/team-member-4.png'
        }
    ];

    return (
        <Box bg="white" py={{ base: 16, md: 20 }}>
            <Container maxW="container.xl">
                {/* Section Header */}
                <VStack mb={12} textAlign="center">
                    <Text
                        color="#4241ff"
                        fontWeight="600"
                        fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                        mb={4}
                        letterSpacing="wider"
                        textTransform="uppercase"
                    >
                        Our Team
                    </Text>
                    <Heading
                        as="h2"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="700"
                        mb={6}
                        lineHeight="1.2"
                        color="#000"
                        maxW="800px"
                    >
                        Meet The{' '}
                        <Box as="span" bg="#4241ff" bgClip="text">Innovators</Box>
                    </Heading>
                    <Text
                        color="#000"
                        fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                        maxW="700px"
                        lineHeight="1.6"
                    >
                        Our diverse team of technologists, designers, and talent experts is united by a shared passion for transforming the hiring experience.
                    </Text>
                </VStack>

                {/* Team Grid */}
                <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={8} mb={12}>
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </Grid>

                {/* Join Team CTA */}
                <Box
                    bg="linear-gradient(135deg, #023E8A 0%, #4241ff 100%)"
                    borderRadius="2xl"
                    p={{ base: 8, md: 12 }}
                    textAlign="center"
                >
                    <Heading
                        as="h3"
                        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                        fontWeight="700"
                        color="white"
                        mb={4}
                    >
                        Join Our Growing Team
                    </Heading>
                    <Text
                        color="rgba(255, 255, 255, 0.9)"
                        fontSize={{ base: 'md', md: 'lg' }}
                        mb={8}
                        maxW="600px"
                        mx="auto"
                    >
                        We're always looking for talented individuals who share our vision and values. Explore our open positions and be part of the future of recruitment.
                    </Text>
                    <Button
                        size={{ base: 'md', md: 'lg' }}
                        bg="white"
                        color="#023E8A"
                        borderRadius="full"
                        _hover={{
                            bg: 'gray.100',
                            transform: "translateY(-2px)",
                            boxShadow: "lg"
                        }}
                        transition="all 0.3s"
                        fontWeight="bold"
                        px={8}
                        onClick={() => window.open('https://app.hirenest.ai/', '_blank')}
                    >
                        View Open Positions
                        <Box as={ArrowRight} ml={2} />
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

const TeamMemberCard = ({ name, role, image }: { name: string, role: string, image: string }) => (
    <Box
        bg="white"
        borderRadius="xl"
        overflow="hidden"
        borderWidth="1px"
        borderColor="rgba(66, 65, 255, 0.1)"
        _hover={{
            transform: 'translateY(-8px)',
            boxShadow: 'xl',
            borderColor: 'rgba(66, 65, 255, 0.3)',
        }}
        transition="all 0.3s"
    >
        <Box position="relative" h="280px">
            <Image
                src={image}
                alt={name}
                fill
                style={{ objectFit: 'cover' }}
            />
        </Box>
        <Box p={6}>
            <Heading
                as="h4"
                fontSize={{ base: 'lg', md: 'xl' }}
                fontWeight="700"
                color="#000"
                mb={2}
            >
                {name}
            </Heading>
            <Text
                color="#000"
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="600"
            >
                {role}
            </Text>
        </Box>
    </Box>
);
