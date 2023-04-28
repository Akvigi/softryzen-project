import React from 'react'
import { AboutUs, Img, TextCont, Container} from './styled'
import { Head, SecTextBot, SecTextTop, Btn} from '../common/styled'
import img from '../../images/home/people.jpg'

const index = () => {
  return (
    <AboutUs>
      <Container>
        <Img src={img} alt='Our team'/>
        <TextCont>
            <SecTextTop>What you are looking for</SecTextTop>
            <Head>We provide bespoke solutions</Head>
            <SecTextBot>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</SecTextBot>
            <Btn>Read More</Btn>
        </TextCont>
      </Container>
    </AboutUs>
  )
}

export default index