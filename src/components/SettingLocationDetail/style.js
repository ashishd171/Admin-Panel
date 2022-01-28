import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    margin: 24px;
    background: #fff;
    padding: 24px;
    z-index: -1;
    a{
        text-decoration: none;
        text-decoration: none;
        position: absolute;
        right: 25px;
        border: 0;
    }
    svg{
        margin-right: 8px;
    }
    @media screen and (max-width:767px){
        margin:unset;
    }
`
export const DetailPage = styled.div`
        width: 539px;
        @media screen and (max-width:767px){
            width:100%;
        }
    }
   
`
export const Anchor = styled.a`
    color: #E63F3F;
    font-size: 14px;
    line-height: 22px;
    :hover{
        color: #E63F3F;
    }
`