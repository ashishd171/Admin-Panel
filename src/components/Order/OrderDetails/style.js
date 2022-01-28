import styled from "styled-components";

export const MainBox = styled.div`
    display:flex;
    width:100%;
    @media screen and (max-width:767px){
        display:block;
    }

`;

export const TableBox = styled.div`
    width:100%;
    background: #fff;
    padding: 24px;
    margin: 24px;
    @media screen and (max-width:767px) {
        margin:unset;
        overflow:auto;
    }
`;
export const Status = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #1C1C1C;
    margin-top:48px;
`;

export const Span = styled.span`
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #4CAF50;
`;

export const Span1 = styled.p`
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #8C8C8C;
`;

export const TH1 = styled.td`
    padding:17px 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #1C1C1C;
    max-width:542px;
`;

export const TH2 = styled.td`
    padding:17px 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #1C1C1C;
    max-width: 119px;
`;

export const TH3 = styled.td`
    padding:17px 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #1C1C1C;
    max-width: 119px;
`;