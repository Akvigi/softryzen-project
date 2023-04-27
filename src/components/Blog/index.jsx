import React from 'react'
import { Blog } from './styled'
import { Btn, Head, SecTextBot, SecTextTop } from 'components/common/styled'

const index = () => {
    return (
        <Blog>
            <SecTextTop>April 16 2020</SecTextTop>
            <Head>Blog Post One</Head>
            <SecTextBot>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</SecTextBot>
            <Btn>Read Our Blog</Btn>
        </Blog>
  )
}

export default index