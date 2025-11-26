'use client'
import { Box, Container, Heading, Text, Table, Icon, VStack, Badge } from '@chakra-ui/react';
import { CheckCircle2, XCircle, Minus } from 'lucide-react';

const comparisonData = [
    { feature: 'AI-Powered Screening', us: true, compA: false, compB: true },
    { feature: 'Video Interviews', us: true, compA: true, compB: false },
    { feature: 'Skills Assessments', us: true, compA: true, compB: true },
    { feature: 'Advanced Analytics', us: true, compA: false, compB: false },
    { feature: 'Custom Workflows', us: true, compA: true, compB: false },
    { feature: 'White-Label Option', us: true, compA: false, compB: false },
    { feature: '24/7 Support', us: true, compA: false, compB: false },
];

export const ComparisonTable = () => {
    return (
        <Box py={{ base: 16, md: 24 }} bg="white">
            <Container maxW="7xl">
                <VStack gap={4} textAlign="center" mb={10}>
                    <Badge
                        colorScheme="blue"
                        variant="subtle"
                        px={4}
                        py={1}
                        rounded="full"
                        textTransform="uppercase"
                        fontSize="sm"
                        fontWeight="bold"
                        color="blue.600"
                        bg="blue.50"
                    >
                        Comparison
                    </Badge>
                    <Heading
                        as="h2"
                        fontSize={{ base: '3xl', md: '4xl' }}
                        fontWeight="700"
                        letterSpacing="tight"
                        color="#000"
                    >
                        See How We Compare
                    </Heading>
                    <Text fontSize={{ base: 'md', md: 'lg' }} color="#000" maxW="4xl">
                        More features, better experience, and smarter technology at a fraction of the cost
                    </Text>
                </VStack>

                <Box overflowX="auto" borderRadius="2xl" border="1px solid" borderColor="gray.200">
                    <Table.Root variant="outline" size="lg">
                        <Table.Header bg="gray.100">
                            <Table.Row>
                                <Table.ColumnHeader py={6} fontSize="lg" color="#000" width="40%">Feature</Table.ColumnHeader>
                                <Table.ColumnHeader py={6} fontSize="lg" color="#4241ff" textAlign="center" width="20%" bg="blue.50">
                                    Our Platform
                                </Table.ColumnHeader>
                                <Table.ColumnHeader py={6} fontSize="lg" color="#000" textAlign="center" width="20%">Competitor A</Table.ColumnHeader>
                                <Table.ColumnHeader py={6} fontSize="lg" color="#000" textAlign="center" width="20%">Competitor B</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {comparisonData.map((row, index) => (
                                <Table.Row key={index} _hover={{ bg: 'gray.50' }}>
                                    <Table.Cell fontWeight="medium" color="#000" borderBottomWidth={index === comparisonData.length - 1 ? 0 : 1}>
                                        {row.feature}
                                    </Table.Cell>
                                    <Table.Cell textAlign="center" bg="blue.50" borderBottomWidth={index === comparisonData.length - 1 ? 0 : 1} borderColor="blue.100">
                                        <Icon as={CheckCircle2} color="green.500" boxSize={6} />
                                    </Table.Cell>
                                    <Table.Cell textAlign="center" borderBottomWidth={index === comparisonData.length - 1 ? 0 : 1}>
                                        {row.compA ? (
                                            <Icon as={CheckCircle2} color="gray.400" boxSize={6} />
                                        ) : (
                                            <Icon as={Minus} color="red.300" boxSize={6} />
                                        )}
                                    </Table.Cell>
                                    <Table.Cell textAlign="center" borderBottomWidth={index === comparisonData.length - 1 ? 0 : 1}>
                                        {row.compB ? (
                                            <Icon as={CheckCircle2} color="gray.400" boxSize={6} />
                                        ) : (
                                            <Icon as={Minus} color="red.300" boxSize={6} />
                                        )}
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                </Box>
            </Container>
        </Box>
    );
};
