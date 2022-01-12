import styled from 'styled-components';

const NumberBox = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    max-width: 730px;
    width:100%;
    margin:16px 0;
    float:right;
`;

const Positions = styled.p`
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #1C1C1C;
    margin: unset;
    margin-right:16px;
`;

const ArrowBox = styled.div`
    border: 1px solid #D9D9D9;
    border-radius: 2px;
    padding:10px;
    Width:32px;
    Height:32px;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right:8px;
`;

const ArrowIcon = styled.img`
    width: 12px;
    height: 12px;
`;

const Number = styled.p`
    margin:unset;
`;

const Loaded = styled.img`
`;

const InputBox = styled.div`
    width:130px;
`;

const DropDownHeader = styled.div`
    padding:5px 12px;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #1C1C1C;
    border: 1px solid #D9D9D9;
    border-radius: 2px;
    display: flex;
    align-items: center;
    position: relative;
`;

export default {
    NumberBox,
    Positions,
    ArrowBox,
    ArrowIcon,
    Number,
    Loaded,
    InputBox,
    DropDownHeader,
}