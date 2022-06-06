import PageLayout from '../../components/page-layout'
import ProductTitle from '../../components/products/product-title'
import { Link, List, ListItem, SlideFade } from '@chakra-ui/react'
import CContainer from '../../components/c-container'
import Meta from 'components/products/meta'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import ProductImage from '../../components/products/product-image'

const Product = () => (
  <PageLayout title='Produkte - FlyCloud Security'>
    <ProductTitle badge='2021'>FlyCloud Security</ProductTitle>
    <SlideFade in={true} delay={0.6}>
      <CContainer>
        Mit FlyCloud können Sie auf Ihre Daten und Ihre Anwendungen sicher und schnell Gerätübergreifend zugreifen.
        Wir haben dafür gesorgt, dass Sie sich keine Sorgen machen müssen, dass nicht-autorisierte Personen Ihre Daten sehen können.
      </CContainer>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='https://www.flycloud.com/' target='_blank' variant='colored'>https://www.flycloud.com/ <ExternalLinkIcon /></Link>
        </ListItem>
        <ListItem>
          <Meta>Plattform</Meta>
          Web, Windows, MacOS, Linux, iOS, Android
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          NodeJS, Electron, React Native, Python, C#
        </ListItem>
      </List>
    </SlideFade>
    <SlideFade in={true} delay={1.2}>
      <ProductImage src='/assets/images/products/flycloud.jpg' alt='flycloud' />
    </SlideFade>
  </PageLayout>
)

export default Product