import { ColorModeScript } from '@chakra-ui/react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

class Doc extends Document {
  render() {
    return (
      <Html lang='de'>
        <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/logo-dark.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/logo-dark.png"/>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
