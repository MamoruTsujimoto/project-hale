import styled from '@emotion/styled'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import type { NextPage } from 'next'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from 'Layout/Layout'
import NotionService from 'services/notion-service'
import config from 'utils/config'
import styles from 'utils/styles'

export const getStaticProps: GetStaticProps = async () => {
  const notionService = new NotionService()
  const posts = await notionService.getPublishedBlogPosts()

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}

const Home: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Hale4Food - 心を晴れやかに</title>
        <meta name='description' content={config.info.siteDescription} />
        <meta property='og:url' content={config.info.siteURL} />
        <meta property='og:image' content={config.info.ogp.image} />
        <meta property='og:title' content={config.info.siteName} />
        <meta property='og:description' content={config.info.siteDescription} />
        <meta name='twitter:image' content={config.info.ogp.image} />
      </Head>

      <Layout>
        <Root>
          <h1>
            <Image
              src="/img/hale-logo.png"
              alt="Picture of the author"
              width={200}
              height={388}
            />
          </h1>
          <AboutWrap>
            <p>食に関するお手伝いをさせて頂き、心を晴れやかに</p>
            <p>About food. About life.</p>
            <p>お弁当、オードブル、ケータリング</p>
            <p>ヘルシーなお菓子の販売や酵素ジュース作り等</p>
            <p>食に関する事で、私が出来る事なら、何でもさせて頂きます！</p>
          </AboutWrap>
          <Socials>
            <li>
              <a href={config.external.instagram.link} title={config.external.instagram.label} target="_blank">
                <FontAwesomeIcon icon={config.external.instagram.icon} />
              </a>
            </li>
          </Socials>
        </Root>
      </Layout>
    </>
  )
}

const Root = styled.section`
  h1 {
    margin: 50px 0;
    text-align: center;
  }

  p {
    width: 500px;
    margin: 0 auto;

    @media (max-width: ${styles.sizes.breakpoint.small}) {
      width: 100%;
      padding: 0 15px;
      font-size: ${styles.mixins.fontSize(13,28)}
    }
  }
`

const AboutWrap = styled.div`
  text-align: center;
`

const Socials = styled.ul`
  margin: 20px 0;

  li {
    text-align: center;
  }

  a {
    font-size: ${styles.mixins.fontSize(28,28)}
  }
`

export default Home
