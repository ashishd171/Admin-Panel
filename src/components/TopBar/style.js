import styled from 'styled-components'

export const Wrapper = styled.div`
    position: fixed;
    width: 100%;
`
export const Logo = styled.div`
    background: #E6F7FF;
    border: 1px dashed #91D5FF;
    color: #1890FF !important;
    width: 32px;    
    height: 32px;
    padding: 2px;
    margin-left: 24px !important;
    font-size: 12px;
    display: flex;
`
export const Topbar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px #F0F1F2; 
    margin-bottom: 3px;
   
`
export const Anchor = styled.a`
    font-weight: normal;
    font-size: 11px;
    line-height: 22px;
    color: #FFC107;
    margin: 0;
    text-decoration: none;
    :hover{
        color: #FFC107;
    }
`
export const LogoPara = styled.p`
    align-self: center;
    margin-bottom: 0;
`
export const HomeText = styled.div`
   color: #000;
`
export const Image = styled.img`
    margin-left: 8px;
    margin-right: 24px;
`
