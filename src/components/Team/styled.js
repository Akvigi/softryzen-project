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
`

export const TextCont = styled.div`
    margin-bottom: 63px;
`

export const TeamGallery = styled.ul`
`

export const Item = styled.li`
    text-align: center;
    &:not(:last-child) {
        margin-bottom: 30px;
    }
`

export const Img = styled.img`
    width: 280px;
    height: 186px;
    margin-bottom: 16px;
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