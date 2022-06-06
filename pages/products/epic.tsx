import PageLayout from '../../components/page-layout'
import ProductTitle from '../../components/products/product-title'
import { Link, List, ListItem, SlideFade } from '@chakra-ui/react'
import CContainer from '../../components/c-container'
import Meta from 'components/products/meta'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import ProductImage from '../../components/products/product-image'

const Product = () => (
  <PageLayout title='Produkte - EpicGames WebApp'>
    <ProductTitle badge='2021'>EpicGames WebApp</ProductTitle>
    <SlideFade in={true} delay={0.6}>
      <CContainer>
        EpicGames WebApp ermöglicht es Spielern, sich über den Browser mit ihren Freunden zu verbinden. Auch ein Zugang zum Forum wird erleichtert.
      </CContainer>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://www.epicgames.com/site/de/home' target='_blank' variant='colored'>https://www.epicgames.com/site/de/home <ExternalLinkIcon /></Link>
        </ListItem>
        <ListItem>
          <Meta>Plattform</Meta>
          Web
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          NodeJS, NextJS, TypeScript, ChakraUI
        </ListItem>
      </List>
    </SlideFade>
    <SlideFade in={true} delay={1.2}>
      <ProductImage src='/assets/images/products/epic.jpg' alt='epic' />
      <ProductImage src='/assets/images/products/epic/shop.jpg' alt='EpicGames Shop' />
      <ProductImage src='/assets/images/products/epic/fn.jpg' alt='Fortnite' />
    </SlideFade>
  </PageLayout>
)

export default Product