import { Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'

const GridItem = ({ href, title, thumbnail, ...props }) => {
  return (
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
}

export default GridItem
