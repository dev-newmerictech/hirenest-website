import { Badge, Box, Button, Container, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { ImagePlaceholder } from './image-placeholder'
import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'

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
      <VStack gap="14" textAlign="center" mt={'24'}>
        <Stack gap="12">
          <Box mx={'auto'}>
            <Badge rounded={'full'} fontSize={14} className='!bg-gradient-to-r !from-indigo-600 !to-purple-600' color='#fff' px={4} py={2}>
              <Star />
              Powered by AI & Machine Learning
            </Badge>
          </Box>
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '6xl' }}
            maxW={{ md: '6xl' }}
            mx="auto"
            lineHeight="normal"
            fontWeight="800"
            color="#2a3f5d"
          >
            Revolutionary Features <br /> for <Text as="span" className='bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>Modern Hiring</Text>
          </Heading>
          <Text
            color="#2a3f5d"
            fontSize={{ base: 'lg', md: '2xl', lg: '24px' }}
            maxW={{ md: '4xl' }}
            mx="auto"
            lineHeight="relaxed"
          >
            Transform your recruitment process with cutting-edge technology that saves time, reduces bias, and finds the perfect candidates.
          </Text>
        </Stack>

        <Stack
          align="center"
          direction={{ base: 'column', md: 'row' }}
          gap="4"
          w={{ base: 'full', md: 'auto' }}
        >
          <Button
            size={{ base: 'xl', md: '2xl' }}
            color="white"
            fontWeight={'bold'}
            borderRadius="full"
            px="12"
            background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
            minW={{ base: '80px', md: '220px' }}
            _hover={{
              background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
              opacity: 0.9,
            }}
          >
            Start Free Trial <ArrowRight />
          </Button>
          <Button
            size={{ base: 'xl', md: '2xl' }}
            variant="outline"
            fontWeight={'bold'}
            colorPalette="brand"
            borderColor="brand.500"
            color="brand.500"
            bg="transparent"
            borderRadius="full"
            px="12"
            minW={{ base: 'full', md: '220px' }}
            _hover={{
              bg: 'brand.50',
            }}
          >
            Watch Demo
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
