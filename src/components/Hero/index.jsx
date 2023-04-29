import React from 'react'
import { Btn, Container, Head, HeroCont, Icon, SecText } from './styled'
import ic from '../../images/icons.svg'

const index = ({refTo}) => {
  return (
    <HeroCont ref={refTo}>
      <Container>
        <Head>The Sky Is The Limit</Head>
        <SecText>We provide world class financial assistance</SecText>
        <Btn>
          <Icon>
            <use href={ic + `#angle`}/>
          </Icon>
          Read More
        </Btn>
      </Container>
    </HeroCont>
  )
}

export default index