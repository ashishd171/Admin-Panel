import styled from 'styled-components'

export const Wrapper = styled.div`
    .toggler{
        background-color: white;
        border: none;
        width: 98%;
        text-align: left;

        list-style-type: none;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        text-decoration: none;
        color: black;
        padding: 12px;
        font-weight: 400;
        color: #1C1C1C;
    :hover{
        background: #FFEFB0;
        font-weight: 500;
        color: black;
    }
    svg{
        margin-right: 10px;
    }
    .arrowdown{
        float: right;
        align-self: center;
        margin-top: 4px;
        margin-left: 5px;
    }

        :focus{
            outline: none;
            background-color: white;
            color: #000;
            box-shadow: none;
        }
        :after{
            float: right;
            margin-right: 10px;
        }
    }

    .dropdownMenu{
        width: 100%;
        padding: 0;
    }
    .dropdownItem{
        list-style-type: none;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        text-decoration: none;
        color: black;
        padding: 12px;
        font-weight: 400;
        color: #1C1C1C;
        padding-left: 35px;
        :hover{
            background: #FFEFB0;
            font-weight: 500;
            color: black;
        }
    }
`

export const Sidebar = styled.div`
    width: 208px;
    height: 836px;
    background: #fff;
`
export const MenuBar = styled.div`
    display: grid;
`
export const Home = styled.div`
    padding: 9px 12px;
    background: #FFEFB0;
`
export const UnorderList = styled.ul`
    padding-left: 0;
`
export const List = styled.li`
    list-style-type: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    text-decoration: none;
    color: black;
    padding: 12px;
    font-weight: 400;
    color: #1C1C1C;
    :hover{
        background: #FFEFB0;
        font-weight: 500;
        color: black;
    }
    svg{
        margin-right: 10px;
    }
    .arrowdown{
        float: right;
        align-self: center;
        margin-top: 4px;
        margin-left: 5px;
    }
   
`
export const Anchor = styled.a`
    text-decoration: none;
    color: #1C1C1C;   
    :hover{
        color: black;
    }
`