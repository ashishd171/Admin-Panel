import styled from 'styled-components'

export const Wrapper = styled.div`
    display: grid;    
`
export const Input = styled.input`
    border: 1px solid #D9D9D9;
    box-sizing: border-box;
    border-radius: 2px;
    margin-bottom:16px;
    width: 100%;
    padding: 9px;
    &:focus{
        outline: none !important;
    }
    @media screen and (max-width:767px){
        width:100%;
    }
`
export const Label = styled.label`
    margin-bottom: 6px;
`
