import React from 'react'
import { Head } from 'components/common/styled'
import { Gallery, Img, Item, OurWork, TextCont, TopText } from './styled'
import data from './data'

const index = () => {
  return (
      <OurWork>
        <TextCont>
            <TopText>This is what we do</TopText>
            <Head>Business Cases</Head>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>  
        </TextCont>  
        <Gallery>
            {data.map(({src, id}) => <Item><Img src={src} key={id} /></Item>)}    
        </Gallery>
    </OurWork>
  )
}

export default index