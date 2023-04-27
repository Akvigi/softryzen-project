import styled from "styled-components";

export const Footer = styled.section`
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    align-items: center;
    background-color: #333333;
    color: #fff;
    padding: 20px 0;
`

export const LinkCont = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
`

export const Link = styled.a`
    display: flex;
    height: auto;
    width: auto;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
        margin-right: 25px;
    }
`