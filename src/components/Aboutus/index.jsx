import React from 'react'
import { AboutUs, Img, TextCont, Container, BtnMore} from './styled'
import { Head, SecTextBot, SecTextTop} from '../common/styled'
import img from '../../images/home/people.jpg'

const index = ({refTo}) => {
  return (
    <AboutUs ref={refTo}>
      <Container>
        <Img src={img} alt='Our team'/>
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