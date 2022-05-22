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
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { navLinks } from '../../../lib/utils/data'
import Logo from './logo'
import ThemeButton from './theme-button'

const LinkItem = ({ href, path, children, ...props }) => {
  const active = path === href
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'brand.200' : undefined}
        color={active ? 'black' : undefined}
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
      bg={useColorModeValue('navbar.light', 'navbar.dark')}
      css={{ backdropFilter: 'blur(10px)' }}>
      <HStack
        p={2}
        zIndex='tooltip'
        justify='space-between'
        align='center'
        maxW='container.md'
        w='100%'>
        <HStack p={2} zIndex='tooltip' align='center'>
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
        <HStack p={2} zIndex='tooltip' align='center'>
          <ThemeButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              />
              <MenuList
                background={useColorModeValue('white.light', 'navbar.dark')}>
                {navLinks.map(({ name, url }) => {
                  return (
                    <>
                      <NextLink href={url} passHref>
                        <MenuItem as={Link}>{name}</MenuItem>
                      </NextLink>
                    </>
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
