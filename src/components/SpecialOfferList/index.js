import React from 'react';
import { Wrapper, Title, TableWrap, TableRow, Anchor, TableHeadingThird, TableHeadingFourth, TableHeadingFirst, TableHeadingSecond, TableData } from './style'
import { HiOutlinePencil } from "react-icons/hi";
import { useHistory } from "react-router-dom";

const SpecialOfferList = () => {
    const history = useHistory();

    const Arrayname = [
        { paperon: "Піца “Папероні”", secondrow: "1+1", beginningDate: "11.11.2021", graduatingDate: "11.12.2021" },
        { paperon: "Піца “Папероні”", secondrow: "25% знижки", beginningDate: "11.11.2021", graduatingDate: "11.12.2021" },

    ]
    return (
        <div>
            <Wrapper>
                <TableWrap>
                    <TableRow>
                        <TableHeadingFirst>Акційний товар</TableHeadingFirst>
                        <TableHeadingSecond>Умови акції</TableHeadingSecond>
                        <TableHeadingThird>Дата початку</TableHeadingThird>
                        <TableHeadingFourth>Дата закінчення</TableHeadingFourth>
                        <TableHeadingFourth>Дія</TableHeadingFourth>

                    </TableRow>
                    {Arrayname.map((item, index) => {
                        return (
                            <TableRow>
                                <TableData>{item.paperon}</TableData>
                                <TableData>{item.secondrow}</TableData>
                                <TableData>{item.beginningDate}</TableData>
                                <TableData>{item.graduatingDate}</TableData>
                                <TableData><Anchor onClick={(event) => {
                                    event.preventDefault()
                                    history.push('/specialoffer/item/edit/' + index)
                                }}
                                    href="#"><HiOutlinePencil /></Anchor>
                                </TableData>
                            </TableRow>
                        )
                    })}
                </TableWrap>
            </Wrapper>
        </div>
    );
}

export default SpecialOfferList;
