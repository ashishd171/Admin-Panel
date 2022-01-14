import React, { useState } from 'react';
import Header from '../../Header';
import D from './style';
import E from './UploadImgStyle';
import FancyModalButton from '../Modal/index';
import { ModalProvider } from "styled-react-modal";
import M from '../Modal/style';
import Button from '../../AddButtonNew';

const UploadImg = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    const Table = [
        { Image: "drag-icon.png", placeholder: "Кукурудза", placeholder1: "10", Text: "грн", Text1: "Видалити" },
        { Image: "drag-icon.png", placeholder: "Кукурудза", placeholder1: "10", Text: "грн", Text1: "Видалити" },
        { Image: "drag-icon.png", placeholder: "Кукурудза", placeholder1: "10", Text: "грн", Text1: "Видалити" },
    ]


    return (
        <D.Wrapper>
            {/* <Header /> */}
            <ModalProvider backgroundComponent={M.FadingBackground}>
                <FancyModalButton />
            </ModalProvider>
            <D.container>
                <D.uploadImgBox>
                    <E.AddIconBox>
                        <E.UploadText src="./images/Pizzaimage.png" ></E.UploadText>
                    </E.AddIconBox>
                    <D.UploadText type='file' ></D.UploadText>
                </D.uploadImgBox>
                <E.ImgName>Змінити фото</E.ImgName>
                <D.InputBox>
                    <D.Label>Назва</D.Label>
                    <D.Input type="text" placeholder='Введіть назву'></D.Input>
                </D.InputBox>
                <D.InputBox>
                    <D.Label>Опис</D.Label>
                    <D.TextArea type="text" placeholder='Опис'></D.TextArea>
                </D.InputBox>
                <D.InputBox>
                    <D.Label>Статус</D.Label>
                    <D.DropDownContainer>
                        <D.DropDownHeader onClick={toggling}><D.IconSpan></D.IconSpan>Активный<D.Icon src='arrow-down.png'></D.Icon></D.DropDownHeader>
                        {isOpen && (
                            <D.DropDownListContainer>
                                <D.DropDownList>
                                    <D.ListItem>Активный</D.ListItem>
                                </D.DropDownList>
                            </D.DropDownListContainer>
                        )}
                    </D.DropDownContainer>
                </D.InputBox>
                <D.InputBox>
                    <D.Label>Ціна</D.Label>
                    <D.TelBox>
                        <D.InputTell type="text" placeholder='00'></D.InputTell>
                        <D.Text>грн</D.Text>
                    </D.TelBox>
                </D.InputBox>
                <D.Heading>Додаткові опції</D.Heading>
                <D.InputBox>
                    <D.Label>К-сть</D.Label>
                    <D.KtcbBox>
                        <D.InputTell type="text" placeholder='0'></D.InputTell>
                        <D.YellowText>Додати опцію</D.YellowText>
                    </D.KtcbBox>
                </D.InputBox>
                <D.MainBox>
                    <D.Box></D.Box>
                    <D.TextBox>
                        <D.text>Назва опції</D.text>
                    </D.TextBox>
                    <D.TextBox1>
                        <D.text>Ціна</D.text>
                    </D.TextBox1>
                    <D.TextBox2>
                        <D.text>Дія</D.text>
                    </D.TextBox2>
                </D.MainBox>
                {Table.map((items, index) => {
                    return (
                        <D.MainBox>
                            <D.ImgBox>
                                <D.BoxImg src={items.Image}></D.BoxImg>
                            </D.ImgBox>
                            <D.TextBox>
                                <D.textInput type="text" placeholder={items.placeholder}></D.textInput>
                            </D.TextBox>
                            <D.TextBox1>
                                <D.TelBox>
                                    <D.InputTell type="text" placeholder={items.placeholder1}></D.InputTell>
                                    <D.Text>{items.Text}</D.Text>
                                </D.TelBox>
                            </D.TextBox1>
                            <D.TextBox2>
                                <D.text1>{items.Text1}</D.text1>
                            </D.TextBox2>
                        </D.MainBox>
                    )
                })}
                <E.TextBox>Дані оновлено</E.TextBox>
                <D.ButtonBox>
                    <Button
                        children="Зберегти"
                        fontSize={"16px"}
                        fontWeight={"bold"}
                        width='156px'
                        borderRadius={"2px"}
                    ></Button>
                </D.ButtonBox>
            </D.container>
        </D.Wrapper>
    );
}

export default UploadImg;
