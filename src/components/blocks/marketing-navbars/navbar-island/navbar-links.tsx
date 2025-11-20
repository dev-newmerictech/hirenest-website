import { Link, Stack, type StackProps } from '@chakra-ui/react'

export const NavbarLinks = (props: StackProps) => {
  const links = [
    { label: 'For Job Seeker', href: '/job-seeker' },
    { label: 'For Job Providers', href: '/job-providers' },
  ]

  return (
    <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: '6', md: '8' }} {...props}>
      {links.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          fontWeight="medium"
          color="fg.muted"
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
      ))}
    </Stack>
  )
}
