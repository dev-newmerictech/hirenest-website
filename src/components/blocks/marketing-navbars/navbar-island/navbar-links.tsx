'use client'

import { Link, Stack, type StackProps } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'

export const NavbarLinks = (props: StackProps) => {
  const pathname = usePathname()

  const links = [
    { label: 'Find Jobs', href: '/job-seeker' },
    { label: 'Find Talents', href: '/job-provider' }
  ]

  return (
    <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: '6', md: '8' }} {...props}>
      {links.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.label}
            href={item.href}
            fontWeight="medium"
            fontSize={{ base: 'md', md: 'lg' }}
            color={isActive ? 'brand.500' : 'fg.muted'}
            colorPalette="brand"
            _hover={{
              color: 'brand.500',
              textDecoration: 'none',
            }}
            _focus={{
              outline: 'none',
              boxShadow: 'none',
            }}
            _active={{
              color: 'brand.500',
              outline: 'none',
              boxShadow: 'none',
            }}
          >
            {item.label}
          </Link>
        )
      })}
    </Stack>
  )
}
