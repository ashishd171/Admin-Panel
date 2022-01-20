import React from 'react';
import { Container } from 'reactstrap';
import CheckBox from '../../components/CheckBox/input';
import  InputBox from '../../components/InputBox/index';
import AddButtonNew from '../../components/AddButtonNew';
import {Wrapper,FormWrap, MainSection,Image,Form,Title,Alert} from './style'

const LogIn = ({showButton}) => {
    return (
        <Wrapper>
            <Container>
                <FormWrap>
                <MainSection>
                    <Form>
                        <Image src='./images/pizza.png' />
                        <Title>Увійти</Title>
                        <InputBox  label={"Email"} placeholder={"Введіть e-mail"}/>
                        <InputBox  label={"Пароль"} placeholder={"ВВведіть пароль"}/>
                        <Alert>Невірний E-mail або Пароль, спробуйте ще раз.</Alert>
                        <CheckBox Checked={"Запам’ятати мене"} />
                        <AddButtonNew showButton={true} width={360} marginTop={26} marginBottom={24}>Увійти</AddButtonNew>
                    </Form>
                </MainSection>
                </FormWrap>
           </Container>

        </Wrapper>
    );
}

export default LogIn;