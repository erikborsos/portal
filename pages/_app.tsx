import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/josefin-sans/700.css'
import { AppProps } from 'next/app'
import Fonts from '../components/fonts'
import Layout from '../components/layout'
import theme from '../lib/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
