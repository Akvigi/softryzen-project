import { BtnHC } from "components/common/styled";
import styled from "styled-components";

export const Contact = styled.section`
    @media screen and (min-width: 768px) {
        padding-bottom: 40px;
    }
    @media screen and (min-width: 1360px) {
        padding: 0;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 320px;
    background: #F4F4F4;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        max-width: 768px;
    }
    @media screen and (min-width: 1360px) {
        max-width: 1360px;
    }
`

export const Img = styled.img`
    max-width: 320px;
    height: 220px;
    @media screen and (min-width: 768px) {
        object-fit: cover;
        max-width: 368px;
        height: 354px;
    }
    @media screen and (min-width: 1360px) {
        max-width: 670px;
        height: 454px;
    }
`

export const Form = styled.form`
    padding: 51px 0 25px;
    margin: 0 auto;
    max-width: 280px;
    @media screen and (min-width: 768px) {
        padding: 32px 0 33px;
        max-width: 336px;
    }
    @media screen and (min-width: 1360px) {
        padding: 56px 0 77px;
        max-width: 642px;
    }
`

export const Head = styled.h2`
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 69px;
    color: #333333;
    @media screen and (min-width: 768px) {
        font-size: 40px;
        line-height: 54px;
        margin-bottom: 24px;
    }
`

export const Input = styled.input`
    padding: 16px 0 16px 8px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    &:not(:last-child) {
        margin-bottom: 16px;
    }
    &:last-child {
        margin-bottom: 24px;
    }
    font-size: 16px;
    line-height: 23px;
    @media screen and (min-width: 768px) {
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
    }
`

export const Btn = styled(BtnHC)`
    padding: 16px 56px;
`