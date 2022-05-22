import { Container, ContainerProps } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'
import { WEBSITE_NAME } from '../lib/utils/data'

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: -80,
    transition: { duration: 0.4, type: 'easeInOut' }
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, type: 'easeInOut' }
  },
  exit: {
    opacity: 0,
    x: -0,
    y: 80,
    transition: { duration: 0.4, type: 'easeInOut' }
  }
}

type PageProps = {
  title: string
  description?: string
  children: ReactNode
  centerContent?: boolean
}

const MotionContainer = motion<ContainerProps>(Container)

const PageLayout = ({ title, description, children, centerContent }: PageProps) => {
  return (
    <>
      <NextSeo title={title + ' | ' + WEBSITE_NAME} description={description} />
      <MotionContainer
        display='flex'
        maxW='container.lg'
        px={{ base: 4, lg: 8 }}
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        {...(centerContent ? { centerContent } : {pt: 24})}
      >
        {children}
      </MotionContainer>
    </>
  )
}

export default PageLayout
