import React from 'react';
import DeleteButton from '../../../components/DeleteButton';
import InputBox from '../../../components/InputBox/index';
import { Image,Addnew,Imagediv,AddNewInput,AddnewSubWrapper } from './style';
import Button from '../../../components/AddButtonNew';

const AddNew = () => {
    return (
        <>
       
        <Addnew>
            <DeleteButton children="Видалити" float="right" margin="24px 39px 0px 0px" marginTop="24px" color="red"  />
            <AddnewSubWrapper> 
                <Imagediv>
                    <Image src="./images/LunchImage.png" />
                </Imagediv>
                <AddNewInput>
                    <InputBox placeholder="Введіть назву" label="Назва"  className="inputbox" />
                </AddNewInput>
                <Button children="Зберегти" backgroundColor="#F5F5F5" padding="8px 43px" width="156px" color="#A4A4A4" /> 
                <Button  children="Відмінити"   border=" 1px solid #D9D9D9" color="#1C1C1C" width="156px"  margin= "0px 0px 0px 8px" backgroundColor="#fff" />
            </AddnewSubWrapper>
        </Addnew>
        </>
    );
}

export default AddNew;