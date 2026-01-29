'use client'

import { Box, Button, Container, Stack, Text, VStack } from '@chakra-ui/react'

export const Block = () => {
  return (
    <Box bg="#0f2442" w="full">
      <Container py={{ base: '16' }} maxW="full">
        <Stack align="center" gap={{ base: '8', md: '10' }}>
          <VStack gap={{ base: '6' }} textAlign="center" maxW="7xl" w="full">
            <VStack align="center" w="full" maxW="7xl">
              <Text
                color="white"
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="800"
                lineHeight="1.1"
                letterSpacing="tight"
              >
                Join us as we build the future of skills-based hiring
              </Text>

              <Text
                color="white"
                fontSize={{ base: 'lg', md: 'xl' }}
                opacity={0.9}
              >
                One platform. Two broken systems solved. Built for better outcomes.
              </Text>

              <Text
                color="white"
                fontSize={{ base: 'lg', md: 'xl' }}
                opacity={0.85}
              >
                Get ready to stop wasting time on hiring that doesn’t work.
              </Text>

              <VStack gap="2" pt="4">
                <Text color="white" fontSize={{ base: 'lg', md: 'xl' }}>
                  <strong>Picture this:</strong>
                </Text>
                <Text color="white" fontSize={{ base: 'lg', md: 'xl' }}>
                  Next Monday, you post a job.
                </Text>
                <Text color="white" fontSize={{ base: 'lg', md: 'xl' }}>
                  By Wednesday, you have ranked candidates who’ve proven they can do the work.
                </Text>
                <Text color="white" fontSize={{ base: 'lg', md: 'xl' }}>
                  By Friday, you’re making an offer you trust — because data backs your decision.
                </Text>
              </VStack>

              <Text
                color="white"
                fontSize={{ base: 'lg', md: 'xl' }}
                fontWeight="600"
                pt="4"
              >
                That’s Hirenest.
              </Text>
            </VStack>

            <VStack gap="4" w="full" pt="0">
              <Button
                size={{ base: 'lg', md: 'xl' }}
                variant="outline"
                borderColor="white"
                borderWidth="2px"
                color="white"
                px="10"
                py="7"
                fontSize={{ base: 'lg' }}
                fontWeight="600"
                borderRadius="full"
                w={{ base: 'full', md: 'auto' }}
                minW={{ base: 'full', md: '320px' }}
                _hover={{
                  bg: 'white',
                  color: '#0f2442',
                  borderColor: 'white',
                }}
                transition="all 0.3s"
                onClick={() => window.open('#', '_blank')}
              >
                Start Skills-Based Hiring
              </Button>

              <Text
                color="white"
                fontSize={{ base: 'md', md: 'lg' }}
                opacity={0.85}
                fontWeight="400"
              >
                No credit card • No setup friction • Just better hiring
              </Text>
            </VStack>
          </VStack>
        </Stack>
      </Container>
    </Box>
  )
}
