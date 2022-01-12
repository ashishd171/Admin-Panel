import React from 'react';
import HomepageHeader from '../HomepageHeader';
import S from '../HomepageHeader/style';
import D from '../Product/NewProductAdd/style';
import E from '../Product/NewProductAdd/UploadImgStyle';
import F from './style'


const UserProfileHeader = () => {

    const UserName = [
        { HeadingName: "Ім’я та Прізвище", NameText: "Ольга Іванова" },
        { HeadingName: "Дата реєстрації", NameText: "21.10.2021" },
        { HeadingName: "Номер телефону", NameText: "+38050 000-00-00" },
        { HeadingName: "Населений пункт", NameText: "Лозівок" },
    ]

    return (
        <D.Wrapper>
        {/* <HomepageHeader /> */}
            <D.container>
                <D.uploadImgBox>
                    <E.AddIconBox>
                        <E.UploadText src="./images/Pizzaimage.png" ></E.UploadText>
                    </E.AddIconBox>
                </D.uploadImgBox>
                {UserName.map((Name) => {
                    return (
                        <D.InputBox>
                            <F.NameHeading>{Name.HeadingName}</F.NameHeading>
                            <F.NameText>{Name.NameText}</F.NameText>
                        </D.InputBox>
                    )
                })}
            </D.container>
        </D.Wrapper>
    );
}

export default UserProfileHeader;
