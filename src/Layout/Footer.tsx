import styled from '@emotion/styled'
import type { NextPage } from 'next'

import config from 'utils/config'
import styles from 'utils/styles'

const Footer: NextPage = () => {
  return (
    <Root>
      <Copyright>{config.info.copyright}</Copyright>
    </Root>
  )
}

const Root = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-top: 1px solid #121b22;
  z-index: 3;
  background: ${styles.colors.primary};

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    margin: 0;
    justify-content: center;
  }
`

const Copyright = styled.p`
  margin: 0 15px;
  color: #121b22;
  letter-spacing: 0.15em;
  ${styles.mixins.fontSize(12, 12)}
`

export default Footer
