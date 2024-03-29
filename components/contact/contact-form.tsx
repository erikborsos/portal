import { AtSignIcon } from '@chakra-ui/icons'
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import { GoPerson } from '@react-icons/all-files/go/GoPerson'
import { Formik } from 'formik'
import React from 'react'
import CButton from '../c-button'

const ContactForm = () => {
  let toast = useToast()
  const light = useColorModeValue(true, false)

  return (
    <Box w='full'>
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
          const res = await sendContactMessage({ name, email, message })
          if (res.status === 500) {
            const json: string = await res.json().then(res => res.message)
            if (json.includes('Unique constraint')) {
              toast({
                position: 'top-right',
                title: 'Nachricht wurde bereits versendet',
                description:
                  'Bitte versuchen Sie es mit einer anderen Nachricht!',
                status: 'warning',
                duration: 3000,
                isClosable: true
              })
            } else {
              toast({
                position: 'top-right',
                title: 'Fehler!',
                description:
                  'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
                status: 'error',
                duration: 3000,
                isClosable: true
              })
            }
          } else {
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
          }
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
                  {...(light ? { borderColor: 'black' } : {})}
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
                  {...(light ? { borderColor: 'black' } : {})}
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
                {...(light ? { borderColor: 'black' } : {})}
              />
              {errors.message && touched.message && (
                <FormErrorMessage>{errors.message}</FormErrorMessage>
              )}
            </FormControl>
            <CButton isLoading={isSubmitting} type='submit' mt={4}>
              Absenden
            </CButton>
          </form>
        )}
      </Formik>
    </Box>
  )
}

async function sendContactMessage(values): Promise<Response> {
  return await fetch('./api/sendContactMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
}

export default ContactForm
