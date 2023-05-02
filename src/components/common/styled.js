import styled from 'styled-components';

export const Head = styled.h2`
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 24px;
    @media screen and (min-width: 768px) {
        font-size: 40px;
        line-height: 48px;
    }
`;

export const SecTextTop = styled.p`
    margin-bottom: 16px;
`;

export const SecTextBot = styled.p`
    margin-bottom: 24px;
`;

export const BtnHC = styled.button`
    background-color: #28A745;
    border-radius: 5px;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    &:hover {
        background: #2EBF4F;
    }
`;

export const Btn = styled.button`
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    padding: 16px 32px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    background-color: transparent;
    @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 25px;
    }
    &:hover {
        background: #F4F4F4;
    }
`;
