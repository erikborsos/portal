import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link, List, ListItem, SlideFade } from '@chakra-ui/react'
import Meta from 'components/products/meta'
import CContainer from '../../components/c-container'
import PageLayout from '../../components/page-layout'
import ProductImage from '../../components/products/product-image'
import ProductTitle from '../../components/products/product-title'

const Product = () => (
  <PageLayout title='Produkte - STR Shop'>
    <ProductTitle badge='2022'>STR Shop</ProductTitle>
    <SlideFade in={true} delay={0.6}>
      <CContainer>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        nisi eu nunc efficitur, euismod aliquet.
      </CContainer>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href='https://www.loremipsum.de/'
            target='_blank'
            variant='colored'>
            https://www.loremipsum.de/ <ExternalLinkIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plattform</Meta>
          Web
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          NodeJS, Angular, Material-UI
        </ListItem>
      </List>
    </SlideFade>
    <SlideFade in={true} delay={1.2}>
      <ProductImage src='/assets/images/products/str.jpg' alt='str' />
    </SlideFade>
  </PageLayout>
)

export default Product
