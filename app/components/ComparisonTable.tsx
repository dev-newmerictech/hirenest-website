'use client';

import {
    Box,
    Container,
    Heading,
    Text,
    Table,
    Icon,
    VStack,
    Button,
} from '@chakra-ui/react';
import { CheckCircle2, Minus, XCircle } from 'lucide-react';

type CellValue = 'check' | 'cross' | string;

const comparisonData = [
    { feature: 'AI-Powered Screening', us: 'check', compA: 'Limited', compB: 'cross' },
    { feature: 'Video Interviews', us: 'check', compA: 'check', compB: 'cross' },
    { feature: 'Skills Assessments', us: 'Unlimited', compA: 'Limited', compB: 'Per-test fee' },
    { feature: 'Advanced Analytics', us: 'check', compA: 'cross', compB: 'check' },
    { feature: 'Custom Workflows', us: 'check', compA: 'cross', compB: 'Limited' },
    { feature: 'Resume Builder', us: 'check', compA: 'cross', compB: 'cross' },
    { feature: 'Annual Cost (Employers)', us: 'Custom', compA: '$2,496+/year', compB: 'Per-candidate' },
    { feature: '24/7 Support', us: 'check', compA: 'cross', compB: 'check' },
];

const renderCell = (value: CellValue, highlight = false) => {
    if (value === 'check') {
        return <Icon as={CheckCircle2} color={highlight ? 'green.500' : 'gray.400'} boxSize={6} />;
    }

    if (value === 'cross') {
        return <Icon as={XCircle} color="red.400" boxSize={6} />;
    }

    return (
        <Text fontSize="sm" fontWeight="medium" color={highlight ? '#4241ff' : 'gray.600'}>
            {value}
        </Text>
    );
};

export const ComparisonTable = () => {
    return (
        <Box py={16} bg="white">
            <Container maxW="7xl">
                <VStack gap={4} textAlign="center" mb={10}>
                    <Text
                        fontSize={{ base: 'xs', md: 'sm' }}
                        fontWeight="600"
                        color="#4241ff"
                        textTransform="uppercase"
                        letterSpacing="wider"
                    >
                        Comparison
                    </Text>

                    <Heading fontSize={{ base: '3xl', md: '4xl' }} fontWeight="700">
                        See How <Text as="span" bg="#4241ff" bgClip="text">We Compare</Text>
                    </Heading>

                    <Text fontSize={{ base: 'md', md: 'lg' }} maxW="4xl">
                        More features, smarter technology, and unlimited assessments at a competitive price.
                    </Text>
                </VStack>

                <Box overflowX="auto" borderRadius="2xl" border="1px solid" borderColor="gray.200">
                    <Table.Root size="lg">
                        <Table.Header bg="gray.100">
                            <Table.Row>
                                <Table.ColumnHeader width="40%">Feature</Table.ColumnHeader>
                                <Table.ColumnHeader width="20%" textAlign="center" bg="blue.50" color="#4241ff">
                                    Hirenest
                                </Table.ColumnHeader>
                                <Table.ColumnHeader width="20%" textAlign="center">
                                    TestGorilla
                                </Table.ColumnHeader>
                                <Table.ColumnHeader width="20%" textAlign="center">
                                    Codility
                                </Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {comparisonData.map((row, i) => (
                                <Table.Row key={i} _hover={{ bg: 'gray.50' }}>
                                    <Table.Cell fontWeight="medium">{row.feature}</Table.Cell>

                                    <Table.Cell textAlign="center" bg="blue.50">
                                        {renderCell(row.us, true)}
                                    </Table.Cell>

                                    <Table.Cell textAlign="center">
                                        {renderCell(row.compA)}
                                    </Table.Cell>

                                    <Table.Cell textAlign="center">
                                        {renderCell(row.compB)}
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                </Box>

                {/* Advantage Section */}
                <VStack mt={10} gap={4} textAlign="center" maxW="4xl" mx="auto">
                    <Text fontSize="md" color="gray.700">
                        <strong>TestGorilla</strong> charges $2,496+/year with a limited number of assessments.
                        Once you run out, you pay more.
                    </Text>

                    <Text fontSize="md" color="gray.700">
                        <strong>Codility</strong> bills per candidate — costs spiral when you're thorough.
                    </Text>

                    <Text fontSize="lg" fontWeight="600">
                        Your Advantage with <Text as="span" color="#4241ff">Hirenest</Text>:
                        Unlimited assessments, so you never compromise on hiring quality.
                    </Text>

                    <Button
                        borderRadius="full"
                        fontWeight="500"
                        background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                        color="white"
                        minW={{ base: '100px', md: '100px' }}
                        _hover={{
                            background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                            opacity: 0.9,
                        }}
                        transition="all 0.3s ease"
                        onClick={() => window.open('https://app.hirenest.ai', '_blank')}
                    >
                        Grab Your Hirenest Advantage
                    </Button>
                </VStack>
            </Container>
        </Box>
    );
};
