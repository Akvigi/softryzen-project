import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AltCont, Close, Icon, Img, LeftCont, ModalWindow, Next, Overlay, PlacehCont, Placeholder, Prev, RightCont } from "./styled";

import ic from '../../images/icons.svg'
import placeholder from '../../images/gallery/loading.gif'
import close from '../../images/gallery/close.png'
import data from "components/Ourwork/data";

const modal = document.querySelector('#portal')

const Modal = ({ jsrc, jsrcx2, wsrc, wsrcx2, alt, unshowModal, indexData, getPrevios, getNext }) => {
    const [loading, setLoading] = useState(true)
    const esc = useCallback(
      (e) => {
          if (e.code === `Escape`) {
              unshowModal()
          }
      },
      [unshowModal],
    )
    const onPrev = () => {
        getPrevios()
        setLoading(true)
    }

    const onNext = () => {
        getNext()
        setLoading(true)
    }

    useEffect(() => {
        window.addEventListener("keydown", esc)
    
        return () => {
            window.removeEventListener("keydown", esc)
      }
    }, [esc])
    
    
    const onBackClick = e => {
        if (e.currentTarget === e.target) {
            unshowModal()
        }
    }

    return createPortal(
        <Overlay onClick = {onBackClick}>
            <ModalWindow>
                {indexData < data.length - 1 && <LeftCont>
                    <Prev onClick={onNext}>
                        <Icon>
                            <use href={ic + "#left"} />
                        </Icon>
                    </Prev>
                </LeftCont>}
                <picture>
                    <source srcSet={`${jsrc}`} type='image/jpg' media="(max-width: 640px)"/>
                    <source srcSet={`${jsrcx2}`} type='image/jpg' />
                    <source srcSet={`${wsrc}`} type='image/webp' media="(max-width: 640px)"/>
                    <source srcSet={`${wsrcx2}`} type='image/webp' />
                    <Img
                        src={jsrc}
                        alt={alt}
                        style={loading ? { opacity: 0, border: 'none', position: "absolute" } : { opacity: 1 }}
                        onLoad={() => setLoading(false)} />
                </picture>
                {!loading && <AltCont><p>{alt}</p><p>Page: {indexData + 1} of 6</p></AltCont>}
                {indexData > 0 && <RightCont>
                    <Next onClick={onPrev}>
                        <Icon>
                            <use href={ic + "#right"} />
                        </Icon>
                    </Next>
                </RightCont>}
                {!loading && <Close onClick={unshowModal}>
                    <img src={close} alt="close"/>
                </Close>}
            </ModalWindow>
            {loading && <PlacehCont><Placeholder src={placeholder} alt="Загрузка..." /></PlacehCont>}
        </Overlay>, modal   
    );
}

export default Modal