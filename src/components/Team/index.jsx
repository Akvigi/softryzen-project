import React from 'react'
import { Img, Item, Job, Name, Team, TeamGallery, TextCont, TopSecText } from './styled'
import { Head } from 'components/common/styled'
import data from './data'

const index = () => {
  return (
    <Team>
      <TextCont>
        <TopSecText>Who we are</TopSecText>
        <Head>Our Professional Team</Head>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
      </TextCont>
      <TeamGallery>
        {data.map(({ src, name, job }) => (<Item  key={name}><Img src={src} alt={job} /><Name>{name}</Name><Job>{job}</Job></Item>))}      
      </TeamGallery>
    </Team>
  )
}

export default index