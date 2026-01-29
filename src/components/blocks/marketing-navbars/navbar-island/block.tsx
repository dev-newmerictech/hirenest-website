'use client'
import { useState, useEffect, useRef } from 'react'
import {
  Button,
  Box,
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
      boxShadow="lg"
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
  const [navBg, setNavBg] = useState('transparent');
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 20) {
        setNavBg('transparent');
        return;
      }

      // Get all elements at the center point of the navbar
      const elements = document.elementsFromPoint(window.innerWidth / 2, 40);

      // Find the first element that is NOT part of the navbar
      let target: Element | null | undefined = elements.find(el => navbarRef.current && !navbarRef.current.contains(el));

      let color = 'transparent';

      // Traverse up from the target to find a non-transparent background
      while (target) {
        const tagName = target.tagName;
        // Skip elements that shouldn't define the navbar background (buttons, tables, etc.)
        if (['BUTTON', 'A', 'INPUT', 'LABEL', 'TABLE', 'THEAD', 'TBODY', 'TR', 'TH', 'TD', 'IMG', 'SVG'].includes(tagName)) {
          target = target.parentElement;
          continue;
        }

        const style = window.getComputedStyle(target);
        const bgColor = style.backgroundColor;

        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          color = bgColor;
          break;
        }
        target = target.parentElement;
      }

      // Fallback if no color found (e.g. only body has color)
      if (color === 'transparent' || color === 'rgba(0, 0, 0, 0)') {
        color = '#f7fafc'; // Fallback to gray.100 hex equivalent or similar
      }

      setNavBg(color);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      ref={navbarRef}
      position="fixed"
      zIndex="docked"
      top="0"
      left="0"
      right="0"
      bg={'transparent'}
      backdropFilter="blur(44px)"
      pt={{ base: '4' }}
      transition="background-color 0.2s ease"
    >
      <Center w="full">
        <CollapsibleRoot >
          <NavbarContainer>
            <HStack gap={{ base: '2', md: '4', lg: '8' }} w="full" justify="space-between">
              {/* <Text fontSize="24px" fontWeight="bold" color="brand.500">Hirenest</Text> */}

              <Image src="/HpLogo.svg" alt="Hirenest Logo" width={150} height={80} style={{ cursor: 'pointer' }} onClick={() => router.push('/')} />
              <NavbarLinks hideBelow="lg" />
              <HStack gap={{ base: '2', md: '3' }} hideBelow="lg">
                <Button
                  size={{ base: 'md', md: 'lg' }}
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
                  onClick={() => window.open('https://app.hirenest.ai/', '_blank')}
                >
                  Login
                </Button>
                <Button
                  size={{ base: 'md', md: 'lg' }}
                  borderRadius="full"
                  background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                  color="white"
                  minW={{ base: '80px', md: '100px' }}
                  _hover={{
                    background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                    opacity: 0.9,
                  }}
                  onClick={() => window.open('https://app.hirenest.ai/', '_blank')}
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
                  size={{ base: 'md', md: 'lg' }}
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
                  onClick={() => window.open('https://app.hirenest.ai/', '_blank')}
                >
                  Login
                </Button>
                <Button
                  size={{ base: 'md', md: 'lg' }}
                  borderRadius="full"
                  background="linear-gradient(90deg, #0071fb 0%, #b000ea 100%)"
                  color="white"
                  minW={{ base: '100px', md: '100px' }}
                  _hover={{
                    background: 'linear-gradient(90deg, #0071fb 0%, #b000ea 100%)',
                    opacity: 0.9,
                  }}
                  onClick={() => window.open('https://app.hirenest.ai/', '_blank')}
                >
                  Sign Up
                </Button>
              </HStack>
            </CollapsibleContent>
          </NavbarContainer>
        </CollapsibleRoot>
      </Center>
    </Box>
  )
}
