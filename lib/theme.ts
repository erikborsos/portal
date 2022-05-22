import { extendTheme, theme as base } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('background.light', 'background.dark')(props)
    }
  })
}

const colors = {
  brand: {
    50: '#e8f6ff',
    100: '#bde3ff',
    200: '#94cdff',
    300: '#6eb4f7',
    400: '#4c9ae7',
    500: '#317ece',
    600: '#1e64ab',
    700: '#144b83',
    800: '#113458',
    900: '#0d1e2d'
  },
  background: {
    dark: '#202023',
    light: '#f0e7db'
  },
  navbar: {
    dark: '#19192280',
    light: '#ffffff40'
  }
}

const fonts = {
  heading: `Josefin Sans, ${base.fonts.heading}`
}

const components = {
  Button: {
    variants: {
      pill: props => ({
        ...base.components.Button.variants.outline(props),
        rounded: 'full',
        color: 'gray.500'
      })
    }
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, colors, fonts, components })
export default theme
