import styled from "styled-components";

export const Blog = styled.section`
`

export const Container = styled.div`
    background-color: #0284D0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        max-width: 768px;
    }
    @media screen and (min-width: 1360px) {
        max-width: 1360px;
    }
`

export const Img = styled.img`
    max-width: 320px;
    height: 247px;
    @media screen and (min-width: 768px) {
        object-fit: cover;
        max-width: 368px;
        height: 493px;
    }
    @media screen and (min-width: 1360px) {
        max-width: 670px;
        height: 460px;
    }
`

export const TextContainer = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    padding: 48px 20px 58px 20px ;
    max-width: 280px;
    color: #fff;
    @media screen and (min-width: 768px) {
        padding: 59px 32px;
        max-width: 100%;
        font-size: 18px;
        line-height: 25px;
    }
    @media screen and (min-width: 1360px) {     
        padding: 80px 28px;
        max-width: 642px;
    }
`
