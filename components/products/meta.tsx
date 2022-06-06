import { Badge } from '@chakra-ui/react'

const Meta = props => (
  <Badge colorScheme='brand' mr={2}>
    {props.children}
  </Badge>
)

export default Meta
