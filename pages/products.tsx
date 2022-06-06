import { Heading, SimpleGrid, SlideFade } from '@chakra-ui/react'
import React from 'react'
import PageLayout from '../components/page-layout'
import { ProductGridItem } from '../components/grid-item'
import { products } from '../lib/utils/data'

const ProductsPage = () => {
  return (
    <PageLayout title='Produkte'>
      <Heading as='h1' variant='section-title'>
        Produkte
      </Heading>
      <SlideFade in={true} delay={0.6}>
        <SimpleGrid columns={[1, 2]} spacing={8}>
          {products.map(({ id, title, thumbnail, text }) => {
            return (
              <ProductGridItem
                key={id}
                id={id}
                title={title}
                thumbnail={thumbnail}
              >
                {text}
              </ProductGridItem>
            )
          })}
        </SimpleGrid>
      </SlideFade>
    </PageLayout>
  )
}

export default ProductsPage
