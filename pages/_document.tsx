import { ColorModeScript } from '@chakra-ui/react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

class Doc extends Document {
  render() {
    return (
      <Html lang='de'>
        <Head>
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <title> </title>{' '}
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
