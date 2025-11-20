import Link from 'next/link'
import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react'

export default function NotFound() {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      _dark={{ bg: "gray.900" }}
    >
      <Container maxW="container.md" py={20}>
        <VStack gap={6} textAlign="center">
          {/* 404 Number */}
          <Heading
            fontSize={{ base: "8xl", md: "9xl" }}
            fontWeight="bold"
            bgGradient="to-r"
            gradientFrom="brand.600"
            gradientTo="brand.600"
            bgClip="text"
            lineHeight="1"
          >
            404
          </Heading>

          {/* Main Message */}
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="semibold"
            color="brand.600"
            _dark={{ color: "white" }}
          >
            Page Not Found
          </Heading>

          {/* Description */}
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.600"
            _dark={{ color: "gray.400" }}
            maxW="md"
          >
            Sorry, we couldn't find the page you're looking for. 
            The page might have been removed, renamed, or doesn't exist.
          </Text>

          {/* Action Buttons */}
          <VStack gap={3} pt={4}>
            <Link href="/" passHref>
              <Button
                size="lg"
                variant={'solid'}
                transition="all 0.2s"
              >
                Go Back Home
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

