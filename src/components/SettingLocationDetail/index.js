import React from 'react';
import InputBox from '../InputBox';
import Button from '../AddButtonNew'
import {Wrapper,DetailPage,Anchor} from './style'
import { RiDeleteBinLine } from "react-icons/ri";

const SettingLocationDetail = () => {
    return (
        <Wrapper>
           <DetailPage>
                <InputBox className="inputstyle" placeholder={"Лозівок"}  label={" Населений пункт:"}  />
                <Button children={"Зберегти"} alignSelf={"center"} float={"right"} width={156} />
            </DetailPage>
            <Anchor href="#"><RiDeleteBinLine />  Видалити локацію</Anchor>
            
        </Wrapper>
    );
}

export default SettingLocationDetail;
