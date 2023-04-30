import styled from "styled-components";
import heroimg from '../../images/home/showcase.jpg'
import heroimg2x from '../../images/home/showcase@2x.jpg'
import heroimgwbp from '../../images/home/showcase.webp'
import heroimgwbp2x from '../../images/home/showcase@2x.webp'
import { BtnHC } from "components/common/styled";

export const HeroCont = styled.section`
    padding: 160px 0 265px 0;
    text-align: center;
    color: #FFFFFF;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroimg});
    @supports (background-image: -webkit-image-set(url(${heroimgwbp}) 1x)) {
        background-image: -webkit-image-set(url(${heroimgwbp}) 1x) 
    }
   
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroimg2x});
        @supports (background-image: -webkit-image-set(url(${heroimgwbp2x}) 2x)) {
            background-image: -webkit-image-set(url(${heroimgwbp2x}) 2x) 
        }
    }
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media screen and (min-width: 768px) {
        padding: 378px 0;
    }
    @media screen and (min-width: 1360px) {
        padding: 272px 0 270px 0;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 280px;
    align-items: center;
    @media screen and (min-width: 768px) {
        max-width: 525px;
    }
    @media screen and (min-width: 1360px) {
        max-width: 100%;
    }
    margin: 0 auto;
`

export const Head = styled.h1`
    font-weight: 600;
    font-size: 40px;
    line-height: 54px;
    margin-bottom: 16px;
    padding: 0 20px;
    @media screen and (min-width: 768px) {
        font-size: 55px;
        line-height: 75px;
        padding: 0;
    }
    
`
export const SecText = styled.h2`
    font-weight: 400;
    font-size: 26px;
    line-height: 32px;
    margin-bottom: 24px;
    @media screen and (min-width: 768px) {
        font-size: 40px;
        line-height: 48px;
    }
    @media screen and (min-width: 1360px) {
        line-height: 54px;
    }
`
export const Btn = styled(BtnHC)`
    padding: 16px 32px;
    align-items: center;
    display: flex;
    flex-direction: row;
    max-width: 175px;
    @media screen and (min-width: 768px) {
        padding: 20px 32px;
    }
`

export const Icon = styled.svg`
    max-width: 9px;
    height: 18px;
    margin-right: 8px;
`