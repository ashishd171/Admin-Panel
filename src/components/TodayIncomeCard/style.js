import styled from 'styled-components'
export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 12px;
    @media screen and (max-width:767px){
        justify-content:center;
        width:100%;
    }
`
export const Card = styled.div`
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 2px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 12px;
    background: #FFFFFF;
    padding: 20px 24px;
    width: 278px;
`
export const Amount = styled.div`
    margin: 0;
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
`

export const IncomeDetail = styled.div`
    display: flex;
    align-items: center;
    svg{
        margin-left: auto;
        color: #000000;
        height: 14px;
        width: 14px;
    }
`

export const PriceDetail = styled.div`
    display: flex;
    align-items: center;
    svg{
        margin-left: 5px;
        color: #4CAF50;
        width: 10.6px;
    }
    .svg2{
        margin-left: 5px;
        color: red;
        width: 10.6px;
    }
`
export const IncomeDetailPara = styled.div`
    margin: 0;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-item: center !important;
    

`
export const PriceDetailPara = styled.div`
    margin: 0;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    display: flex; 
    align-items: center !important;
`