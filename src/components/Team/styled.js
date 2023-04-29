import { SecTextTop } from "components/common/styled";
import styled from "styled-components";

export const Team = styled.section`
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    align-items: center;
    padding: 72px 0 50px;
    text-align: center;
    color: #333333;
    @media screen and (min-width: 768px) {
        padding: 50px 0 40px;
    }
    @media screen and (min-width: 1360px) {
        padding: 80px 0 88px;
    }
`

export const TextCont = styled.div`
    margin-bottom: 63px;
    @media screen and (min-width: 768px) {
        margin-bottom: 24px;
    }
    @media screen and (min-width: 1360px) {
        margin-bottom: 36px;
    }
`

export const TopSecText = styled(SecTextTop)`
    @media screen and (min-width: 768px) {
        font-size: 20px;
        line-height: 33px;
    }
    @media screen and (min-width: 1360px) {
        line-height: 27px;
    }
    
`

export const TeamGallery = styled.ul`
    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
    }
`

export const Item = styled.li`
    text-align: center;
    z-index: 0;
    &:not(:last-child) {
        margin-bottom: 30px;
    }
    @media screen and (min-width: 768px) {
        &:not(:last-child) {
            margin-bottom: 0px;
        }
        &:not(:last-child) {
            margin-right: 16px;
        }
    }
    @media screen and (min-width: 1360px) {
        &:not(:last-child) {
            margin-right: 20px;
        }
    }
    
`

export const Wrapp = styled.div`
    position: relative;
    margin-bottom: 16px;
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: scale(1.03);
        &>div {
            opacity: 0.6;
            pointer-events: auto;
        }
    }
`

export const Img = styled.img`
    max-width: 280px;
    height: 186px;
    @media screen and (min-width: 768px) {
        max-width: 223px;
        height: 148px;
        margin-bottom: 18px;
    }
    @media screen and (min-width: 1360px) {
        max-width: 422px;
        margin-bottom: 15px;
        height: 287px;
    }
    transition: scale 500ms cubic-bezier(0.4, 0, 0.2, 1);
    /* &:hover {
        & ~ div {
            opacity: 0.6;
            pointer-events: auto;
    }} */
`

export const Name = styled.h3`
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    margin-bottom: 8px;
    @media screen and (min-width: 768px) {
        font-size: 32px;
        line-height: 32px;
    }
`

export const Job = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 25px;
    }
`

export const Overlay = styled.div`
    opacity: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 186px;
    @media screen and (min-width: 768px) {
        height: 148px;
    }
    @media screen and (min-width: 1360px) {
        height: 287px;
    }
    background-color: rgb(0,0,0);
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    &:hover {
        opacity: 0.6;
        pointer-events: auto;
        & ~ img {
            scale: 1.1;
        }
    }
`

export const Link = styled.a`
    display: flex;
    height: auto;
    width: auto;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    cursor: pointer;
    &:not(:last-child) {
        margin-right: 25px;
    }
    transition: pointer-events 1000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`