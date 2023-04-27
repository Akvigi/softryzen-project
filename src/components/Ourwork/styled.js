import styled from "styled-components";

export const OurWork = styled.section`
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    align-items: center;
    padding: 56px 20px 40px 20px;
    text-align: center;
`

export const TextCont = styled.div`
    padding: 0 36px 0px 36px;
    color: #333333;
    margin-bottom: 31px;
`

export const Gallery = styled.ul`
    display: flex;
    flex-direction: column;
`

export const Item = styled.li`
    &:not(:last-child) {
        margin-bottom: 8px;
    }
`

export const Img = styled.img`
    width: 280px;
    height: 176px; 
`