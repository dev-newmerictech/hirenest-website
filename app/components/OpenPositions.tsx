'use client'

import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    VStack,
    Button,
    Grid
} from '@chakra-ui/react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

export const OpenPositions = () => {
    const positions = [
        {
            title: 'Senior Frontend Engineer',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time',
            description: 'Build beautiful, responsive user interfaces using React and Next.js.'
        },
        {
            title: 'Product Designer',
            department: 'Design',
            location: 'Remote',
            type: 'Full-time',
            description: 'Create intuitive user experiences and stunning visual designs.'
        },
        {
            title: 'Backend Engineer',
            department: 'Engineering',
            location: 'Remote / Hybrid',
            type: 'Full-time',
            description: 'Design and build scalable APIs and infrastructure.'
        },
        {
            title: 'DevOps Engineer',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time',
            description: 'Maintain and optimize our cloud infrastructure and CI/CD pipelines.'
        },
        {
            title: 'Product Manager',
            department: 'Product',
            location: 'Remote',
            type: 'Full-time',
            description: 'Define product strategy and work with cross-functional teams.'
        },
        {
            title: 'Customer Success Manager',
            department: 'Customer Success',
            location: 'Remote',
            type: 'Full-time',
            description: 'Help our customers achieve their hiring goals and drive product adoption.'
        }
    ];

    return (
        <Box bg="rgba(66, 65, 255, 0.02)" py={{ base: 16, md: 20 }}>
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
                        Open Positions
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
                        Find Your Next <Box as="span" bg="#4241ff" bgClip="text">Opportunity</Box>
                    </Heading>
                    <Text
                        color="#000"
                        fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                        maxW="700px"
                        lineHeight="1.6"
                    >
                        We're always looking for talented people to join our team. Explore our current openings and find your perfect role.
                    </Text>
                </VStack>

                {/* Positions Grid */}
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
                    {positions.map((position, index) => (
                        <PositionCard key={index} {...position} />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

const PositionCard = ({ title, department, location, type, description }: {
    title: string,
    department: string,
    location: string,
    type: string,
    description: string
}) => (
    <Box
        bg="white"
        p={6}
        borderRadius="xl"
        borderWidth="1px"
        borderColor="rgba(66, 65, 255, 0.1)"
        _hover={{
            transform: 'translateY(-4px)',
            boxShadow: 'xl',
            borderColor: 'rgba(66, 65, 255, 0.3)',
        }}
        transition="all 0.3s"
    >
        <Flex justify="space-between" align="start" mb={3}>
            <Box>
                <Text
                    fontSize="xs"
                    fontWeight="600"
                    color="#4241ff"
                    textTransform="uppercase"
                    mb={2}
                >
                    {department}
                </Text>
                <Heading
                    as="h3"
                    fontSize={{ base: 'lg', md: 'xl' }}
                    fontWeight="700"
                    color="#000"
                    mb={3}
                >
                    {title}
                </Heading>
            </Box>
        </Flex>

        <Text
            color="#000"
            fontSize={{ base: 'sm', md: 'md' }}
            mb={4}
            lineHeight="1.6"
        >
            {description}
        </Text>

        <Flex gap={4} mb={4} flexWrap="wrap">
            <Flex align="center" gap={1}>
                <MapPin size={16} color="#4241ff" />
                <Text fontSize="sm" color="#000">
                    {location}
                </Text>
            </Flex>
            <Flex align="center" gap={1}>
                <Clock size={16} color="#4241ff" />
                <Text fontSize="sm" color="#000">
                    {type}
                </Text>
            </Flex>
        </Flex>

        <Button
            size="sm"
            variant="outline"
            borderColor="#4241ff"
            color="#4241ff"
            _hover={{
                bg: '#4241ff',
                color: 'white'
            }}
            display="flex"
            alignItems="center"
            gap={2}
            onClick={() => window.open('https://app.hirenest.ai/', '_blank')}
        >
            Apply Now
            <ArrowRight size={16} />
        </Button>
    </Box>
);
