import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Map = () => {
  const light = useColorModeValue(true, false)
  return (
    <Box w='full'>
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
          width='100%'
          height='360vh'
          id='gmap_canvas'
          src='https://maps.google.com/maps?q=HTL%20Wels&t=&z=15&ie=UTF8&iwloc=&output=embed'
          frameBorder='0'
          scrolling='no'/>
      </Container>
    </Box>
  )
}

export default Map