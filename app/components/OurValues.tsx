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
import { Lightbulb, Users, TrendingUp, Shield, Globe, Sparkles } from 'lucide-react';

export const OurValues = () => {
    const values = [
        {
            icon: Lightbulb,
            title: 'Innovation First',
            description: 'We constantly push boundaries to create cutting-edge solutions that redefine what\'s possible in recruitment.'
        },
        {
            icon: Users,
            title: 'People-Centric',
            description: 'Every decision we make prioritizes the needs and experiences of our users, both candidates and employers.'
        },
        {
            icon: TrendingUp,
            title: 'Continuous Growth',
            description: 'We believe in perpetual learning and improvement, both for our platform and our team members.'
        },
        {
            icon: Shield,
            title: 'Trust & Transparency',
            description: 'We build trust through honest communication, data security, and ethical AI practices.'
        },
        {
            icon: Globe,
            title: 'Inclusive by Design',
            description: 'We champion diversity and create opportunities for talent from all backgrounds to succeed.'
        },
        {
            icon: Sparkles,
            title: 'Excellence Driven',
            description: 'We set high standards and deliver exceptional quality in everything we do, from code to customer service.'
        }
    ];

    return (
        <Box bg="white" pt={{ base: 16, md: 20 }}>
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
                        Our Values
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
                        Principles That{' '}
                        <Box as="span" bg="#4241ff" bgClip="text">Guide Us</Box>
                    </Heading>
                    <Text
                        color="#000"
                        fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                        maxW="700px"
                        lineHeight="1.6"
                    >
                        These core values shape our culture, drive our decisions, and define who we are as a company.
                    </Text>
                </VStack>

                {/* Values Grid */}
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={8}>
                    {values.map((value, index) => (
                        <ValueCard key={index} {...value} />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

const ValueCard = ({ icon, title, description }: { icon: any, title: string, description: string }) => (
    <Box
        p={6}
        borderRadius="xl"
        borderWidth="1px"
        borderColor="transparent"
        bg="white"
        _hover={{
            transform: 'translateY(-4px)',
            boxShadow: 'xl',
            borderColor: 'rgba(66, 65, 255, 0.2)',
            bg: 'rgba(66, 65, 255, 0.02)'
        }}
        transition="all 0.3s"
    >
        <Icon as={icon} color="#4241ff" boxSize={8} mb={4} />
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
