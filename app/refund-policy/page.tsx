import { Metadata } from 'next'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { pageMetadata } from '../lib/metadata';
import { RefundPolicyStructuredData } from './structured-data';
import Link from 'next/link';

// Force static generation for optimal performance
export const dynamic = 'force-static';

export const metadata: Metadata = pageMetadata.refundPolicy;

export default function RefundPolicyPage() {
    return (
        <Box bg="gray.100" pb={{ base: '16' }} pt={{ base: '24', md: '32' }} borderBottom={'2px solid #fff'}>
            <RefundPolicyStructuredData />
            <Container maxW="4xl">
                <VStack alignItems="flex-start" gap={8}>
                    <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} color="#4241ff" fontWeight="800">
                        Refund Policy
                    </Heading>

                    <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
                        Last Updated: March 26, 2026
                    </Text>

                    <VStack alignItems="flex-start" gap={6}>
                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3} fontWeight="800">
                                No Refund Policy
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                All sales made on HireNest are final. We do not offer refunds, exchanges, or credits for
                                any purchases, subscriptions, or services under any circumstances. By completing a
                                purchase, you acknowledge and agree to this no-refund policy.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3} fontWeight="800">
                                Subscription Cancellations
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                You may cancel your subscription at any time from your account settings. Upon
                                cancellation, your access to premium features will continue until the end of your
                                current billing period. No refunds or credits will be issued for unused time remaining
                                in the billing cycle.
                            </Text>
                        </Box>

                        <Box>
                            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} color="#4241ff" mb={3} fontWeight="800">
                                Contact Us
                            </Heading>
                            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" lineHeight="1.8">
                                If you have any questions or concerns regarding your account or this policy, please
                                reach out to us at{' '}
                                <Link href="mailto:hello@hirenest.ai" color="blue.500">
                                    hello@hirenest.ai
                                </Link>
                                {' '}and we will be happy to assist you.
                            </Text>
                        </Box>
                    </VStack>
                </VStack>
            </Container>
        </Box>
    )
}
