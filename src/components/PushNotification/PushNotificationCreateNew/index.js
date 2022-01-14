import React, { useState } from 'react';
import Button from '../../AddButtonNew';
import Header from '../../Header';
import D from '../../Product/NewProductAdd/style';
import E from '../../Product/NewProductAdd/UploadImgStyle';
import A from './style';

const PushNotificationCreateNew = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    const checkBox = [
        { ListItem: "Всі населені пункти", ListItem1: "Свидівок ", IDCheckbox: "checkbox", ForCheckbox: "checkbox" },
        { ListItem1: "Лозівок", IDCheckbox: "checkbox1", ForCheckbox: "checkbox1" },
        { ListItem1: "Сокирно", IDCheckbox: "checkbox2", ForCheckbox: "checkbox2" },
        { ListItem1: "Єлизаветівка", IDCheckbox: "checkbox3", ForCheckbox: "checkbox3" },
        { ListItem1: "Будище", IDCheckbox: "checkbox4", ForCheckbox: "checkbox4" },
    ]

    return (
        <D.Wrapper>
            {/* <Header /> */}
            <D.container>
                <D.InputBox>
                    <D.Label>Населений пункт:</D.Label>
                    <D.DropDownContainer>
                        <D.DropDownHeader onClick={toggling}><A.IconImg src="./icons/location.png"></A.IconImg>Всі населені пункти<D.Icon src='arrow-down.png'></D.Icon></D.DropDownHeader>
                        {isOpen && (
                            <D.DropDownListContainer>
                                {checkBox.map((items) => {
                                    return (
                                        <D.DropDownList>
                                            <D.ListItem>{items.ListItem}</D.ListItem>
                                            <A.CheckBox>
                                                <A.CheckBoxIcon type="checkbox" id={items.IDCheckbox}></A.CheckBoxIcon>
                                                <A.ListItemLabel for={items.ForCheckbox}>{items.ListItem1}</A.ListItemLabel>
                                            </A.CheckBox>
                                        </D.DropDownList>
                                    )
                                })}
                            </D.DropDownListContainer>
                        )}
                    </D.DropDownContainer>
                </D.InputBox>
                <D.uploadImgBox>
                    <D.AddBox>
                        {/* <D.AddIconBox> */}
                        {/* <D.AddText><D.AddIcon>+</D.AddIcon> Завантажити</D.AddText> */}
                        <E.UploadText src="./images/2022.png" ></E.UploadText>
                        {/* </D.AddIconBox> */}
                        {/* <D.UploadText type='file' ></D.UploadText> */}
                    </D.AddBox>
                </D.uploadImgBox>
                <E.ImgName>Змінити зображення</E.ImgName>

                <D.InputBox>
                    <D.Label>Заголовок</D.Label>
                    <D.Input type="text" placeholder='Заголовок повідомлення'></D.Input>
                </D.InputBox>
                <D.InputBox>
                    <D.Label>Текст</D.Label>
                    <D.TextArea type="text" placeholder='Напишіть текст'></D.TextArea>
                </D.InputBox>
                <A.ButtonBox>
                    <Button
                        children="Відправити"
                        fontSize={"16px"}
                        fontWeight={"bold"}
                        width='156px'
                        borderRadius={"2px"}
                    ></Button>
                </A.ButtonBox>
            </D.container>
        </D.Wrapper>
    );
}

export default PushNotificationCreateNew;
