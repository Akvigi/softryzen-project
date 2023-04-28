import styled from "styled-components";

export const AboutUs = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #28A745;
    align-items: center;
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`

export const Img = styled.img`
    width: 320px;
    height: 220px;
    @media screen and (min-width: 768px) {
        width: 368px;
        height: 589px;
    }
`

export const TextCont = styled.div`
    padding: 79px 20px;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    @media screen and (min-width: 768px) {
        padding: 62px 32px;
        font-size: 18px;
        line-height: 25px;
    }
`
