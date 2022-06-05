import { Button, ButtonProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionButton = motion<ButtonProps>(Button)

const CButton = props => {
  return (
    <MotionButton
      colorScheme='brand'
      initial='initial'
      whileHover='hover'
      whileTap='tap'
      variants={{
        initial: {
          scale: 1
        },
        hover: {
          scale: 1.05,
          transition: { duration: 0.002 }
        },
        tap: {
          scale: 0.95,
          transition: { duration: 0.1 }
        }
      }}
      {...props}>
      {props.children}
    </MotionButton>
  )
}

export default CButton
