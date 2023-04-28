import React from 'react'
import { Btn, Container, Contact, Form, Head, Img, Input } from './styled'
import img from '../../images/home/contact.jpg'

const index = () => {
  return (
    <Contact>
      <Container>
        <Img src={img} />
        <Form>
          <Head>Request Callback</Head>
          <Input placeholder='Enter your name'/>
          <Input placeholder='Enter email*'/>
          <Btn type='submit'>Send</Btn>
        </Form>  
      </Container>
    </Contact>
  )
}

export default index