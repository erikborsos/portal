import PageLayout from '../../components/page-layout'
import ProductTitle from '../../components/products/product-title'
import { Link, List, ListItem, SlideFade } from '@chakra-ui/react'
import CContainer from '../../components/c-container'
import Meta from 'components/products/meta'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import ProductImage from '../../components/products/product-image'

const Product = () => (
  <PageLayout title='Produkte - Lipsum Software'>
    <ProductTitle badge='2019'>Lipsum Software</ProductTitle>
    <SlideFade in={true} delay={0.6}>
      <CContainer>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur
      </CContainer>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://www.loremipsum.de/' target='_blank' variant='colored'>https://www.loremipsum.de/ <ExternalLinkIcon /></Link>
        </ListItem>
        <ListItem>
          <Meta>Plattform</Meta>
          Windows, MacOS, Linux, iOS, Android
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          NodeJS, Electron, React Native
        </ListItem>
      </List>
    </SlideFade>
    <SlideFade in={true} delay={1.2}>
      <ProductImage src='/assets/images/products/lipsum.jpg' alt='lipsum' />
      <ProductImage src='/assets/images/products/lipsum/whatslipsum.png' alt='Was ist Lipsum?' />
    </SlideFade>
  </PageLayout>
)

export default Product