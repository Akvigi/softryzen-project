import React from 'react'
import { Head } from 'components/common/styled'
import { Gallery, Img, Item, OurWork, TextCont, TopText } from './styled'
import data from './data'

const index = ({refTo, setModal}) => {
  return (
      <OurWork ref={refTo}>
        <TextCont>
            <TopText>This is what we do</TopText>
            <Head>Business Cases</Head>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>  
        </TextCont>  
        <Gallery>
        {data.map(({ jsrc, jsrcx2, wsrc, wsrcx2, job, alt}, index) => <Item>
          <picture onClick={() => setModal({ jsrc, jsrcx2, wsrc, wsrcx2, alt, index})}>
            <source srcSet={`${jsrc} 1x, ${jsrcx2} 2x`} type='image/jpg' />
            <source srcSet={`${wsrc} 1x, ${wsrcx2} 2x`} type='image/webp' />
            <Img src={jsrc} alt={job} />
          </picture>
        </Item>)}    
        </Gallery>
    </OurWork>
  )
}

export default index