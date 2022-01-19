import React, { useState } from 'react';
import Button from '../../AddButtonNew';
import Header from '../../Header';
import D from './style'

const NewProductAdd = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    const dropDown = [1, 2, 3]

    return (
        <D.Wrapper>
            {/* <Header /> */}
            <D.container>
                <D.uploadImgBox>
                    <D.AddBox>
                        <D.AddIconBox>
                            <D.AddText><D.AddIcon>+</D.AddIcon> Завантажити</D.AddText>
                        </D.AddIconBox>
                        <D.UploadText type='file' ></D.UploadText>
                    </D.AddBox>

                </D.uploadImgBox>
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
                        <D.DropDownHeader onClick={toggling}><D.IconSpan></D.IconSpan>Активный<D.Icon src='/images/arrow-down.png'></D.Icon></D.DropDownHeader>
                        {isOpen && (
                            <D.DropDownListContainer>
                                <D.DropDownList>
                                    {dropDown.map((items, index) => {
                                        return (
                                            <D.ListItem><D.IconSpan></D.IconSpan> Активный</D.ListItem>
                                        )
                                    })}
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
                <D.MainBox>
                    <D.ImgBox>
                        <D.BoxImg src="/icons/drag-icon.png"></D.BoxImg>
                    </D.ImgBox>
                    <D.TextBox>
                        <D.textInput type="text" placeholder='Введіть назву'></D.textInput>
                    </D.TextBox>
                    <D.TextBox1>
                        <D.TelBox>
                            <D.InputTell type="text" placeholder='00'></D.InputTell>
                            <D.Text>грн</D.Text>
                        </D.TelBox>
                    </D.TextBox1>
                    <D.TextBox2>
                        <D.text1>Видалити</D.text1>
                    </D.TextBox2>
                </D.MainBox>
                <D.ButtonBox>
                    <Button
                        children="Зберегти"
                        backgroundColor={"#F5F5F5"}
                        border='1px solid #E9E9E9'
                        borderRadius={"2px"}
                        color='#A4A4A4'
                        width='156px'
                        padding='10px 43px'
                        height='unset'
                        marginRight="10px"
                    />
                    <Button
                        children="Відмінити"
                        backgroundColor={"#F5F5F5"}
                        border='1px solid #D9D9D9'
                        borderRadius={"2px"}
                        color='#1C1C1C'
                        width='156px'
                        padding='10px 43px'
                        height='unset'
                    />
                </D.ButtonBox>
            </D.container>
        </D.Wrapper>
    );
}

export default NewProductAdd;
