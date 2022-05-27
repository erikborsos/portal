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
