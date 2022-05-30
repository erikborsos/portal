import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { navLinks } from '../../../lib/utils/data'
import Logo from './logo'
import ThemeButton from './theme-button/theme-button'

const LinkItem = ({ href, path, children, ...props }) => {
  const active = path === href
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        variant={active ? 'active' : ''}
        {...props}
        {...props}
        borderRadius={8}
        {...props}>
        {children}
      </Link>
    </NextLink>
  )
}

const Header = props => {
  const { path } = props
  return (
    <Center
      as='nav'
      position='fixed'
      top='0'
      w='100%'
      alignContent='center'
      zIndex='tooltip'
      bg='navbar'
      css={{ backdropFilter: 'blur(10px)' }}>
      <HStack
        p={2}
        justify='space-between'
        align='center'
        maxW='container.md'
        w='100%'>
        <HStack p={2} zIndex={99} align='center'>
          <Logo />
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems='center'
            flexGrow={1}
            mt={{ base: 4, md: 0 }}>
            {navLinks.map(({ name, url }) => {
              if (url !== '/') {
                return (
                  <LinkItem key={url} href={url} path={path}>
                    {name}
                  </LinkItem>
                )
              }
            })}
          </Stack>
        </HStack>
        <HStack p={2} zIndex={99} align='center'>
          <ThemeButton aria-label='change to darkmode' />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              />
              <MenuList zIndex='dropdown'>
                {navLinks.map(({ name, url }) => {
                  return (
                    <NextLink key={url} href={url} passHref>
                      <MenuItem as={Link}>{name}</MenuItem>
                    </NextLink>
                  )
                })}
              </MenuList>
            </Menu>
          </Box>
        </HStack>
      </HStack>
    </Center>
  )
}

export default Header
