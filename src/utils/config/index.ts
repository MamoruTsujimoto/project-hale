import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const config = {
  info: {
    siteName: 'Hale4Food',
    author: 'Tsujimoto Junko',
    siteDescription: '',
    siteURL: 'https://',
    copyright: '© 2022 Hale4Food',
    ogp: {
      type: 'blog',
      image: '/ogpImage.png',
      card: 'summary',
    },
    twitter: {
      card: 'summary',
    },
    icon: {
      apple: '/apple-touch-icon.png',
      fav32: '/favicon-32x32.png',
      fav16: '/favicon-16x16.png',
    },
  },
  setting: {
    transition: {
      timeout: 500,
    },
  },
  external: {
    instagram: {
      link: 'https://www.instagram.com/hale_4food',
      label: 'Instagram: Hale4Food',
      icon: faInstagram,
    },
  },
}
export default config
