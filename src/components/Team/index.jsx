import React from 'react'
import { Img, Item, Job, Link, Name, Overlay, Team, TeamGallery, TextCont, TopSecText, Wrapp } from './styled'
import { Head } from 'components/common/styled'

import data from './data'

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const index = () => {
  return (
    <Team>
      <TextCont>
        <TopSecText>Who we are</TopSecText>
        <Head>Our Professional Team</Head>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
      </TextCont>
      <TeamGallery>
        {data.map(({ jsrc, jsrcx2, wsrc, wsrcx2, name, job, id}) => (
          <Item key={name}>
            <Wrapp>
              <picture>
                {/* <source srcSet={wsrc} type='image/webp' /> */}
                <source srcSet={`${jsrc} 1x, ${jsrcx2} 2x`} type='image/jpg' />
                <source srcSet={`${wsrc} 1x, ${wsrcx2} 2x`} type='image/webp' />
                <Img src={jsrc} alt={job} />
              </picture>
              <Overlay>
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
                    <LinkedInIcon
                        sx={{
                            width: '35px',
                            height: '35px',
                        }}
                    />
                </Link>
              </Overlay>
            </Wrapp>
            <Name>{name}</Name>
            <Job>{job}</Job>
            
          </Item>))}      
      </TeamGallery>
    </Team>
  )
}

export default index