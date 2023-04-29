import React from 'react'

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Footer, Icon, Link, LinkCont } from './styled';
import ic from '../../images/icons.svg'

const index = () => {
  return (
    <Footer>
        <LinkCont>
            <Link href="https://uk-ua.facebook.com">
                <FacebookSharpIcon
                    sx={{
                        width: '35px',
                        height: '35px',
                    }}
                />
            </Link>
            <Link href="https://twitter.com/home">
                <TwitterIcon
                    sx={{
                        width: '35px',
                        height: '35px',
                    }}
                />
            </Link>      
            <Link href="https://www.youtube.com">
                <YouTubeIcon
                    sx={{
                        width: '40px',
                        height: '35px',
                      }}
                />
            </Link>      
            <Link href="https://www.linkedin.com">
                <Icon>
                    <use href={ic + '#linkedin' } />
                </Icon>
            </Link>
        </LinkCont>  
        <p>Copyright © 2021 - FinanceLedger</p>        
    </Footer>
  )
}

export default index