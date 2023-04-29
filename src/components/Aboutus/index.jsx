import React from 'react'
import { AboutUs, Img, TextCont, Container, BtnMore} from './styled'
import { Head, SecTextBot, SecTextTop} from '../common/styled'
import jsrc from '../../images/home/people.jpg'
import jsrcx2 from '../../images/home/people@2x.jpg'
import wsrc from '../../images/home/people.webp'
import wsrcx2 from '../../images/home/people@2x.webp'

const index = ({refTo}) => {
  return (
    <AboutUs ref={refTo}>
      <Container>
        <picture>
            <source srcSet={`${jsrc} 1x, ${jsrcx2} 2x`} type='image/jpg' />
            <source srcSet={`${wsrc} 1x, ${wsrcx2} 2x`} type='image/webp' />
            <Img src={jsrc} alt='Our team' />
          </picture>
        <TextCont>
            <SecTextTop>What you are looking for</SecTextTop>
            <Head>We provide bespoke solutions</Head>
            <SecTextBot>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</SecTextBot>
            <BtnMore>Read More</BtnMore>
        </TextCont>
      </Container>
    </AboutUs>
  )
}

export default index