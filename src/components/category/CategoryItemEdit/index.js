
import React, { useState } from 'react';
import E from '../../Product/NewProductAdd/UploadImgStyle';
import D from '../../Product/NewProductAdd/style';
import FancyModalButton from '../../Product/Modal';
import { ModalProvider } from "styled-react-modal";
import M from '../../Product/Modal/style';
import Header from '../../Header';
import Button from '../../AddButtonNew';

const CategoryItemEdit = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    const dropDown = [1,2,3]

    return (
        <D.Wrapper>
            {/* <Header /> */}
            <ModalProvider backgroundComponent={M.FadingBackground}>
                <FancyModalButton />
            </ModalProvider>
            <D.container>
                <D.uploadImgBox>
                    <D.AddBox>
                        {/* <D.AddIconBox> */}
                        {/* <D.AddText><D.AddIcon>+</D.AddIcon> Завантажити</D.AddText> */}
                        <E.UploadText src="/images/Lunch-image.png" ></E.UploadText>
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
                <Button showButton={true} children={"Зберегти"} marginTop="32" width="156px" />
            </D.container>
        </D.Wrapper>
    );
}

export default CategoryItemEdit;
