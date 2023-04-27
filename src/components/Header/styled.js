import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 22px;
    position: fixed;
    color: #fff;
`

export const LogoCont = styled.div`
    font-size: 28px;
    line-height: 38px;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
`

export const LogoImg = styled.img`
    width: 40px;
    height: 35px;
    margin-right: 8px;
`

export const GrText = styled.span`
    color: #28A745;
    margin-right: 8px;
`

export const Link = styled.a`
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    &:not(:last-child) {
        margin-right: 12px;
    }
`

