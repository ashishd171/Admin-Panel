import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #FFFFFF;
    padding: 0px 24px;
    margin-left: 2px;
    position: fixed;
    width: 85%;
    right: 0;
    top: 64px;
    z-index: 999;
    @media screen and (max-width:767px){
        left:0;
        width:100%;
        padding-bottom:20px;
    } 
`;

export const SubHeading = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.p`
    font-size: 14px !important;
    line-height: 22px;
    color: #1C1C1C;
    font-weight: 400;
    padding-top: 16px;
    padding-bottom: 8px;
`;

export const SubTitle = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    padding-top: 16px;
    padding-bottom: 24px;
    margin: 0;
`;

export const SubWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    @media screen and (max-width:767px){
        display:block;
    }
`