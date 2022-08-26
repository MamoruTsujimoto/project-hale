import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const config = {
  info: {
    siteName: 'Hale4Food',
    author: 'Tsujimoto Junko',
    siteDescription: '食に関するお手伝いをさせて頂き、心を晴れやかに。About food. About life。お弁当、オードブル、ケータリング、ヘルシーなお菓子の販売や酵素ジュース作り等、食に関する事で、私が出来る事なら、何でもさせて頂きます！',
    siteURL: 'https://hale4food.com',
    copyright: '©2022 Hale4Food',
    ogp: {
      type: 'website',
      image: '/ogpImage.png',
    },
    twitter: {
      card: 'summary_large_image',
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
