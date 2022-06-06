import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react'
import { AiFillYoutube } from '@react-icons/all-files/ai/AiFillYoutube'
import { AiOutlineInstagram } from '@react-icons/all-files/ai/AiOutlineInstagram'
import { IoLogoTiktok } from '@react-icons/all-files/io5/IoLogoTiktok'

export const WEBSITE_NAME = 'Portal'

export const navLinks = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Produkte',
    url: '/products'
  },
  {
    name: 'Sitemap',
    url: '/sitemap'
  },
  {
    name: 'Downloads',
    url: '/downloads'
  },
  {
    name: 'Kontakt',
    url: '/contact'
  },
  {
    name: 'Bewerten',
    url: '/rate'
  }
]

export const contactIcons = [
  {
    icon: <PhoneIcon />,
    text: '+49 (0)30 / 605 - 0'
  },
  {
    icon: <EmailIcon />,
    text: (
      <Link href='mailto:portal@portal.dev' target='_blank'>
        portal@portal.dev
      </Link>
    )
  },
  {
    icon: <AiFillYoutube />,
    text: (
      <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>
        YouTube Kanal - Portal
      </Link>
    )
  },
  {
    icon: <AiOutlineInstagram />,
    text: (
      <Link
        href='https://www.instagram.com/htlwels_offiziell/?hl=de'
        target='_blank'>
        @portal
      </Link>
    )
  },
  {
    icon: <IoLogoTiktok />,
    text: (
      <Link href='https://tiktok.com/portal' target='_blank'>
        @portal
      </Link>
    )
  }
]

export const downloads = [
  {
    title: '50 Jahre HTL Interview',
    href: 'https://cloud.rajot.me/s/JTZ6DAcwFamAy4x/download',
    thumbnail: '/assets/images/downloads/interview.png'
  },
  {
    title: 'SSH Protokoll',
    href: '/assets/documents/handout.pdf',
    thumbnail: '/assets/images/downloads/ssh.png'
  },
  {
    title: 'Lorem Ipsum 1',
    href: '/assets/documents/lipsum1.txt',
    thumbnail: '/assets/images/downloads/lipsum1.jpeg'
  },
  {
    title: 'Lorem Ipsum 2',
    href: '/assets/documents/lipsum2.txt',
    thumbnail: '/assets/images/downloads/lipsum2.jpeg'
  }
]
