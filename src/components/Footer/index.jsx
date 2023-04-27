import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Footer, Link, LinkCont } from './styled';

const index = () => {
  return (
    <Footer>
        <LinkCont>
            <Link href="https://uk-ua.facebook.com"><FacebookSharpIcon
                sx={{
                    width: '35px',
                    height: '35px',
                }}/></Link>
            <Link href="https://twitter.com/home"><TwitterIcon
                sx={{
                    width: '35px',
                    height: '35px',
                }}
            /></Link>      
            <Link href="https://www.youtube.com"><YouTubeIcon
                sx={{
                    width: '40px',
                    height: '35px',
                }}
            /></Link>      
            <Link href="https://www.linkedin.com">
                <svg width="31" height="35" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.02344 31V10.5605H0.666016V31H7.02344ZM3.81055 7.82617C5.86133 7.82617 7.50195 6.11719 7.50195 4.06641C7.50195 2.08398 5.86133 0.443359 3.81055 0.443359C1.82812 0.443359 0.1875 2.08398 0.1875 4.06641C0.1875 6.11719 1.82812 7.82617 3.81055 7.82617ZM30.7441 31H30.8125V19.7891C30.8125 14.3203 29.582 10.082 23.1562 10.082C20.0801 10.082 18.0293 11.791 17.1406 13.3633H17.0723V10.5605H10.9883V31H17.3457V20.8828C17.3457 18.2168 17.8242 15.6875 21.1055 15.6875C24.3867 15.6875 24.4551 18.6953 24.4551 21.0879V31H30.7441Z" fill="white"/>
                </svg>
            </Link>
        </LinkCont>  
        <p>Copyright © 2021 - FinanceLedger</p>        
    </Footer>
  )
}

export default index