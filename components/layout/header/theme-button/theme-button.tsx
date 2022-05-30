import {
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import { MoonIcon, SunIcon } from './theme-icons'

const ThemeButton: React.FC<IconButtonProps> = props => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)

  return (
    <IconButton
      fontSize='2xl'
      onClick={() => toggleColorMode()}
      colorScheme={useColorModeValue('purple', 'orange')}
      style={{ borderRadius: 8, boxShadow: 'none' }}
      icon={<SwitchIcon />}
      {...props}
    />
  )
}

export default ThemeButton
