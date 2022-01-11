import React from 'react';
import Button from '../AddButtonNew';
import {Wrapper,Card,Image,TakePhoto} from './style'

const CatagoryItemEdit = () => {
    return (
        <Wrapper>
            <Card>
                <Image src="./images/Lunch-image.png" />
                <TakePhoto>Змінити фото</TakePhoto>
                <Button children={'Зберегти'} width={156} />
            </Card>
        </Wrapper>
    );
}

export default CatagoryItemEdit;
