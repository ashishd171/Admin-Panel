import styled from 'styled-components';

const DeleteButton = styled.button`
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    background: #fff;
    color: #red;
    border: none;
    padding: 5px 16px;
    height: 40px;
    // box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
    border-radius: 0px 2px 2px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        margin-right: 8px;
    }
`;

export default {
    DeleteButton,
}