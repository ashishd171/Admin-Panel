import React from 'react';
import { Wrapper, TableWrap, TableBody,TableRow, TableHeadingThird,Anchor, TableHeadingFirst, TableHeadingSecond, TableData } from './style';
import { HiOutlinePencil } from "react-icons/hi";

const SettingLocationTable = () => {

    const Arrayname = [1,2,3,4,5]

    return (
        <div>
            <Wrapper>
                <TableWrap>
                    <TableBody>
                    <TableRow>
                        <TableHeadingFirst>№</TableHeadingFirst>
                        <TableHeadingSecond>Населений пункт</TableHeadingSecond>
                        <TableHeadingThird>Дія</TableHeadingThird>
                    </TableRow>
                    {Arrayname.map((item, index) => {
                        return (
                            <TableRow key={index}>
                                <TableData>1</TableData>
                                <TableData>Свидівок</TableData>
                                <TableData className="icon"><Anchor href="#"><HiOutlinePencil /></Anchor></TableData>
                            </TableRow>
                        )
                    })}
                    </TableBody>
                </TableWrap>
            </Wrapper>

        </div>
    );
}

export default SettingLocationTable;
