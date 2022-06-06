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
  center?: boolean
}

const MotionContainer = motion<ContainerProps>(Container)

const PageLayout = ({ title, description, children, center }: PageProps) => {
  return (
    <>
      <NextSeo title={title + ' | ' + WEBSITE_NAME} description={description} />
      <MotionContainer
        {...(center ? { display: 'flex', centerContent: true } : { pt: 24 })}
        maxW='container.md'
        px={{ base: 4, lg: 8 }}
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}>
        {children}
      </MotionContainer>
    </>
  )
}

export default PageLayout
