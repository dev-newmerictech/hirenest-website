'use client'
import {
  Button,
  Center,
  CollapsibleContent,
  CollapsibleRoot,
  Container,
  HStack,
  Text,
  useCollapsibleContext,
} from '@chakra-ui/react'
import { Logo } from './logo'
import { CollapsibleTrigger } from './collapsible-trigger'
import { NavbarLinks } from './navbar-links'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const NavbarContainer = ({ children }: { children: React.ReactNode }) => {
  const context = useCollapsibleContext()

  return (
    <Container
      background="bg.panel"
      borderRadius={{ base: context.open ? '8px' : 'full', lg: 'full' }}
      // boxShadow="lg"
      minW={{ base: '300px', md: '2xl', lg: '7xl' }}
      maxW={{ base: '300px', md: '2xl', lg: '7xl' }}
      px={{ base: '6', md: '8', lg: '8' }}
      py={{ base: '3', md: '4', lg: '3' }}
      transition="border-radius 0.2s ease"
    >
      {children}
    </Container>
  )
}

export const Block = () => {
  const router = useRouter();
  return (
    <Center
      position="fixed"
      zIndex="docked"
      top={{ base: '4', md: '6' }}
      left={{ base: '2', md: '4' }}
      right={{ base: '2', md: '4' }}
    >
      <CollapsibleRoot >
        <NavbarContainer>
          <HStack gap={{ base: '2', md: '4', lg: '8' }} w="full" justify="space-between">
            {/* <Text fontSize="24px" fontWeight="bold" color="brand.500">Hirenest</Text> */}

            <Image src="/HpLogo.svg" alt="Hirenest Logo" width={200} height={100} style={{ cursor: 'pointer' }} onClick={() => router.push('/')} />
            <NavbarLinks hideBelow="lg" />
            <HStack gap={{ base: '2', md: '3' }} hideBelow="lg">
              <Button
                size={{ base: 'sm', md: 'md' }}
                variant="outline"
                colorPalette="brand"
                borderRadius="full"
                bg="white"
                borderColor="brand.500"
                color="brand.500"
                minW={{ base: '80px', md: '100px' }}
                _hover={{
                  bg: 'brand.50',
                }}
              >
                Login
              </Button>
              <Button
                size={{ base: 'sm', md: 'md' }}
                borderRadius="full"
                background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                color="white"
                minW={{ base: '80px', md: '100px' }}
                _hover={{
                  background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                  opacity: 0.9,
                }}
              >
                Sign Up
              </Button>
            </HStack>
            <CollapsibleTrigger />
          </HStack>
          <CollapsibleContent hideFrom="lg">
            <NavbarLinks pt="5" pb="2" alignItems="center" justify="center" />
            <HStack gap="3" pt="4" pb="2" justify="center">
              <Button
                size={{ base: 'sm', md: 'md' }}
                variant="outline"
                colorPalette="brand"
                borderRadius="full"
                bg="white"
                borderColor="brand.500"
                color="brand.500"
                minW={{ base: '100px', md: '100px' }}
                _hover={{
                  bg: 'brand.50',
                }}
              >
                Login
              </Button>
              <Button
                size={{ base: 'sm', md: 'md' }}
                borderRadius="full"
                background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                color="white"
                minW={{ base: '100px', md: '100px' }}
                _hover={{
                  background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                  opacity: 0.9,
                }}
              >
                Sign Up
              </Button>
            </HStack>
          </CollapsibleContent>
        </NavbarContainer>
      </CollapsibleRoot>
    </Center>
  )
}
