import { Box, Button, Container, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { ImagePlaceholder } from './image-placeholder'
import Image from 'next/image'

export const Block = () => (
  <Box
    w="full"
    position="relative"
    bg="#fff"
  >
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      height="500px"
      filter="blur(90px)"
      background="linear-gradient(90deg,rgba(199, 194, 253, 1) 10%, rgba(255, 255, 255, 1) 50%, rgba(199, 194, 253, 1) 100%);"
      zIndex="0"
    />
    <Container py={{ base: '16', md: '24' }} maxW="7xl" position="relative" zIndex="1">
      <VStack gap="6" textAlign="center" mt={'24'}>
        <Stack gap="8">
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '6xl' }}
            maxW={{ md: '6xl' }}
            mx="auto"
            lineHeight="tighter"
            fontWeight="bold"
            color="#2a3f5d"
          >
            Where Talent Meets Opportunity
          </Heading>
          <Text
            color="#2a3f5d"
            fontSize={{ base: 'lg', md: '2xl', lg: '24px' }}
            maxW={{ md: '4xl' }}
            mx="auto"
            lineHeight="relaxed"
          >
            Whether you're hiring or job hunting, Hirenest helps you find your perfect match — faster, smarter, and skill-based.
          </Text>
        </Stack>

        <Stack
          align="center"
          direction={{ base: 'column', md: 'row' }}
          gap="4"
          w={{ base: 'full', md: 'auto' }}
        >
          <Button
            size={{ base: 'lg', md: 'xl' }}
            variant="outline"
            colorPalette="brand"
            borderColor="brand.500"
            color="brand.500"
            bg="transparent"
            borderRadius="full"
            px="8"
            minW={{ base: 'full', md: '220px' }}
            _hover={{
              bg: 'brand.50',
            }}
          >
            I am Job Seeker
          </Button>
          <Button
            size={{ base: 'lg', md: 'xl' }}
            variant="outline"
            colorPalette="brand"
            borderColor="brand.500"
            color="brand.500"
            bg="transparent"
            borderRadius="full"
            px="8"
            minW={{ base: 'full', md: '220px' }}
            _hover={{
              bg: 'brand.50',
            }}
          >
            I am Job Provider
          </Button>
        </Stack>

        <Box maxW="7xl" mx="auto" w="full" justifyContent="center" alignItems="center" display="flex" mt="10">
          <Box p={2} bg="white" borderRadius="2xl" boxShadow="md">
            <Image src="/dashborad.svg" alt="Hero Image" width={1000} height={1000} />
          </Box>
        </Box>
      </VStack>
    </Container>
  </Box>
)
