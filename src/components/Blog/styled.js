import styled from "styled-components";

export const Blog = styled.section`
    background-color: #0284D0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 768px) {
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`

export const Img = styled.img`
    width: 320px;
    height: 247px;
    @media screen and (min-width: 768px) {
        width: 368px;
        height: 493px;
    }
`

export const Container = styled.div`
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
`
