import React from 'react';
import {Wrapper,Input,Label} from './style';

const InputBox = ({label,placeholder,className}) => {

    return (
        <Wrapper>
            <Label>{label}</Label> 
            <Input id="fname" placeholder={placeholder} className={className} type="text" />
        </Wrapper>
    );
}
export default InputBox;