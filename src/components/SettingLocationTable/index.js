import React from 'react';
import { Wrapper, TableWrap, TableRow, TableHeadingThird,Anchor, TableHeadingFirst, TableHeadingSecond, TableData } from './style';
import { HiOutlinePencil } from "react-icons/hi";

const SettingLocationTable = () => {

    const Arrayname = [1,2,3,4,5]

    return (
        <div>
            <Wrapper>
                <TableWrap>
                    <TableRow>
                        <TableHeadingFirst>№</TableHeadingFirst>
                        <TableHeadingSecond>Населений пункт</TableHeadingSecond>
                        <TableHeadingThird>Дія</TableHeadingThird>
                    </TableRow>
                    {Arrayname.map((item, index) => {
                        return (
                            <TableRow>
                                <TableData>1</TableData>
                                <TableData>Свидівок</TableData>
                                <TableData className="icon"><Anchor href="#"><HiOutlinePencil /></Anchor></TableData>
                            </TableRow>
                        )
                    })}
                </TableWrap>
            </Wrapper>

        </div>
    );
}

export default SettingLocationTable;
