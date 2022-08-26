import styled from '@emotion/styled'

import Footer from 'Layout/Footer'
import styles from 'utils/styles'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Root>
      <Main>{children}</Main>
      <Footer />
    </Root>
  )
}

const Root = styled.div`
  display: grid;
  grid:
    'main' 1fr
    'footer' auto
    / 1fr;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: ${styles.colors.background};
  z-index: 1;

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    width: 100%;
  }
`

const OutlineWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 5px;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 2;
`

const Outline = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #121b22;
`

const OutlineBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 5px solid ${styles.colors.primary};
`

const Main = styled.main`
  grid-area: main;
  position: relative;
  background: ${styles.colors.primary};

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    max-width: 100%;
  }
`

export default Layout
