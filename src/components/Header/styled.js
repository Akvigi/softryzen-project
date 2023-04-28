import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 22px;
    position: fixed;
    color: #fff;
    @media screen and (min-width: 768px) {
        padding-top: 16px;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 276px;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        max-width: 702px;
        align-items: center;
    }
    margin: 0 auto;
`

export const LogoCont = styled.div`
    font-size: 28px;
    line-height: 38px;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    align-items: center;
    @media screen and (min-width: 768px) {
        font-size: 35px;
        line-height: 48px;
        margin-bottom: 0;
    }
`

export const LogoImg = styled.img`
    width: 40px;
    height: 35px;
    margin-right: 8px;
    @media screen and (min-width: 768px) {
        height: 30px;
        margin-right: 10px;
    }
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
    @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 25px;
    }
`

