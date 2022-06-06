import {
  FormControl,
  FormLabel,
  Heading,
  Text,
  Textarea,
  useToast
} from '@chakra-ui/react'
import CContainer, { yControllerVariants } from 'components/c-container'
import React from 'react'
import CButton from '../c-button'
import RatingBar from './rating-bar'

const SelectRatingBox = (props: {
  setRating: Function
  setComment: Function
}) => {
  const [number, setNumber] = React.useState(0)
  const [comment, setComment] = React.useState('')
  let toast = useToast()

  return (
    <CContainer
      variants={yControllerVariants}
      initial='initial'
      animate='animate'
      exit='exit'>
      <Heading as='h2' variant='section-title'>
        Wie gefallen wir Ihnen?
      </Heading>
      <Text>
        Bitte lassen Sie Ihre Bewertung für diese Seite. Wir freuen uns über
        jedes Feedback, damit wir unser Angebot und Service verbessern können.
      </Text>
      <RatingBar number={number} onClick={setNumber} />
      <FormControl>
        <FormLabel htmlFor='message ' mb={0} mt={4}>
          Kommentar<small> - Optional</small>
        </FormLabel>
        <Textarea
          resize='none'
          h='13vh'
          name='message'
          onChange={e => setComment(e.target.value)}
        />
      </FormControl>
      <CButton
        onClick={async () => {
          props.setRating(number)
          props.setComment(comment)
          const res = await sendRating({ rating: number, message: comment })
          if (res.status === 500) {
            toast({
              position: 'top-right',
              title: 'Fehler!',
              description:
                'Datenbankverbindung konnte nicht hergestellt werden.',
              status: 'error',
              duration: 3000,
              isClosable: true
            })
          } else {
            toast({
              position: 'top-right',
              title: 'Erfolgreich!',
              description: 'Ihre Bewertung wurde erfolgreich übermittelt.',
              status: 'success',
              duration: 3000,
              isClosable: true
            })
          }
        }}>
        Absenden
      </CButton>
    </CContainer>
  )
}

async function sendRating(values): Promise<Response> {
  return await fetch('./api/sendRating', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
}

export default SelectRatingBox
