import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 22px;
    position: fixed;
    padding-bottom: 16px;
    color: #fff;
    @media screen and (min-width: 768px) {
        padding-top: 16px;
        padding-bottom: 20px;
    }
    opacity: 1;
    z-index: 20;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

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
    @media screen and (min-width: 1360px) {
        max-width: 1304px;
    }
    margin: 0 auto;
`;

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
    cursor: default;
    transition: scale 1000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
        scale: 1.1;
        &>span, &>svg {
            color: #2EBF4F;
            fill: #2EBF4F;
        }
    }
`;

export const LogoImg = styled.svg`
    max-width: 40px;
    height: 35px;
    margin-right: 8px;
    fill: #28A745;
    @media screen and (min-width: 768px) {
        height: 30px;
        margin-right: 10px;
    }
    @media screen and (min-width: 1360px) {
        margin-right: 4px;
    }
`;

export const GrText = styled.span`
    color: #28A745;

`;

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
    @media screen and (min-width: 1360px) {
        &:not(:last-child) {
            margin-right: 40px;
        }
    }
    position: relative;
    &:hover {
        &::after {
            content: '';
            width: 100%;
            height: 4px;
            background-color: #2EBF4F;
            opacity: 0.7;
            left: 0%;
            @media screen and (min-width: 1360px) {
                width: 160%;
                left: -30%;
            }
            bottom: -15px;
            border-radius: 2px;
            position: absolute;
        }
    }
`;

