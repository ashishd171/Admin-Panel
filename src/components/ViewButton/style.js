import styled from 'styled-components'

export const Wrapper = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    @media screen and (max-width:767px){
        position:unset;
        text-align: left;
    }
    svg{
        Width: 24px;
        Height: 24px;
    }
    
    .gridActive{
        background-color: #FFC107; 
        color: #fff;
        svg{
            color: #fff;
        }
    }
`
export const GridBtn = styled.button`
    background: #fff;
    border: none;
    width: 51px;
    height: 40px;
    border: 1px solid #D9D9D9;
    border-radius: 5px 1px 1px 5px;
    svg{
        color: #FFC107;
    }
    
`
export const ListBtn = styled.button`
    background: #fff;
    border: none;
    width: 51px;
    height: 40px;
    border: 2px solid #D9D9D9;
    border-radius: 1px 5px 5px 1px;
    border-left: none;
    svg{
        color: #FFC107;
    }
`