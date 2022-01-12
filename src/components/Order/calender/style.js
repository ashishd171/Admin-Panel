import styled from "styled-components";

const TypeTextBox = styled.label`
    display: flex;
    align-items: center;
    position:relative;
    input[type="text"] {
        width:256px;
        background-color: transparent;
        border: 1px solid #D9D9D9;
        color: #000;
        font-weight:normal;
        font-size: 16px;
        padding:8px 12px;
    }
`;

const Icon = styled.img`
    position: absolute;
    right: 12px;
    width: 14px;
`;

export default {
    TypeTextBox,
    Icon,
}