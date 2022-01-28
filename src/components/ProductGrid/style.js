import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 12px;  
    display: flex;
    flex-wrap: Wrap;
    @media screen and (max-width:767px){
        justify-content:center;
    }
`
export const Image = styled.img`
    // width: 258px;
    width: ${prop => prop.Category ?  '258px' : '200px' };


`
export const Anchor = styled.a`
    color: ${prop => prop.Category ?  '#ffffff' : '#1890FF' };

    display: flex;
    :hover{
        color: ${prop => prop.Category ?  '#ffffff' : '#1890FF' };
    }
`

export const Name = styled.p`
    margin: 0;
    flex: 1;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
`
export const Card = styled.div`
    width: 258px;
    width: ${prop => prop.Category ?  '258px' : '200px' };
    margin: 10px;
`
export const BottomSection = styled.div`
    display: flex;
    background: #FFFFFF;
    padding: ${prop => prop.Category ?  '14px 16px' : ' 7px 16px' };
`
export const Dot = styled.span`
    background: green;
    border-radius: 50%;
    // display: inline-block;
    display:  ${prop => prop.Category ? 'inline-block' : 'none'};
    width: 8px;
    height: 8px;
    margin-right: 7px;
`
export const Edit = styled.div`
    Width: 24px;    
    Height: 22px;
    background: ${prop => prop.Category ? '#FFC107' : 'transparent'};
    border-radius: 2px;
    // color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`
