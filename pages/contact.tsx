import {
  Flex,
  Heading,
  HStack,
  SlideFade,
  Stack,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import PageLayout from '../components/page-layout'
import { contactIcons } from '../lib/utils/data'
import ContactForm from '../components/contactForm'
import InfoBox from '../components/infoBox'
import Map from '../components/map'

const ContactPage = () => {
  return (
    <PageLayout title='Contact' center>
      <VStack spacing={2} justify='center' h='100vh'>
        <Heading as='h1' textAlign='left' w='100%' mt={{base: '8vh', md: 0}}>
          Kontakt
        </Heading>
        <Flex
          direction='column'
          gridGap={5}
          overflow='hidden'
        >
          <SlideFade in={true} delay={0.6}>
            <Stack
              overflow='auto'
              direction={{ base: 'column', md: 'row' }}
              display={{ base: 'flex', md: 'flex' }}
              spacing={4}
              bg={useColorModeValue('solid.light', 'solid.dark')}
              padding={4}
              borderRadius={16}>
              <ContactForm />
              <Map />
            </Stack>
          </SlideFade>
          <SlideFade in={true} delay={1.2}>
            <HStack
              overflow='auto'
              width={{ base: '90vw', md:'auto'}}
            >
              {contactIcons.map(({ icon, text }, index) => (
                <InfoBox key={index} icon={icon} text={[text]}/>
              ))}
            </HStack>
          </SlideFade>
        </Flex>
      </VStack>
    </PageLayout>
  )
}

export default ContactPage
