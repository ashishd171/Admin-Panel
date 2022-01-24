import react, { useState } from "react";
import { Container, ProfileNameBox, ProfileTextHead, TextBox, ProfileText, ProfileImg, TextBoxMain, PaymentMethodbox, TotalPaymentText } from './style'


const OrderProfile = () => {

    const Deliverys = [
        { Delivery: "Спосіб доставки", DeliveryName: "Доставка курьером" },
        { Delivery: "Адреса доставки", DeliveryName: "вул. Партизанська,8 с. Свидівок" },
        { Delivery: "Час", DeliveryName: "Як найшвидше" },
        { Delivery: "Спосіб оплати", DeliveryName: "Готівка" },
        { Delivery: "Повар", DeliveryName: "Марія Іванова" },
        { Delivery: "Курьер", DeliveryName: "ГотівІван Івановка" },
    ]

    return (
        <>
            <Container>
                <ProfileNameBox>
                    <TextBoxMain>
                        <TextBox>
                            <ProfileTextHead>Клієнт</ProfileTextHead>
                            <ProfileText>Ольга Іванова</ProfileText>
                        </TextBox>
                        <TextBox>
                            <ProfileTextHead>Телефон</ProfileTextHead>
                            <ProfileText>+38050-000-00-00</ProfileText>
                        </TextBox>
                    </TextBoxMain>
                    <ProfileImg src="./images/default.png"></ProfileImg>
                </ProfileNameBox>
                <ProfileNameBox>
                    <TextBoxMain>
                        {Deliverys.map((details, index) => {
                            return (
                                <TextBox key={index}>
                                    <ProfileTextHead>{details.Delivery}</ProfileTextHead>
                                    <ProfileText>{details.DeliveryName}</ProfileText>
                                </TextBox>
                            )
                        })}
                    </TextBoxMain>
                </ProfileNameBox>
                <ProfileTextHead>Сума</ProfileTextHead>
                <PaymentMethodbox>
                    <ProfileText>Замовлення:</ProfileText>
                    <ProfileText>300 грн</ProfileText>
                </PaymentMethodbox>
                <PaymentMethodbox>
                    <ProfileText>Доставка::</ProfileText>
                    <ProfileText>50 грн</ProfileText>
                </PaymentMethodbox>
                <PaymentMethodbox>
                    <TotalPaymentText>Всього:</TotalPaymentText>
                    <TotalPaymentText>350 грн</TotalPaymentText>
                </PaymentMethodbox>
            </Container>
        </>
    )
}

export default OrderProfile;