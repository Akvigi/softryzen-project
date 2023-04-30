import { Btn } from "components/common/styled";
import styled from "styled-components";

export const AboutUs = styled.section`

`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #28A745;
    align-items: center;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        max-width: 768px;
    }
    @media screen and (min-width: 1360px) {
        max-width: 1360px;
        max-height: 460px;
    }
`

export const Img = styled.img`
    max-width: 320px;
    height: 220px;
    @media screen and (min-width: 768px) {
        max-width: 368px;
        height: 589px;
        object-fit: cover;
    }
    @media screen and (min-width: 1360px) {
        max-width: 670px;
        height: 460px;
    }
`

export const TextCont = styled.div`
    padding: 79px 0;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    max-width: 279px;
    @media screen and (min-width: 768px) {
        padding: 0;
        font-size: 18px;
        line-height: 25px;
        margin: 0 auto;
        max-width: 336px;
    }
    @media screen and (min-width: 1360px) {
        justify-content: center;
        margin: 0 auto;
        max-width: 642px;
    }
`

export const BtnMore = styled(Btn)`
    &:hover {
        border-color: #28A745;
        color: #28A745;
    }
`

