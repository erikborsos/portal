import { extendTheme, theme as base } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      transitionProperty: 'all',
      transitionDuration: '0.45s',
      bg: mode('#f0e7db', '#202020')(props)
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
  solid: {
    light: '#e5e2d6',
    dark: '#272727'
  },
  solid2: {
    light: '#d6d6d6',
    dark: '#323232'
  },
  neutral: {
    light: '#f0f0f0',
    dark: '#222222'
  }
}

const fonts = {
  body: `M PLUS Rounded 1c, ${base.fonts.body}`,
  heading: `M PLUS Rounded 1c, ${base.fonts.heading}`
}

const components = {
  Link: {
    baseStyle: {
      textUnderlineOffset: 3
    },
    variants: {
      colored: props => ({
        color: 'brand.' + mode('400', '200')(props),
      }),
      active: props => ({
        bg: 'brand.' + mode('400', '200')(props),
        color: mode('white', 'black')(props),
        cursor: 'default',
        _hover: {
          textDecoration: 'none'
        }
      })
    }
  },
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  disableTransitionOnChange: false
}

const theme = extendTheme({ config, styles, colors, fonts, components })
export default theme
