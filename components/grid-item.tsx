import { Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export const GridItem = ({ href, title, thumbnail, ...props }) => (
  <Box w='100%' textAlign='center'>
    <LinkBox cursor='pointer'>
      <Image
        src={thumbnail}
        alt={title}
        borderRadius={12}
        placeholder='blur'
        loading='lazy'
      />
      <LinkOverlay href={href} download>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{props.children}</Text>
    </LinkBox>
  </Box>
)

export const ProductGridItem = ({ id, title, thumbnail, ...props }) => (
  <Box w='100%' textAlign='center'>
    <NextLink href={`/products/${id}`} passHref scroll={false}>
      <LinkBox cursor='pointer'>
        <Image
          src={thumbnail}
          alt={title}
          borderRadius={12}
          placeholder='blur'
          loading='lazy'
        />
        <LinkOverlay href={`/products/${id}`}>
          <Text mt={2} mb={2}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{props.children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)
