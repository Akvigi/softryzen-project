import React, { useState } from 'react'
import { Btn, Container, Contact, Form, Head, Img, Input, Icon, InpCont } from './styled'
import img from '../../images/home/contact.jpg'
import ic from '../../images/icons.svg'

const ContactForm = () => {
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [error, setError] = useState(false)

  const onEmChange = (text) => {
    setError(false)
    setEmail(text)
  }

  const submitForm = (e, n, em) => {
    e.preventDefault()
    if (em === '' || em === null || em === undefined) {
      setError(true)
      return
    }
    console.log(em)
  }

  return (
    <Contact>
      <Container>
        <Img src={img} />
        <Form onSubmit={(e) => submitForm(e, name, email)}>
          <Head>Request Callback</Head>
          <Input value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder='Enter your name' />
          <InpCont>
            {error && <Icon>
              <use href={ic + "#worning"} />
            </Icon>}
            <Input value={email}
              style={error ? {border: "1px solid red"} : {}}
              onChange={(e) => onEmChange(e.currentTarget.value)}
              placeholder={error ? "This is a required field" : 'Enter email*'} />
          </InpCont>  
          <Btn type='submit'>Send</Btn>
        </Form>  
      </Container>
    </Contact>
  )
}

export default ContactForm