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
import { Target, Heart, Zap } from 'lucide-react';

export const OurMission = () => {
    return (
        <Box bg="white" py={{ base: 16, md: 20 }} position="relative">
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
                        Our Mission
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
                        Empowering People and Organizations to Thrive
                    </Heading>
                    <Text
                        color="#000"
                        fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                        maxW="4xl"
                        lineHeight="1.6"
                    >
                        We believe that finding the right talent shouldn't be a struggle. Our AI-powered platform bridges the gap between exceptional candidates and forward-thinking companies.
                    </Text>
                </VStack>

                {/* Mission Cards */}
                <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
                    <MissionCard
                        icon={Target}
                        title="Precision Matching"
                        description="Our AI algorithms analyze skills, experience, and cultural fit to ensure perfect matches between candidates and companies."
                    />
                    <MissionCard
                        icon={Heart}
                        title="Human-Centered"
                        description="Technology should enhance, not replace, the human element in hiring. We prioritize empathy and understanding in every interaction."
                    />
                    <MissionCard
                        icon={Zap}
                        title="Speed & Efficiency"
                        description="Time is valuable. We reduce hiring timelines from months to days without compromising on quality."
                    />
                </Grid>
            </Container>
        </Box>
    );
};

const MissionCard = ({ icon, title, description }: { icon: any, title: string, description: string }) => (
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
