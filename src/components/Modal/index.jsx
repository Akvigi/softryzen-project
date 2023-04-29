import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalWindow, Overlay } from "./styled";

const modal = document.querySelector('#portal')

const Modal = ({ src, alt, unshowModal }) => {
    console.log(src)
    const esc = useCallback(
      (e) => {
          if (e.code === `Escape`) {
              unshowModal()
          }
      },
      [unshowModal],
    )

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
                <button>
                    
                </button>
                    <img src={src} alt={alt} />
                <button>

                </button>
            </ModalWindow>
        </Overlay>, modal   
    );
}

export default Modal