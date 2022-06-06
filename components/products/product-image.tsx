import { Image } from '@chakra-ui/react'

const ProductImage = ({ src, alt, ...props }) => (
  <Image borderRadius='lg' w='full' mb={4} src={src} alt={alt} {...props} />
)

export default ProductImage
