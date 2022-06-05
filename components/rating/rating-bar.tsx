import {
  Container,
  ContainerProps,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import theme from '../../lib/theme'

const MotionContainer = motion<ContainerProps>(Container)

const SmallHeadingContainer = motion<ContainerProps>(Text)

const RatingBar = (props: { number: number; onClick: Function }) => {
  const bgColor = theme.colors.solid2[useColorModeValue('light', 'dark')]
  const color = useColorModeValue('black', 'white')

  const selectedBgColor = theme.colors.brand[useColorModeValue(400, 200)]
  const selectedColor = useColorModeValue('white', 'black')

  return (
    <MotionContainer
      display='flex'
      gap='0 25px'
      justifyContent='center'
      alignItems='center'>
      {[1, 2, 3, 4, 5].map((elem, index) => (
        <SmallHeadingContainer
          width='48px'
          height='48px'
          borderRadius='50%'
          opacity={1}
          display='flex'
          justifyContent='center'
          alignItems='center'
          cursor='pointer'
          fontSize={31}
          fontWeight={600}
          onClick={() => props.onClick(elem)}
          key={`circle-${index}`}
          custom={index}
          initial='initial'
          whileHover='hover'
          whileTap='tap'
          animate={props.number === elem ? 'selected' : 'show'}
          variants={{
            initial: {
              scale: 1,
              backgroundColor: bgColor,
              color: color
            },
            show: {
              scale: 1,
              backgroundColor: bgColor,
              color: color
            },
            hover: {
              scale: 1.05,
              transition: { duration: 0.002 }
            },
            tap: {
              scale: 0.95,
              transition: { duration: 0.1 },
              backgroundColor: selectedBgColor,
              color: selectedColor
            },
            selected: {
              scale: 1,
              transition: { duration: 0.1 },
              backgroundColor: selectedBgColor,
              color: selectedColor
            }
          }}>
          {elem}
        </SmallHeadingContainer>
      ))}
    </MotionContainer>
  )
}

export default RatingBar
