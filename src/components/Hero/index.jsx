import React from 'react'
import { Btn, Container, Head, HeroCont, Icon, SecText } from './styled'
import ic from '../../images/gallery/next.png'

const index = () => {
  return (
    <HeroCont>
      <Container>
        <Head>The Sky Is The Limit</Head>
        <SecText>We provide world class financial assistance</SecText>
        <Btn><Icon src={ic} />Read More</Btn>
      </Container>
    </HeroCont>
  )
}

export default index