import { Metadata } from 'next'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { pageMetadata } from '../lib/metadata';
import { TermsOfServiceStructuredData } from './structured-data';

export const metadata: Metadata = pageMetadata.termsOfService;

export default function TermsOfServicePage() {
    return (
        <Box bg="gray.100" pb={{ base: '16' }} pt={{ base: '24', md: '32' }} borderBottom={'2px solid #fff'}>
            <TermsOfServiceStructuredData />
            <Container maxW="4xl">
                <VStack alignItems="flex-start" gap={8}>
                    <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} color="#023E8A">
                        Terms of Service
                    </Heading>

                    <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600">
                        Last Updated: November 21, 2025
                    </Text>

                    <VStack alignItems="flex-start" gap={6}>
                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#023E8A" mb={3}>
                                1. Acceptance of Terms
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                By accessing and using Hirenest, you accept and agree to be bound by the terms and
                                provisions of this agreement. If you do not agree to these terms, please do not use our
                                services.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#023E8A" mb={3}>
                                2. Use of Services
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                You agree to use our services only for lawful purposes and in accordance with these
                                Terms. You are responsible for maintaining the confidentiality of your account and
                                password and for restricting access to your account.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#023E8A" mb={3}>
                                3. User Content
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                You retain all rights to the content you submit to Hirenest. By submitting content, you
                                grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display
                                that content in connection with providing our services.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#023E8A" mb={3}>
                                4. Prohibited Activities
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                You may not use our services to engage in any illegal activity, harass other users,
                                transmit spam or malicious code, or attempt to gain unauthorized access to our systems.
                                Violation of these terms may result in termination of your account.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#023E8A" mb={3}>
                                5. Limitation of Liability
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                Hirenest shall not be liable for any indirect, incidental, special, consequential, or
                                punitive damages resulting from your use of or inability to use the service. Our total
                                liability shall not exceed the amount you paid us in the past twelve months.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#023E8A" mb={3}>
                                6. Changes to Terms
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                We reserve the right to modify these terms at any time. We will notify you of any
                                changes by posting the new terms on this page. Your continued use of the service after
                                such changes constitutes your acceptance of the new terms.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#023E8A" mb={3}>
                                7. Contact Information
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                If you have any questions about these Terms of Service, please contact us at
                                legal@hirenest.com
                            </Text>
                        </Box>
                    </VStack>
                </VStack>
            </Container>
        </Box>
    )
}
