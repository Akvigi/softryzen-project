import {SecTextTop} from 'components/common/styled';
import styled from 'styled-components';

export const OurWork = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 56px 0 40px;
    text-align: center;
    max-width: 280px;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
        max-width: 704px;
        padding: 48px 0 40px;
    }
    @media screen and (min-width: 1360px) {
        padding: 80px 0;
        max-width: 1304px;

    }
`;

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
        margin-bottom: 30px;

    }
    @media screen and (min-width: 1360px) {
        margin-bottom: 36px;
    }
`;

export const TopText = styled(SecTextTop)`
    line-height: 33px;
`;

export const Gallery = styled.ul`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        max-width: 704px;
    }
    @media screen and (min-width: 1360px) {
        max-width: 1304px;
    }
`;

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
    @media screen and (min-width: 1360px) {
        &:not(:nth-child(n+4)) {
            margin-bottom: 24px
        }
    }   
`;

export const Img = styled.img`
    max-width: 280px;
    height: 176px; 
    @media screen and (min-width: 768px) {
        max-width: 223px;
        height: 148px; 
    }
    @media screen and (min-width: 1360px) {
        max-width: 421px;
        height: 282px;
    }
    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }
`;
