import { Heading, Stack, type StackProps, Text } from '@chakra-ui/react'
import type React from 'react'

/**
 * Props for the PageHeader component.
 * @extends StackProps from Chakra UI
 */
export interface PageHeaderProps extends StackProps {
  /** The text to display above the main heading */
  tagline?: React.ReactNode
  /** The main heading text */
  headline: React.ReactNode
  /** The descriptive text that appears below the heading */
  description: React.ReactNode
  /** Optional content to render below the header section */
  children?: React.ReactNode
}

export const PageHeader = (props: PageHeaderProps) => {
  const { tagline, headline, description, ...rootProps } = props
  return (
    <Stack gap={{ base: '6', md: '8' }} {...rootProps}>
      <Stack gap={{ base: '4' }}>
        <Stack gap={{ base: '3', md: '4' }}>
          <Text fontSize="sm" fontWeight="600" color="#4241ff" textTransform="uppercase" letterSpacing="wider">
            {tagline}
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="800"
            color="#1d1d1f"
            lineHeight="1.1"
            letterSpacing="tight">
            {headline}
          </Heading>
        </Stack>
        <Text
          fontSize={{ base: 'lg', md: 'xl' }} color="#6e6e73"
          lineHeight="1.4" maxW="3xl">
          {description}
        </Text>
      </Stack>
      {props.children}
    </Stack>
  )
}
