import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`

export const ModalWindow = styled.div`
    position: relative;
    display: flex;
    max-width: 100%;
    @media screen and (min-width: 768px) {
        border: 5px solid white;
        max-width: calc(100vw - 115px);
        max-height: calc(100vh - 78px);
    }
    @media screen and (min-width: 1360px) {
        border: 5px solid white;
        max-width: 900px;
        max-height: 100%;
    }
`

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
`

const Cont = styled.div`
    position: absolute;
    width: 30%;
    height: 100%;
    display: flex;
    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    align-items: center;
    ${window.innerWidth > 767 && `opacity: 0;
    &:hover {
        opacity: 1;
    }`}
`

export const LeftCont = styled(Cont)`
    justify-content: end;
    right: 0;
`

export const RightCont = styled(Cont)`
    top: 0;
`

const Btn = styled.button`
    position: absolute;
    width: 45px;
    height: 45px;
    background-color: transparent;
    @media screen and (min-width: 1360px) {
        width: 80px;
        height: 80px;
    }
    border-radius: 50px;
    background: #00000012;
`
export const PlacehCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 100%;
    height: 200px;
    @media screen and (min-width: 768px) {
        max-width: calc(100vw - 230px);
        max-height: calc(100vh - 164px);
    }
`

export const Placeholder = styled.img`
    max-width: 80px;
`

export const Prev = styled(Btn)`
    position: relative;
`

export const Next = styled(Btn)`
    position: relative;
`

export const Close = styled(Btn)`
    bottom: -40px;
    right: 0px;
    width: 25px;
    opacity: 0.7;
    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    @media screen and (min-width: 768px) {
        bottom: -45px;
        width: 35px;
    }
    @media screen and (min-width: 1360px) {
        bottom: -20px;
        width: 50px;
        right: -57px;
    }
    &:hover {
        opacity: 1;
    }
`
export const Icon = styled.svg`
    fill: #fff;
    max-width: 100%;
    max-height: 100%;
`

export const AltCont = styled.div`
    color: #fff;
    position: absolute;
    bottom: -37px;
    background-color: black;
    font-size: 13px;
    @media screen and (min-width: 768px) {
        font-size: 20px;
        bottom: 2px;
    }
    @media screen and (min-width: 1360px) {
        font-size: 25px;
    }
    left: 0;
`