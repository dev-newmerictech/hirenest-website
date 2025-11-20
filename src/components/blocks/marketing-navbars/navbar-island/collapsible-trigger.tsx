'use client'
import { Collapsible, Icon, IconButton, useCollapsibleContext } from '@chakra-ui/react'
import { LuAlignRight, LuX } from 'react-icons/lu'

export const CollapsibleTrigger = () => {
  const context = useCollapsibleContext()
  return (
    <Collapsible.Trigger asChild>
      <IconButton
        aria-label="Open Menu"
        variant="ghost"
        size={{ base: 'sm', md: 'md' }}
        colorPalette="gray"
        hideFrom="lg"
      >
        <Icon size={{ base: 'md', md: 'lg' }}>{context.open ? <LuX /> : <LuAlignRight />}</Icon>
      </IconButton>
    </Collapsible.Trigger>
  )
}
