'use client'

import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    VStack,
    Icon
} from '@chakra-ui/react';
import { FileText, MessageCircle, Users, CheckCircle } from 'lucide-react';

export const ApplicationProcess = () => {
    const steps = [
        {
            icon: FileText,
            title: 'Apply Online',
            description: 'Submit your application through our careers portal. Make sure to include your resume and a cover letter.'
        },
        {
            icon: MessageCircle,
            title: 'Initial Screening',
            description: 'Our team will review your application and reach out for a quick introductory call to learn more about you.'
        },
        {
            icon: Users,
            title: 'Team Interviews',
            description: 'Meet with team members and hiring managers to discuss your experience and how you can contribute to our mission.'
        },
        {
            icon: CheckCircle,
            title: 'Offer & Onboarding',
            description: 'If it is a match, we will extend an offer and help you get started on your journey with us.'
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
                        Application Process
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
                        How to <Box as="span" bg="#4241ff" bgClip="text">Join Us</Box>
                    </Heading>
                    <Text
                        color="#000"
                        fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                        maxW="700px"
                        lineHeight="1.6"
                    >
                        Our hiring process is designed to be transparent and respectful of your time. Here's what to expect:
                    </Text>
                </VStack>

                {/* Process Steps */}
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    gap={6}
                    position="relative"
                >
                    {steps.map((step, index) => (
                        <ProcessStep key={index} {...step} stepNumber={index + 1} isLast={index === steps.length - 1} />
                    ))}
                </Flex>
            </Container>
        </Box>
    );
};

const ProcessStep = ({ icon, title, description, stepNumber, isLast }: {
    icon: any,
    title: string,
    description: string,
    stepNumber: number,
    isLast: boolean
}) => (
    <Flex
        direction="column"
        align="center"
        flex={1}
        position="relative"
    >
        {/* Step Number */}
        <Flex
            bg="linear-gradient(135deg, #4241ff 0%, #b000ea 100%)"
            w={16}
            h={16}
            borderRadius="full"
            align="center"
            justify="center"
            mb={4}
            position="relative"
            zIndex={2}
        >
            <Icon as={icon} color="white" boxSize={8} />
        </Flex>

        {/* Connector Line */}
        {!isLast && (
            <Box
                position="absolute"
                top="8"
                left="50%"
                w="100%"
                h="2px"
                bg="rgba(66, 65, 255, 0.2)"
                display={{ base: 'none', md: 'block' }}
                zIndex={1}
            />
        )}

        {/* Content */}
        <VStack textAlign="center" gap={2}>
            <Text
                fontSize="sm"
                fontWeight="600"
                color="#4241ff"
            >
                Step {stepNumber}
            </Text>
            <Heading
                as="h3"
                fontSize={{ base: 'lg', md: 'xl' }}
                fontWeight="700"
                color="#000"
            >
                {title}
            </Heading>
            <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color="#000"
                lineHeight="1.6"
            >
                {description}
            </Text>
        </VStack>
    </Flex>
);
