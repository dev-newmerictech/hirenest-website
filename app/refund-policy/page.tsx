import { Metadata } from 'next'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { pageMetadata } from '../lib/metadata';
import { RefundPolicyStructuredData } from './structured-data';

// Force static generation for optimal performance
export const dynamic = 'force-static';

export const metadata: Metadata = pageMetadata.refundPolicy;

export default function RefundPolicyPage() {
    return (
        <Box bg="gray.100" pb={{ base: '16' }} pt={{ base: '24', md: '32' }} borderBottom={'2px solid #fff'}>
            <RefundPolicyStructuredData />
            <Container maxW="4xl">
                <VStack alignItems="flex-start" gap={8}>
                    <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} color="#023E8A" fontWeight="800">
                        Refund Policy
                    </Heading>

                    <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
                        Last Updated: November 21, 2025
                    </Text>

                    <VStack alignItems="flex-start" gap={6}>
                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#023E8A" mb={3} fontWeight="800">
                                1. Refund Eligibility
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                We offer a 30-day money-back guarantee for all premium subscriptions. If you are not
                                satisfied with our service, you may request a full refund within 30 days of your initial
                                purchase.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#023E8A" mb={3} fontWeight="800">
                                2. How to Request a Refund
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                To request a refund, please contact our support team at support@hirenest.com with your
                                account details and reason for the refund request. We will process your request within
                                5-7 business days.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#023E8A" mb={3} fontWeight="800">
                                3. Non-Refundable Items
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                The following items are non-refundable: job posting fees after the job has been
                                published, premium job listings that have already been promoted, and any services that
                                have been fully delivered.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#023E8A" mb={3} fontWeight="800">
                                4. Subscription Cancellations
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                You may cancel your subscription at any time. Upon cancellation, you will continue to
                                have access to premium features until the end of your current billing period. No refunds
                                will be provided for partial months.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#023E8A" mb={3} fontWeight="800">
                                5. Refund Processing
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                Approved refunds will be processed to the original payment method within 7-10 business
                                days. Please note that it may take additional time for your bank or credit card company
                                to process the refund.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#023E8A" mb={3} fontWeight="800">
                                6. Contact Us
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                If you have any questions about our refund policy, please contact us at
                                support@hirenest.com
                            </Text>
                        </Box>
                    </VStack>
                </VStack>
            </Container>
        </Box>
    )
}
