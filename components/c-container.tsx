import { Container, ContainerProps, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionContainer = motion<ContainerProps>(Container)

const yControllerVariants = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 }
}

const CContainer = props => {
  return (
    <MotionContainer
      maxW='50vw'
      borderRadius={16}
      display='flex'
      flexDirection='column'
      padding='32px'
      gap='32px 0'
      bg={useColorModeValue('solid.light', 'solid.dark')}
      {...props}>
      {props.children}
    </MotionContainer>
  )
}

export default CContainer

export { yControllerVariants }
