import { Heading, SimpleGrid, SlideFade } from '@chakra-ui/react'
import GridItem from 'components/GridItem'
import React from 'react'
import PageLayout from '../components/page-layout'
import { downloads } from '../lib/utils/data'

const DownloadsPage = () => {
  return (
    <PageLayout title='Downloads'>
      <Heading as='h1' variant='section-title'>
        Downloads
      </Heading>
      <SlideFade in={true} delay={0.6}>
        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          {downloads.map(({ title, href, thumbnail }) => {
            return (
              <GridItem
                key={title}
                title={title}
                href={href}
                thumbnail={thumbnail}
              />
            )
          })}
        </SimpleGrid>
      </SlideFade>
    </PageLayout>
  )
}

export default DownloadsPage
