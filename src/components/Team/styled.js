import { SecTextTop } from "components/common/styled";
import styled from "styled-components";

export const Team = styled.section`
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    align-items: center;
    padding: 72px 0 50px;
    text-align: center;
    color: #333333;
    @media screen and (min-width: 768px) {
        padding: 50px 0 40px;
    }
    @media screen and (min-width: 1360px) {
        padding: 80px 0 88px;
    }
`

export const TextCont = styled.div`
    margin-bottom: 63px;
    @media screen and (min-width: 768px) {
        margin-bottom: 24px;
    }
    @media screen and (min-width: 1360px) {
        margin-bottom: 36px;
    }
`

export const TopSecText = styled(SecTextTop)`
    @media screen and (min-width: 768px) {
        font-size: 20px;
        line-height: 33px;
    }
    @media screen and (min-width: 1360px) {
        line-height: 27px;
    }
    
`

export const TeamGallery = styled.ul`
    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
    }
`

export const Item = styled.li`
    text-align: center;
    &:not(:last-child) {
        margin-bottom: 30px;
    }
    @media screen and (min-width: 768px) {
        &:not(:last-child) {
            margin-bottom: 0px;
        }
        &:not(:last-child) {
            margin-right: 16px;
        }
    }
    @media screen and (min-width: 1360px) {
        &:not(:last-child) {
            margin-right: 20px;
        }
    }
`

export const Img = styled.img`
    max-width: 280px;
    height: 186px;
    margin-bottom: 16px;
    @media screen and (min-width: 768px) {
        max-width: 223px;
        height: 148px;
        margin-bottom: 18px;
    }
    @media screen and (min-width: 1360px) {
        max-width: 422px;
        margin-bottom: 15px;
        height: 287px;
    }
`

export const Name = styled.h3`
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    margin-bottom: 8px;
    @media screen and (min-width: 768px) {
        font-size: 32px;
        line-height: 32px;
    }
`

export const Job = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 25px;
    }
`