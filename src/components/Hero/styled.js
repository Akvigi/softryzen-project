import styled from "styled-components";
import heroimg from '../../images/home/showcase.jpg'

export const HeroCont = styled.section`
    padding: 160px 20px 265px 20px;
    text-align: center;
    color: #FFFFFF;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroimg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
export const Head = styled.h1`
    font-weight: 600;
    font-size: 40px;
    line-height: 54px;
    margin-bottom: 16px;
    padding: 0 20px;
`
export const SecText = styled.h2`
    font-weight: 400;
    font-size: 26px;
    line-height: 32px;
    margin-bottom: 24px;
`
export const Btn = styled.button`
    padding: 16px 32px;
    background-color: #28A745;
    border-radius: 5px;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
`