import { Box, Link } from '@chakra-ui/react'

const Footer = () => (
  <Box
    fontSize='sm'
    position='absolute'
    bottom={2}
    ml={'auto'}
    mr={'auto'}
    left={4}
    right={4}
    textAlign='center'
  >
    <Box textAlign='left' position='absolute' left={0}>
      &copy; {new Date().getFullYear()} Erik Borsos. All rights reserved.
    </Box>
    <Box textAlign='right' right={0}>
      <Link href='/impressum' variant='colored'>Impressum</Link>
      {' | '}
      <Link href='/datenschutz' variant='colored'>Datenschutz</Link>
    </Box>
  </Box>
)

export default Footer
