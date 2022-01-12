import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";


const StyledModal = Modal.styled`
    max-width: 416px;
    width:100%;
    background-color: #fff;
    opacity: ${(props) => props.opacity};
    transition : all 0.3s ease-in-out;
    padding:32px;
    z-index:999;
    box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
    border-radius: 2px;
    text-align: left;

    @media screen and (max-width:767px){
        max-width:unset;
        width:100%;
  }
`;
  

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

const ModalText = styled.span`
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #1C1C1C;
`;

const ButtonBox = styled.div`
  display:flex;
  justify-content: flex-end;
  margin-top: 24px;

  @media screen and (max-width:767px){
    display:block;
  }

`;

const CancelButton = styled.button`
  color: #3fbcaf;
  background-color:unset;
  padding: 15px 35px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  margin: 20px 0;
  border: 1px solid #3fbcaf;
  border-radius: 6px;
  cursor:pointer;
  margin-left:20px;
  @media screen and (max-width:767px){
    Width:100%;
    margin:unset;
  }
`;

const AddCourseButton = styled.button`
    background-color: #5fc4b8;
    color: #161618;
    padding: 15px 35px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 20px 0;
    border: none;
    font-family: lato;
    border-radius: 6px;
    cursor:pointer;
    letter-spacing:1px;
    @media screen and (max-width:767px) {
        Width:100%;
        margin: 15px 0px;
    }
`;

const ModalHeader = styled.h2`
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #1C1C1C;
    margin-bottom: 5px;
`;

  export default {
    StyledModal,
    FadingBackground,
    ModalText,
    ButtonBox,
    CancelButton,
    AddCourseButton,
    ModalHeader,
  }