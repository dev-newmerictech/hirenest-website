"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { system } from "@/app/theme"

if (typeof window !== "undefined" && (!window.localStorage || typeof window.localStorage.getItem !== "function")) {
  Object.defineProperty(window, 'localStorage', {
    value: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    writable: true,
  });
}

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  )
}
