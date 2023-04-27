import React from 'react'
// import HeaderLink from './HeaderLink'
import Logo from '../../images/fa-solid_book-open.svg'
import { Link, LogoCont, GrText, LogoImg, Header } from './styled'

const HeaderSect = () => {
  return (
    <Header>
      <div>
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
      </div>
    </Header>
  )
}

export default HeaderSect