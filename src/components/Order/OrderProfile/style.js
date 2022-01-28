import styled from "styled-components";

export const Container = styled.div`
    max-width:332px;
    width:100%;
    padding: 24px;
    margin: 24px 24px 24px 0px;
    background: #fff;
    @media screen and (max-width:767px){
        max-width:unset;
    }
`;

export const ProfileNameBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom:48px;
`;

export const TextBoxMain = styled.div`

`;


export const TextBox = styled.div`

`;

export const ProfileTextHead = styled.h2`
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #1C1C1C;
`;

export const ProfileText = styled.p`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #1C1C1C;
`;

export const ProfileImg = styled.img`
    width: 64px;
    height: 64px;
`;

export const PaymentMethodbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TotalPaymentText = styled.h2`
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #1C1C1C;
    `;


