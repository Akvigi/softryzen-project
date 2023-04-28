import React from 'react'
import { Blog, TextContainer, Img, Container } from './styled'
import { Btn, Head, SecTextBot, SecTextTop } from 'components/common/styled'
import img from '../../images/home/blog.jpg'
// import img from '../../images/home/blog@2x.jpg'

const index = () => {
    return (
        <Blog>
            <Container>
                <Img src={img} alt='coffee`s with books'/>
                <TextContainer>
                    <SecTextTop>April 16 2020</SecTextTop>
                    <Head>Blog Post One</Head>
                    <SecTextBot>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</SecTextBot>
                    <Btn>Read Our Blog</Btn>
                </TextContainer>
            </Container>
        </Blog>
  )
}

export default index