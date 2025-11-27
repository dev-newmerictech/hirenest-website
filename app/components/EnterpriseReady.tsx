'use client'
import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, Flex, Badge } from '@chakra-ui/react';
import { ShieldCheck, Scale, Network, CheckCircle2, Star } from 'lucide-react';

const enterpriseFeatures = [
    {
        title: '500+ Integrations',
        description: 'Connect with your favorite HR tools, ATS systems, and productivity apps.',
        icon: Network,
        items: [
            'Greenhouse',
            'Workday',
            'BambooHR',
            'Slack',
            'MS Teams',
            'Google Workspace'
        ]
    },
    {
        title: 'Security & Privacy',
        description: 'Enterprise-grade security with SOC 2, GDPR, and ISO 27001 compliance.',
        icon: ShieldCheck,
        items: [
            '256-bit encryption',
            'SSO/SAML',
            'Role-based access',
            'Audit logs',
            'Data residency',
            'HIPAA compliant'
        ]
    },
    {
        title: 'Compliance Tools',
        description: 'Stay compliant with employment laws and regulations automatically.',
        icon: Scale,
        items: [
            'EEO tracking',
            'OFCCP reports',
            'Adverse action',
            'Right to work',
            'Background checks',
            'Record retention'
        ]
    }
];

const brandGradient = "linear-gradient(90deg, #0071fb 0%, #b000ea 100%)";

export const EnterpriseReady = () => {
    return (
        <Box pb={{ base: 16 }} bg="#fff" position="relative">
            <Container maxW="7xl">
                <VStack gap={4} textAlign="center" mb={10}>
                    <Box mx={'auto'} mb={0}>

                        <Text
                            fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                            fontWeight="600"
                            color="#4241ff"
                            textTransform="uppercase"
                            letterSpacing="wider"
                            mb={3}
                        >
                            Enterprise
                        </Text>
                    </Box>
                    <Heading
                        as="h2"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="800"
                        letterSpacing="tight"
                        color="#000"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                    >
                        Enterprise-Ready <Text as="span" display="block" color="#4241ff">
                            Platform
                        </Text>
                    </Heading>
                    <Text fontSize={{ base: 'lg', md: 'xl' }} color="#000" maxW="3xl">
                        Built for scale, security, and seamless integration with your existing tools
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, lg: 3 }} gap={8}>
                    {enterpriseFeatures.map((feature, index) => (
                        <Box
                            key={index}
                            bg="gray.100"
                            p={8}
                            rounded="2xl"
                            border="1px solid"
                            borderColor="gray.100"
                            transition="all 0.3s"
                            _hover={{ shadow: 'xl', borderColor: 'indigo.200', transform: 'translateY(-4px)' }}
                            position="relative"
                            overflow="hidden"
                        >
                            <Box
                                position="absolute"
                                top={0}
                                left={0}
                                right={0}
                                h={1}
                                background={brandGradient}
                                opacity={0.7}
                            />

                            <Flex align="center" gap={1} mb={4}>
                                <Flex
                                    w={12}
                                    h={12}
                                    align="center"
                                    justify="center"
                                    rounded="xl"
                                    bg="rgba(66, 65, 255, 0.1)"
                                    color="#4241ff"
                                >
                                    <Icon as={feature.icon} boxSize={6} />
                                </Flex>
                                <Heading as="h3" fontSize="xl" fontWeight="bold" color="#000">
                                    {feature.title}
                                </Heading>
                            </Flex>

                            <Text color="#000" mb={6} fontSize="md">
                                {feature.description}
                            </Text>

                            <VStack as="ul" gap={3} align="start" w="full">
                                {feature.items.map((item, idx) => (
                                    <Flex as="li" key={idx} align="center" color="#000" w="full" gap={3}>
                                        <Icon as={CheckCircle2} color="#4241ff" boxSize={4} flexShrink={0} />
                                        <Text as="span" fontSize="md" fontWeight="medium">{item}</Text>
                                    </Flex>
                                ))}
                            </VStack>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};
