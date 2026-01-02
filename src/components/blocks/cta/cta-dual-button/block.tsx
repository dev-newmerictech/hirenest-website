'use client'

import { Box, Button, Container, Heading, Stack, Text, VStack } from '@chakra-ui/react'

export const Block = () => {
  return (
    <Box bg="#0f2442" w="full">
      <Container py={{ base: '16' }} maxW="full">
        <Stack align="center" gap={{ base: '8', md: '10' }}>
          <VStack gap={{ base: '6' }} textAlign="center" maxW="4xl" w="full">
            <VStack gap={{ base: '5', md: '6' }} align="center" w="full" maxW="2xl">
              <Text
                color="white"
                fontSize={{ base: 'lg', md: '4xl' }}
                fontWeight="600"
              >
                On the call, we'll:
              </Text>
              <VStack justifyContent={'center'} flexDirection={{ base: 'column', md: 'row' }} flexWrap="wrap" gap={{ base: '3', md: '4' }} align="start" w="full" px={{ base: '4', md: '8' }}>
                <Text color="white" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
                  ● Show you the platform with your actual job posting
                </Text>
                <Text color="white" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
                  ● Calculate your specific ROI
                </Text>
                <Text color="white" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
                  ● Answer all your questions
                </Text>
                <Text color="white" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
                  ● Give you custom pricing
                </Text>
              </VStack>
              <Text
                color="white"
                fontSize={{ base: 'lg', md: 'xl' }}
                fontWeight="600"
                textAlign="center"
                w="full"
              >
                No sales pitch. Just honest answers.
              </Text>
            </VStack>
            <VStack gap="4" w="full">
              <Button
                size={{ base: 'lg', md: 'xl' }}
                variant="outline"
                borderColor="white"
                borderWidth="2px"
                color="white"
                px="10"
                py="7"
                fontSize={{ base: 'lg', md: 'xl' }}
                fontWeight="600"
                borderRadius="full"
                w={{ base: 'full', md: 'auto' }}
                minW={{ base: 'full', md: '300px' }}
                _hover={{
                  bg: 'white',
                  color: '#0f2442',
                  borderColor: 'white',
                }}
                transition="all 0.3s"
                onClick={() => window.open('#', '_blank')}
              >
                Book Your Demo
              </Button>
              <Text
                color="white"
                fontSize={{ base: 'sm', md: 'md' }}
                opacity={0.85}
                fontWeight="400"
              >
                (15-minute call, zero pressure)
              </Text>
            </VStack>
          </VStack>
        </Stack>
      </Container>
    </Box>
  )
}

