import { Metadata } from 'next'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { pageMetadata } from '../lib/metadata';
import { SecurityStructuredData } from './structured-data';

// Force static generation for optimal performance
export const dynamic = 'force-static';

export const metadata: Metadata = pageMetadata.security;

export default function SecurityPage() {
    return (
        <Box bg="gray.100" pb={{ base: '16' }} pt={{ base: '24', md: '32' }} borderBottom={'2px solid #fff'}>
            <SecurityStructuredData />
            <Container maxW="4xl">
                <VStack alignItems="flex-start" gap={8}>
                    <Heading as="h1" fontWeight="800" fontSize={{ base: '3xl', md: '4xl' }} color="#4241ff">
                        Security
                    </Heading>

                    <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
                        Last Updated: November 21, 2025
                    </Text>

                    <VStack alignItems="flex-start" gap={6}>
                        <Box>
                            <Heading as="h2" fontWeight="800" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3}>
                                Our Commitment to Security
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                At Hirenest, we take the security of your personal information seriously. We implement
                                industry-standard security measures to protect your data from unauthorized access,
                                disclosure, alteration, and destruction.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontWeight="800" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3}>
                                Data Encryption
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                All data transmitted between your device and our servers is encrypted using SSL/TLS
                                technology. We also encrypt sensitive data at rest using industry-standard encryption
                                algorithms to ensure your information remains secure.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontWeight="800" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3}>
                                Access Controls
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                We implement strict access controls to ensure that only authorized personnel have access
                                to your personal information. Our employees are trained on data security best practices
                                and are required to maintain confidentiality.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontWeight="800" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3}>
                                Regular Security Audits
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                We conduct regular security audits and vulnerability assessments to identify and address
                                potential security risks. Our systems are continuously monitored for suspicious activity
                                and potential threats.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontWeight="800" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3}>
                                Secure Infrastructure
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                Our infrastructure is hosted on secure, enterprise-grade servers with multiple layers of
                                protection including firewalls, intrusion detection systems, and regular backups. We
                                partner with leading cloud providers to ensure the highest level of security.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontWeight="800" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3}>
                                Your Responsibility
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                While we implement robust security measures, you also play a role in keeping your
                                account secure. Please use strong passwords, enable two-factor authentication, and never
                                share your login credentials with others.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontWeight="800" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3}>
                                Reporting Security Issues
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                If you discover a security vulnerability or have concerns about the security of your
                                data, please contact our security team at{' '}
                                <Text as="a" href="mailto:security@hirenest.ai" color="blue.500" hover="blue.600">
                                    security@hirenest.ai
                                </Text>
                            </Text>
                        </Box>
                    </VStack>
                </VStack>
            </Container>
        </Box>
    )
}
