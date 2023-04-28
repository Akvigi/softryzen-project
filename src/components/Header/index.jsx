import React, { useCallback, useEffect, useState } from 'react'
// import HeaderLink from './HeaderLink'
import Logo from '../../images/fa-solid_book-open.svg'
import { Link, LogoCont, GrText, LogoImg, Header, Container } from './styled'
import { throttle } from 'lodash';
const HeaderSect = () => {
  const [back, setBack] = useState(window.scrollY > 70 ? true : false)

  const onScroll = useCallback(
    () => {
      const userWidth = window.innerWidth;
      const minimumPxToScroll = userWidth < 767 ? 120 : 70;
      if (window.scrollY > minimumPxToScroll) {
        setBack(true)
      } else if (window.scrollY < minimumPxToScroll) {
        setBack(false)
      }
    },
    [],
  );
  
  useEffect(() => {
    window.addEventListener('scroll', throttle(onScroll, 500));
  }, [onScroll])
  

  return (
    <Header style={back ? {background: "black", opacity: 0.8} : {background: "transparent"}}>
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