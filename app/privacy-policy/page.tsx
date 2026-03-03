import { Metadata } from 'next'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { pageMetadata } from '../lib/metadata';
import { PrivacyPolicyStructuredData } from './structured-data';

// Force static generation for optimal performance
export const dynamic = 'force-static';

export const metadata: Metadata = pageMetadata.privacyPolicy;

export default function PrivacyPolicyPage() {
    return (
        <Box bg="gray.100" pb={{ base: '16' }} pt={{ base: '24', md: '32' }} borderBottom={'2px solid #fff'}>
            <PrivacyPolicyStructuredData />
            <Container maxW="4xl">
                <VStack alignItems="flex-start" gap={8}>
                    <Heading as="h1" fontWeight="800" fontSize={{ base: '3xl', md: '4xl' }} color="#4241ff">
                        Privacy Policy
                    </Heading>

                    <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
                        Last Updated: November 21, 2025
                    </Text>

                    <VStack alignItems="flex-start" gap={6}>
                        <Box>
                            <Heading as="h2" fontWeight="800" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3}>
                                1. Information We Collect
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                We collect information you provide directly to us, including your name, email address,
                                phone number, resume, work history, and other information you choose to provide when
                                creating an account or using our services.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontWeight="800" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3}>
                                2. How We Use Your Information
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                We use the information we collect to provide, maintain, and improve our services,
                                including to match job seekers with employers, process transactions, send you technical
                                notices and support messages, and respond to your comments and questions.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontWeight="800" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3}>
                                3. Information Sharing
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                We do not share your personal information with third parties except as described in this
                                policy. We may share information with employers when you apply for jobs, with service
                                providers who assist us in operating our platform, and when required by law.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontWeight="800" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3}>
                                4. Data Security
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                We take reasonable measures to help protect your personal information from loss, theft,
                                misuse, unauthorized access, disclosure, alteration, and destruction. However, no
                                internet transmission is ever fully secure or error-free.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontWeight="800" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3}>
                                5. Your Rights
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                You have the right to access, update, or delete your personal information at any time.
                                You may also opt out of receiving promotional communications from us by following the
                                instructions in those messages.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontWeight="800" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3}>
                                6. Contact Us
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                If you have any questions about this Privacy Policy, please contact us at{' '}
                                <Text as="a" href="mailto:privacy@hirenest.ai" color="blue.500" hover="blue.600">
                                    privacy@hirenest.ai
                                </Text>
                            </Text>
                        </Box>
                    </VStack>
                </VStack>
            </Container>
        </Box>
    )
}
