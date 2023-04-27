import React from 'react'
import { Btn, Contact, Form, Head, Img, Input } from './styled'
import img from '../../images/home/contact.jpg'

const index = () => {
  return (
    <Contact>
      <Img src={img} />
      <Form>
        <Head>Request Callback</Head>
        <Input placeholder='Enter your name'/>
        <Input placeholder='Enter email*'/>
        <Btn type='submit'>Send</Btn>
      </Form>  
    </Contact>
  )
}

export default index