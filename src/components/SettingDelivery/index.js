import React from 'react';
import {Wrapper,Heading, Currency,Unit,Div,TableHeadingFourth,TableWrap, TableRow, TableHeadingThird,Anchor, TableHeadingFirst, TableHeadingSecond, TableData}  from './style'
import { IoLocationOutline } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from '../AddButtonNew';
import InputBox from '../InputBox';
const SettingDelivery = () => {
    const Arrayname = [1,2,3]
    return (
        <Wrapper>
            <Heading>Безкоштовна доставка від</Heading>
            <Div><Currency>200</Currency><Unit>грн</Unit></Div>
            {/* <LocalityText>Населений пункт</LocalityText> */}
            <TableWrap>
                <TableRow>
                    <TableHeadingFirst>Населений пункт</TableHeadingFirst>
                    <TableHeadingSecond>Ціна</TableHeadingSecond>
                    <TableHeadingThird>Час</TableHeadingThird>
                    <TableHeadingThird></TableHeadingThird>
                    <TableHeadingFourth>Дія</TableHeadingFourth>
                </TableRow>
                {Arrayname.map((item, index) => {
                    return (
                        <TableRow>
                            <TableData><InputBox placeholder={"Лозівок"} className="inputBox" /></TableData>
                            <TableData><Div><Currency>40</Currency><Unit>грн</Unit></Div></TableData>
                            <TableData><Div><Currency>00</Currency><Unit>год</Unit></Div></TableData>
                            <TableData><Div><Currency>30</Currency><Unit>XB</Unit></Div></TableData>
                            <TableData><Anchor href="#"><RiDeleteBin5Line /></Anchor></TableData>
                        </TableRow>
                    )
                })}
            </TableWrap>
            <Button children={"Зберегти"} float={"right"} width={156} />
        </Wrapper>
    );
}

export default SettingDelivery;
