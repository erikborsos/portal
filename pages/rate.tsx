import { VStack } from '@chakra-ui/react'
import PageLayout from 'components/page-layout'
import React from 'react'
import ResultRatingBox from '../components/rating/result-rating-box'
import SelectRatingBox from '../components/rating/select-rating-box'

const RatingPage = () => {
  const [rating, setRating] = React.useState(0)
  const [comment, setComment] = React.useState('')

  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    if (rating) setShow(true)
  }, [rating])

  return (
    <PageLayout title='Contact' center>
      <VStack spacing={2} justify='center' h='100vh'>
        {!show && (
          <SelectRatingBox setRating={setRating} setComment={setComment} />
        )}
        {show && <ResultRatingBox rating={rating} comment={comment} />}
      </VStack>
    </PageLayout>
  )
}

export default RatingPage
