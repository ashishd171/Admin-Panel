import React, { useState } from 'react';
import Header from '../../Header';
import D from '../../Product/NewProductAdd/style'
import B from './style';
import FancyModalButton from '../../Product/Modal/index';
import { ModalProvider } from "styled-react-modal";
import E from '../../Product/NewProductAdd/UploadImgStyle';
import M from '../../Product/Modal/style';
import { RattingIcon } from '../ReviewTable/style';



const ReviewProfile = () => {

    const UserName = [
        { HeadingName: "Ім’я", NameText: "Ольга Іванова" },
        { HeadingName: "Дата ", NameText: "21.11.2021" },
        { HeadingName: "Оцінка", Ratting: "./icons/star.png", },
        { HeadingName: "Відгук", NameText: "Неодноразово замовляю доставку з цієї піцерії, поганого нічого не можу сказати, окрім гастрономічного кайфу))) Піца дуже смачна, особливо Папероні!  " },
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
                        <E.UploadText src="./images/paperoni_image.png" ></E.UploadText>
                    </E.AddIconBox>
                </D.uploadImgBox>
                {UserName.map((Name, index) => {
                    return (
                        <D.InputBox>
                            <B.NameHeading>{Name.HeadingName}</B.NameHeading>
                            <B.NameText>{Name.NameText}</B.NameText>
                            <RattingIcon src={Name.Ratting}></RattingIcon>
                            <RattingIcon src={Name.Ratting}></RattingIcon>
                            <RattingIcon src={Name.Ratting}></RattingIcon>
                            <RattingIcon src={Name.Ratting}></RattingIcon>
                            <RattingIcon src={Name.Ratting}></RattingIcon>
                        </D.InputBox>
                    )
                })}
            </D.container>
        </D.Wrapper>
    );
}

export default ReviewProfile;
