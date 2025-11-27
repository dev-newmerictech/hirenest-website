'use client'

import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    Grid,
    VStack,
    Icon
} from '@chakra-ui/react';
import { Heart, Zap, Coffee, Globe, TrendingUp, Users } from 'lucide-react';

export const WhyJoinUs = () => {
    const benefits = [
        {
            icon: Heart,
            title: 'Health & Wellness',
            description: 'Comprehensive health insurance, mental health support, and wellness programs for you and your family.'
        },
        {
            icon: Zap,
            title: 'Flexible Work',
            description: 'Work from anywhere with flexible hours. We trust you to manage your time and deliver great results.'
        },
        {
            icon: Coffee,
            title: 'Learning Budget',
            description: '$2,000 annual budget for courses, conferences, books, and professional development.'
        },
        {
            icon: Globe,
            title: 'Global Team',
            description: 'Collaborate with talented people from 15+ countries and experience diverse perspectives.'
        },
        {
            icon: TrendingUp,
            title: 'Career Growth',
            description: 'Clear career paths, mentorship programs, and opportunities to lead projects and teams.'
        },
        {
            icon: Users,
            title: 'Amazing Culture',
            description: 'Supportive team environment where everyone\'s voice matters and contributions are recognized.'
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
                        Why Join Us
                    </Text>
                    <Heading
                        as="h2"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="700"
                        mb={6}
                        lineHeight="1.2"
                        color="#000"
                        maxW="4xl"
                    >
                        Benefits That Make a Difference
                    </Heading>
                    <Text
                        color="#000"
                        fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                        maxW="4xl"
                        lineHeight="1.6"
                    >
                        We offer competitive compensation and comprehensive benefits designed to support your personal and professional growth.
                    </Text>
                </VStack>

                {/* Benefits Grid */}
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={8}>
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

const BenefitCard = ({ icon, title, description }: { icon: any, title: string, description: string }) => (
    <Box
        bg="rgba(66, 65, 255, 0.03)"
        p={8}
        borderRadius="xl"
        borderWidth="1px"
        borderColor="rgba(66, 65, 255, 0.1)"
        _hover={{
            transform: 'translateY(-4px)',
            boxShadow: 'lg',
            borderColor: 'rgba(66, 65, 255, 0.3)',
        }}
        transition="all 0.3s"
    >
        <Flex
            bg="linear-gradient(135deg, #4241ff 0%, #b000ea 100%)"
            w={12}
            h={12}
            borderRadius="lg"
            align="center"
            justify="center"
            mb={4}
        >
            <Icon as={icon} color="white" boxSize={6} />
        </Flex>
        <Heading
            as="h3"
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight="700"
            mb={3}
            color="#000"
        >
            {title}
        </Heading>
        <Text
            color="#000"
            fontSize={{ base: 'sm', md: 'md' }}
            lineHeight="1.6"
        >
            {description}
        </Text>
    </Box>
);
