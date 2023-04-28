import styled from "styled-components";

export const Contact = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        padding-bottom: 40px;
    }
`

export const Img = styled.img`
    width: 320px;
    height: 220px;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        width: 368px;
        height: 354px;
    }
`

export const Form = styled.form`
    padding: 32px 32px 33px 32px;
    max-width: 280px;
    background: #F4F4F4;
    @media screen and (min-width: 768px) {
        max-width: 336px;
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

export const Btn = styled.button`
    padding: 16px 56px;
    background-color: #28A745;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    line-height: 25px;
`