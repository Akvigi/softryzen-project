import React from 'react'
import { Blog, Container, Img } from './styled'
import { Btn, Head, SecTextBot, SecTextTop } from 'components/common/styled'
import img from '../../images/home/blog.jpg'
const index = () => {
    return (
        <Blog>
            <Img src={img} alt='coffee`s with books'/>
            <Container>
                <SecTextTop>April 16 2020</SecTextTop>
                <Head>Blog Post One</Head>
                <SecTextBot>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</SecTextBot>
                <Btn>Read Our Blog</Btn>
            </Container>
        </Blog>
  )
}

export default index