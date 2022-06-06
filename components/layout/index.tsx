import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Footer from './footer'
import Header from './header/header'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()
  return (
    <>
      <Header path={router.asPath} />
      <Box as='main' minH='100vh'>
        {children}
        <Footer />
      </Box>
    </>
  )
}

export default Layout
