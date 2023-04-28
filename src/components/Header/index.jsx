import React from 'react'
// import HeaderLink from './HeaderLink'
import Logo from '../../images/fa-solid_book-open.svg'
import { Link, LogoCont, GrText, LogoImg, Header, Container } from './styled'

const HeaderSect = () => {
  return (
    <Header>
      <Container>
        <LogoCont>
          <LogoImg src={Logo} alt='opened book' />    
          <GrText>Finance</GrText> Ledger    
        </LogoCont>
        <div>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Cases</Link>
          <Link>Blog</Link>
          <Link>Contact</Link>
        </div>
      </Container>
    </Header>
  )
}

export default HeaderSect