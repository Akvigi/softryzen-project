import React from 'react'
import { SecTextTop, Head } from 'components/common/styled'
import { Gallery, Img, Item, OurWork, TextCont } from './styled'
import data from './data'

const index = () => {
  return (
      <OurWork>
        <TextCont>
            <SecTextTop>This is what we do</SecTextTop>
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