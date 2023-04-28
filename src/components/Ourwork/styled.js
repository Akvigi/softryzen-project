import styled from "styled-components";

export const OurWork = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 56px 20px 40px 20px;
    text-align: center;
    @media screen and (min-width: 768px) {
        padding: 48px 32px 40px 32px;
    }
`

export const TextCont = styled.div`
    color: #333333;
    margin-bottom: 31px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    max-width: 207px;
    @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 25px;
        padding: 0;
        max-width: 100%;
    }
`

export const Gallery = styled.ul`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        max-width: 704px;
    }
`

export const Item = styled.li`
    &:not(:last-child) {
        margin-bottom: 8px;
    }
    @media screen and (min-width: 768px) {
        &:not(:last-child) {
            margin-bottom: 0px;
        }
        &:not(:nth-child(n+4)) {
             margin-bottom: 18px
        }
    }
       
`

export const Img = styled.img`
    width: 280px;
    height: 176px; 
    @media screen and (min-width: 768px) {
        width: 223px;
        height: 148px; 
    }
`