import { Button, Divider, Heading, Text, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import PageLayout from '../components/page-layout'

const NotFoundPage = () => {
  return (
    <PageLayout title='404' description='Page Not Found'>
      <VStack spacing={2} justify='center' h='100vh'>
        <Heading>404 Not found</Heading>
        <Divider />
        <Text>(╥﹏╥)</Text>
        <NextLink href='/' passHref>
          <Button colorScheme='brand' size='md'>
            Zur Startseite
          </Button>
        </NextLink>
      </VStack>
    </PageLayout>
  )
}

export default NotFoundPage
