import styled from "styled-components";

export const MainBox = styled.div`
    width:100%;
    @media screen and (max-width:767px){
        overflow:auto;
    }
    
`;

export const TableBox = styled.div`
    // width:100%;
    background-color: #fff;
    margin: 24px;
`;

export const TH1 = styled.td`
    padding:17px 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #1C1C1C;
    width: 76px;
    background-color:  #FAFAFA;
`;

export const TH2 = styled.td`
    padding:17px 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #1C1C1C;
    width: 170px;
    background-color:  #FAFAFA;
`;

export const TH3 = styled.td`
    padding:17px 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #1C1C1C;
    width: 170px;
    background-color:  #FAFAFA;
`;

export const TH4 = styled.td`
    padding:17px 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #1C1C1C;
    width: 123px;
    background-color:  #FAFAFA;
`;

export const TH5 = styled.td`
    padding:17px 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #1C1C1C;
    width: 123px;
    background-color:  #FAFAFA;
`;

export const TH6 = styled.td`
    padding:17px 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #1C1C1C;
    width: 123px;
    background-color:  #FAFAFA;
`;
export const TH7 = styled.td`
    padding:17px 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #1C1C1C;
    width: 123px;
    background-color:  #FAFAFA;
`;

export const ImageIcon = styled.img`
    margin-right: 5px;
`;

const Table = styled.table`
    width:100%;
`;

const Head = styled.thead`
    font-size: 14px;
    line-height: 22px;
    color: #1C1C1C;
`;

const Body = styled.tbody`
 // custom css goes here
`;

const TR = styled.tr`
  // custom css goes here
  border-bottom: 1px solid #dddddd69;
`;

const TD = styled.td`
    padding:17px 16px;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #1C1C1C;
    svg{
        color: #1890FF;
        width: 24px;
        height: 24px;
        float: left;

    }
`;

export default {
    Table,
    Body,
    Head,
    Body,
    TR,
    TD,
}