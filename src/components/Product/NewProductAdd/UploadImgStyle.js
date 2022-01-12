import styled from "styled-components";

const UploadText = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;   
`;

const AddIconBox = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`;

const ImgName = styled.p`
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #1890FF;
`;

const DeleteButton = styled.button`
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    text-align: right;
    color: #E63F3F;
    float: right;
    border:none;
    background-color:unset;
    margin-top:48px;
`;

const DeleteIcon = styled.img`
    margin-right:5px;
`;

const TextBox = styled.h2`
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.85);
    background: #F6FFED;
    border: 1px solid #B7EB8F;
    border-radius: 2px;
    padding:10px 15px;
    width:100%;
    margin-top:15px;
`;

export default {
    UploadText,
    AddIconBox,
    ImgName,
    DeleteButton,
    DeleteIcon,
    TextBox,
}