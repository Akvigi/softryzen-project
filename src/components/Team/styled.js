import { SecTextTop } from "components/common/styled";
import styled from "styled-components";

export const Team = styled.section`
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    align-items: center;
    padding: 72px 20px 50px 20px;
    text-align: center;
    color: #333333;
    @media screen and (min-width: 768px) {
        padding: 50px 32px 40px 32px;

    }
`

export const TextCont = styled.div`
    margin-bottom: 63px;
    @media screen and (min-width: 768px) {
        margin-bottom: 24px;
    }
`

export const TopSecText = styled(SecTextTop)`
    @media screen and (min-width: 768px) {
        font-size: 20px;
        line-height: 33px;
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
`

export const Img = styled.img`
    width: 280px;
    height: 186px;
    margin-bottom: 16px;
    @media screen and (min-width: 768px) {
        width: 223px;
        height: 148px;
    }
`

export const Name = styled.h3`
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    margin-bottom: 8px;
`

export const Job = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
`