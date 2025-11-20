"use client"

import type { SpanProps } from "@chakra-ui/react"
import { Span } from "@chakra-ui/react"
import * as React from "react"

// Light mode is always active - no theme switching
export type ColorMode = "light"

export interface UseColorModeReturn {
  colorMode: ColorMode
}

export function useColorMode(): UseColorModeReturn {
  return {
    colorMode: "light" as ColorMode,
  }
}

export function useColorModeValue<T>(light: T, dark: T) {
  // Always return light mode value
  return light
}

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    )
  },
)
