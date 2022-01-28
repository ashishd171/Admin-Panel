import styled from 'styled-components'

export const Wrapper = styled.div`
    background: #fff;
    margin: 24px;
    margin-top: 10px;
    margin-left: 2px;
    margin-right: 0px;
    padding: 20px;
    @media screen and (max-width:767px){
        overflow:auto;
    }
`
export const TableWrap = styled.table`
    width: 100%;
    table-layout: fixed;
`
export const TableBody = styled.tbody``
export const TableRow = styled.tr`
`
export const TableHeadingFirst = styled.th`
    padding: 16px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    width: 18px;
    background: #FAFAFA;
    box-shadow: -18px 0px 0px -17px rgba(0, 0, 0, 0.06);
    border-radius: 0px;
`
export const TableHeadingSecond = styled.th`
    padding: 16px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    width: 178px;
    background: #FAFAFA;
    box-shadow: -18px 0px 0px -17px rgba(0, 0, 0, 0.06);
    border-radius: 0px;
`
export const TableHeadingThird = styled.th`
    text-align: left;
    padding: 16px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    width: 45px; 
    background: #FAFAFA;
    box-shadow: -18px 0px 0px -17px rgba(0, 0, 0, 0.06);
    border-radius: 0px;
`

export const TableData = styled.td`
    padding: 17px 16px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    svg{
        color: #1890FF;
        width: 24px;
        height: 24px;
        float: left;

    }
    .LastOne{
        width: 50%;
        text-align: right;
    }
`
export const Image = styled.img`
    
`
export const Span = styled.span`
    background: green;
    border-radius: 50%;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 7px;
    vertical-align: middle;
`

export const Anchor = styled.a``