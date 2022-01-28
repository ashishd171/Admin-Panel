import React from 'react';
import { Wrapper, Title, TableWrap, TableBody, TableRow, TableFooter, TableDataEdit, Anchor, TableHeadingThird, TableHeadingFourth, TableDataTotal, TableHeadingFirst, TableHeadingSecond, TableData } from './Style'

const FinanceCostList = () => {
    const Arrayname = [
        { paperon: "Папероні" },
        { paperon: "Нагетси" },
        { paperon: "Картопля фрі" },
    ]
    return (
        <div>
            <Wrapper>
                <Title>Основні</Title>
                <TableWrap>
                    <TableBody>
                        <TableRow>
                            <TableHeadingFirst>Назва</TableHeadingFirst>
                            <TableHeadingSecond>Кукурудза</TableHeadingSecond>
                            <TableHeadingThird>Ціна</TableHeadingThird>
                            <TableHeadingThird>К-ть</TableHeadingThird>
                            <TableHeadingFourth>Всього</TableHeadingFourth>
                            <TableHeadingFourth>Дія</TableHeadingFourth>
                        </TableRow>
                        {Arrayname.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableData>{item.paperon}</TableData>
                                    <TableData>Піца</TableData>
                                    <TableData>30</TableData>
                                    <TableData>25</TableData>
                                    <TableData>750</TableData>
                                    <TableDataEdit><Anchor href="">Редагувати</Anchor></TableDataEdit>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableDataTotal>Всього:</TableDataTotal>
                            <TableData></TableData>
                            <TableData></TableData>
                            <TableData></TableData>
                            <TableData></TableData>
                            <TableDataTotal>1455</TableDataTotal>
                        </TableRow>
                    </TableFooter>
                </TableWrap>
            </Wrapper>
        </div>
    );
}
export default FinanceCostList;