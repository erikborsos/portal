import { Badge, Box, Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

const ProductTitle = ({ badge, ...props }) => (
  <Box>
    <NextLink href='/products' passHref>
      <Link variant='colored' >Produkte</Link>
    </NextLink>
    <span>
      {' '}<ChevronRightIcon />{' '}
      <Heading variant='section-title' display='inline-block' as='h3' fontSize='20' mb={4}>
        {props.children}
      </Heading>
      {' '}<Badge>{badge}</Badge>
    </span>
  </Box>
)

export default ProductTitle