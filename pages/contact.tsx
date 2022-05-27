import { AtSignIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  SlideFade,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack
} from '@chakra-ui/react'
import { GoPerson } from '@react-icons/all-files/go/GoPerson'
import { Formik } from 'formik'
import React, { ReactNode } from 'react'
import PageLayout from '../components/page-layout'
import { contactIcons } from '../lib/utils/data'

const ContactForm = () => {
  let toast = useToast()

  return (
    <Box w='23vw'>
      <Heading as='h2' variant='section-title' mb={8}>
        Schreib uns!
      </Heading>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: ''
        }}
        onSubmit={async (
          { name, email, message },
          { setSubmitting, resetForm }
        ) => {
          toast({
            position: 'top-right',
            title: 'Nachricht erfolgreich abgesendet!',
            description:
              'Wir melden uns in Kürze. Überprüfen Sie ihren Posteingang.',
            status: 'success',
            duration: 3000,
            isClosable: true
          })
          resetForm()
          setSubmitting(false)
        }}
        validate={values => {
          let errors: { [key: string]: any } = {}
          if (!values.name) {
            errors.name = 'Bitte geben Sie Ihren Namen ein.'
          }
          if (!values.email) {
            errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
          }
          if (!values.message) {
            errors.message = 'Bitte geben Sie eine Nachricht ein.'
          } else if (values.message.split('').length < 10) {
            errors.message =
              'Bitte geben Sie eine Nachricht mit mindestens 10 Zeichen ein.'
          }
          return errors
        }}>
        {({
          handleSubmit,
          errors,
          handleChange,
          handleBlur,
          values,
          touched,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <FormControl
              isRequired={true}
              isInvalid={errors.name && touched.name}>
              <FormLabel htmlFor='name' mb={0} mt={4}>
                Name
              </FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <GoPerson />
                </InputLeftElement>
                <Input
                  name='name'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                />
              </InputGroup>
              {errors.name && touched.name && (
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isRequired={true}
              isInvalid={errors.email && touched.email}>
              <FormLabel htmlFor='email' mb={0} mt={4}>
                E-Mail
              </FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <AtSignIcon />
                </InputLeftElement>
                <Input
                  name='email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
              </InputGroup>
              {errors.email && touched.email && (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isRequired={true}
              isInvalid={errors.message && touched.message}>
              <FormLabel htmlFor='message ' mb={0} mt={4}>
                Nachricht
              </FormLabel>
              <Textarea
                resize='none'
                h='13vh'
                name='message'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.message}
              />
              {errors.message && touched.message && (
                <FormErrorMessage>{errors.message}</FormErrorMessage>
              )}
            </FormControl>
            <Button
              isLoading={isSubmitting}
              type='submit'
              mt={4}
              colorScheme='brand'>
              Absenden
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  )
}

const Map = () => {
  const light = useColorModeValue(true, false)
  return (
    <Box>
      <Heading as='h2' variant='section-title'>
        Komm vorbei!
      </Heading>

      <Container
        {...(light
          ? {
              filter: 'grayscale(60%)'
            }
          : {
              filter: 'grayscale(90%) invert(98%)'
            })}>
        <iframe
          width='450vw'
          height='378vh'
          id='gmap_canvas'
          src='https://maps.google.com/maps?q=HTL%20Wels&t=&z=15&ie=UTF8&iwloc=&output=embed'
          frameBorder='0'
          scrolling='no'/>
      </Container>
    </Box>
  )
}

const InfoBox = ({
  icon,
  text
}: {
  icon: ReactNode
  text: ReactNode | string
}) => {
  return (
    <HStack
      bg={useColorModeValue('solid.light', 'solid.dark')}
      padding={4}
      borderRadius={16}>
      {icon}
      {React.isValidElement(text) ? text : <Text>{text}</Text>}
    </HStack>
  )
}

const ContactPage = () => {
  return (
    <PageLayout title='Contact' center>
      <VStack spacing={2} justify='center' h='100vh'>
        <Heading as='h1' textAlign='left' w='100%'>
          Kontakt
        </Heading>
        <SlideFade in={true} delay={0.6}>
          <HStack
            spacing={4}
            bg={useColorModeValue('solid.light', 'solid.dark')}
            padding={4}
            borderRadius={16}>
            <ContactForm />
            <Map />
          </HStack>
        </SlideFade>
        <SlideFade in={true} delay={1.2}>
          <HStack>
            {contactIcons.map(({ icon, text }, index) => (
              <InfoBox key={index} icon={icon} text={[text]} />
            ))}
          </HStack>
        </SlideFade>
      </VStack>
    </PageLayout>
  )
}

export default ContactPage
