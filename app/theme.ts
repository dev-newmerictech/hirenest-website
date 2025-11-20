import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: { 
          50: { value: "#eff0ff" },
          100: { value: "#d4d5ff" },
          200: { value: "#b9bbff" },
          300: { value: "#9ea1ff" },
          400: { value: "#8385ff" },
          500: { value: "#4241ff" }, // Hirenest primary color
          600: { value: "#3734e6" },
          700: { value: "#2c27cc" },
          800: { value: "#211ab3" },
          900: { value: "#160d99" },
          950: { value: "#0b0080" },      
        },
      },
      fonts: {
        heading: { value: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
        body: { value: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.50}" },
          emphasized: { value: "{colors.brand.600}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)

