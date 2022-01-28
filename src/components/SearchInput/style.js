import styled from 'styled-components'

export const Wrapper = styled.div`
`
export const Search = styled.div`
    padding-bottom: 24px;
    display: flex;
`
export const Input = styled.input`
    width: 440px;
    height: 40px;
    border: 1px solid #D9D9D9;
    border-radius: 2px;
    padding: 8px 12px;
    color: #A4A4A4;
    font-size: 16px;
    :focus{
        border: 1px solid #D9D9D9;
        outline: 1px solid #D9D9D9;
    }
    @media screen and (max-width:767px){
        width:100%;
    }
`
export const Button = styled.button`
    background: #FFC107;
    color: #fff;
    border: none;
    padding: 0px 16px;
    height: 40px;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
    border-radius: 0px 2px 2px 0px;
`