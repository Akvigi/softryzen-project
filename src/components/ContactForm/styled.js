import styled from "styled-components";

export const Contact = styled.section`
    display: flex;
    flex-direction: column;
    position: static;
    align-items: center;
`

export const Img = styled.img`
    width: 320px;
    height: 220px;
`

export const Form = styled.form`
    padding: 51px 20px 25px 20px;
`

export const Head = styled.h2`
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 69px;
    color: #333333;
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
`

export const Btn = styled.button`
    padding: 16px 56px;
    background-color: #28A745;
    border-radius: 5px;
    color: #fff;
`