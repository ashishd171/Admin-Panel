import styled from "styled-components";

const IconImg = styled.img`
    margin-right:10px;
`;

const CheckBox = styled.div`
    display:flex;
    align-items:center;
    margin-top:10px;
    cursor:pointer;
`;

const CheckBoxIcon = styled.input`
    margin-right:10px;
    width: 16px;
    height: 16px;
    cursor:pointer;
`;

const ListItemLabel = styled.label`
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 0.8em;
    margin:unset;
    cursor:pointer;
    width:100%;
`;

const ButtonBox = styled.div`
    margin:30px 0;
    text-align:right;
`;

export default {
    IconImg,
    CheckBox,
    CheckBoxIcon,
    ListItemLabel,
    ButtonBox,
}