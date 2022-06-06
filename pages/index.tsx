import { ArrowRightIcon } from '@chakra-ui/icons'
import {
  GridItem,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  SlideFade,
  Text
} from '@chakra-ui/react'
import CButton from 'components/c-button'
import NextLink from 'next/link'
import CContainer from '../components/c-container'
import PageLayout from '../components/page-layout'

const SmallBox = ({ heading, text, ...props }) => (
  <CContainer gap='15px 0' {...props}>
    <Heading as='h1' size='lg'>
      {heading}
    </Heading>
    <Text mt={0}>{text}</Text>
  </CContainer>
)

const IndexPage = () => {
  return (
    <PageLayout title='Home'>
      <Heading as='h2' variant='section-title'>
        Entwicklung kundenspezifischer Software
      </Heading>
      <CContainer textAlign='center'>
        Vom Produktdesign bis zur laufenden Softwarebereitstellung
      </CContainer>
      <SlideFade in={true} delay={0.6}>
        <HStack mt={4} mb={4}>
          <SmallBox heading='150+' text='Abgeschlossene Projekte' />
          <SmallBox heading='94%' text='Der Kunden empfehlen uns weiter' />
          <SmallBox heading='15+' text='Remote-Softwareentwickler' />
        </HStack>
      </SlideFade>

      <SlideFade in={true} delay={1.2}>
        <Heading as='h2' variant='section-title' mt={8}>
          Unsere Kunden
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={4} mb={4}>
          <GridItem textAlign='center'>
            <Image
              src='/assets/images/products/flycloud.jpg'
              alt='epic'
              borderRadius={16}
              mb={2}
            />
            FlyCloud
          </GridItem>
          <GridItem textAlign='center'>
            <Image
              src='/assets/images/products/lipsum.jpg'
              alt='epic'
              borderRadius={16}
              mb={2}
            />
            Lipsum
          </GridItem>
          <GridItem textAlign='center'>
            <Image
              src='/assets/images/products/epic.jpg'
              alt='epic'
              borderRadius={16}
              mb={2}
            />
            EpicGames
          </GridItem>
        </SimpleGrid>
        <NextLink href='/products' passHref scroll={false}>
          <CButton>
            Unsere Produkte <ArrowRightIcon ml={3} />
          </CButton>
        </NextLink>
      </SlideFade>

      <SlideFade in={true} delay={1.8}>
        <Heading as='h2' variant='section-title' mt={8}>
          Dienstleistungen
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet.
        </Text>
      </SlideFade>

      <SlideFade in={true} delay={2.4}>
        <Heading as='h2' variant='section-title' mt={8}>
          Interesse?
        </Heading>
        <Text mb={4}>
          Haben wir Ihr interesse geweckt? Setzen sie sich doch mit uns in
          Verbindung
        </Text>
        <NextLink href='/contact' passHref scroll={false}>
          <CButton>
            Kontakt <ArrowRightIcon ml={3} />
          </CButton>
        </NextLink>
      </SlideFade>
      <br />
      <br />
    </PageLayout>
  )
}

export default IndexPage
