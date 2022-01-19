import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: #fff;
    padding: 10px 24px;
    // width:100%;
    margin: 24px;
`;

const container = styled.div`
    max-width:539px;
    width:100%;
    margin:48px auto;
`;

const uploadImgBox = styled.div`
    max-width:280px ;
    width: 100%;
    height: 225px;
    border: 1px dashed #D9D9D9;
    margin-bottom:20px;
    position: relative;
`;

const AddBox = styled.form`
    text-align: center;
    width:100%;
    height:100%;
`;

const AddIconBox = styled.div`
    position: absolute;
    left: 37%;
    top: 36%;
`;


const AddIcon = styled.h2`
    font-size:20px;
    color:#000000;
`;

const AddText = styled.h2`
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: rgba(0, 0, 0, 0.45);
`;

const UploadText = styled.input`
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.45);
    width:100%;
    height: 224px;
    opacity: 0;
`;

const InputBox = styled.div`
    margin-bottom:20px;
`;

const Label = styled.label`
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    text-align: left;
    color: #1C1C1C;
    margin-bottom:10px;
    width:100%;
`;

const Input = styled.input`
    padding:12px 15px;
    width:100%;
    border: 1px solid #D9D9D9;
    border-radius: 2px;
`;

const TextArea = styled.textarea`
    width:100%;
    padding:12px 15px;
    border: 1px solid #D9D9D9;
    border-radius: 2px;
`;

const DropDownContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position:relative;
`;

const DropDownHeader = styled.div`
    padding:12px 15px;
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

const IconSpan = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:#4CAF50;
    margin-right:10px;
`;

const Icon = styled.img`
    position: absolute;
    right: 15px;
`;

const DropDownListContainer = styled.div`
    position: absolute;
    width: 100%;
    background-color:#fff;
    z-index: 99;
    top: 49px;
    padding:10px 15px;
    box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
`;

const DropDownList = styled.ul`
  background: #ffffff;
  box-sizing: border-box;
  color: #1C1C1C;
  font-size: 14px;
  font-weight: 500;
  padding-left:18px;
  padding: unset;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.li`
    list-style: none;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 0.8em;
    display:flex;
    align-items:center;
    cursor:pointer;
`;

const InputTell = styled.input`
    max-width: 56px;
    padding:12px 15px;
    width:100%;
    border: 1px solid #D9D9D9;
    border-radius: 2px;
    text-align: center;
`;

const Text = styled.p`
    margin:unset;
    margin-left:10px;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #1C1C1C;
`;

const TelBox = styled.div`
  display:flex;
  align-items:center;
  
`;

const Heading = styled.h2`
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    color: #1C1C1C;
`;

const KtcbBox = styled.div`
    display:flex;
    align-items:center;                                                                                                                                                                                                                                                                                                                                                                  
    justify-content: space-between;
`;

const YellowText =styled.p`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFC107;
`;

const MainBox = styled.div`
    width:100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Box = styled.div`
    width: 56px;
`;

const TextBox = styled.div`
    width: 217px;
`;

const text = styled.h2`
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #1C1C1C;
`;

const TextBox1 = styled.div`
    width: 110px;
    margin-left: 10px;
`;

const TextBox2 = styled.div`
    width: 156px;
`;

const BoxImg = styled.img`

`;

const ImgBox = styled.div`
    width:56px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const textInput = styled.input`
    padding:12px 15px;
    width:100%;
    border: 1px solid #D9D9D9;
    border-radius: 2px;
`;

const text1 = styled.h2`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #E63F3F;
    margin: unset;
`;

const ButtonBox = styled.div`
    margin:30px 0;
`;

export default {
    Wrapper,
    container,
    uploadImgBox,
    AddBox,
    AddIconBox,
    AddIcon,
    AddText,
    UploadText,
    InputBox,
    Label,
    Input,
    TextArea,
    DropDownContainer,
    DropDownHeader,
    DropDownListContainer,
    DropDownList,
    ListItem,
    IconSpan,
    Icon,
    InputTell,
    Text,
    TelBox,
    Heading,
    YellowText,
    KtcbBox,
    MainBox,
    Box,
    TextBox,
    text,
    TextBox1,
    TextBox2,
    BoxImg,
    ImgBox,
    textInput,
    text1,
    ButtonBox,
}