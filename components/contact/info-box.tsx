import { HStack, useColorModeValue } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Textfit } from 'react-textfit'

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
      <Textfit mode='single'>{text}</Textfit>
    </HStack>
  )
}

export default InfoBox
