import React, { useState } from 'react';
import Header from '../../Header';
import D from '../../Product/NewProductAdd/style';
import B from './style';
import FancyModalButton from '../../Product/Modal';
import { ModalProvider } from "styled-react-modal";
import E from '../../Product/NewProductAdd/UploadImgStyle';
import M from '../../Product/Modal';



const PushNotificationDetails = () => {

    const UserName = [
        { HeadingName: "Дата", NameText: "11.11.2021" },
        { HeadingName: "Заголовок", NameText: "Назва листа" },
        { HeadingName: "Отримувач", NameText: "Всі населені пункти" },
        { HeadingName: "Текст", NameText: "Неодноразово замовляю доставку з цієї піцерії, поганого нічого не можу сказати, окрім гастрономічного кайфу))) Піца дуже смачна, особливо Папероні! " },
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
                        <E.UploadText src="./images/2022.png" ></E.UploadText>
                    </E.AddIconBox>
                </D.uploadImgBox>
                {UserName.map((Name) => {
                    return (
                        <D.InputBox>
                            <B.NameHeading>{Name.HeadingName}</B.NameHeading>
                            <B.NameText>{Name.NameText}</B.NameText>
                        </D.InputBox>
                    )
                })}
            </D.container>
        </D.Wrapper>
    );
}

export default PushNotificationDetails;
