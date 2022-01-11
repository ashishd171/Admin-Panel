import React from 'react';
import {Wrapper, Title,TableWrap, TableRow, TableHeadingThird,TableHeadingFourth,TableDataTotal, TableHeadingFirst, TableHeadingSecond, TableData } from './style'

const OutleyDefaultState = () => {
    const Arrayname=[
        {paperon: "Папероні"},
        {paperon: "Нагетси"},
        {paperon: "Картопля фрі"},
    ]
    return (
        <div>
            <Wrapper>
            <Title>Товари</Title>
            <TableWrap>
                    <TableRow>
                        <TableHeadingFirst>Назва</TableHeadingFirst>
                        <TableHeadingSecond>Ціна</TableHeadingSecond>
                        <TableHeadingThird>К-ть</TableHeadingThird>
                        <TableHeadingFourth>Всього</TableHeadingFourth>
                    </TableRow>
                    {Arrayname.map((item, index) => {
                        return (
                            <TableRow>
                                <TableData>{item.paperon}</TableData>
                                <TableData>150</TableData>
                                <TableData>5</TableData>
                                <TableData>750</TableData>
                                

                            </TableRow>
                        )
                    })}
                    <TableRow>
                    <TableHeadingFirst>Всього:</TableHeadingFirst>
                    <TableData></TableData>
                    <TableData></TableData>
                    <TableDataTotal>2250</TableDataTotal>
                    </TableRow>
                </TableWrap>

                <Title>Доставка</Title>
            <TableWrap>
                    <TableRow>
                        <TableHeadingFirst>Адреса</TableHeadingFirst>
                        <TableHeadingSecond></TableHeadingSecond>
                        <TableHeadingThird></TableHeadingThird>
                        <TableHeadingFourth></TableHeadingFourth>
                    </TableRow>
                    {Arrayname.map((item, index) => {
                        return (
                            <TableRow>
                                <TableData>{item.paperon}</TableData>
                                <TableData></TableData>
                                <TableData></TableData>
                                <TableData>50</TableData>
                                

                            </TableRow>
                        )
                    })}
                    <TableRow>
                    <TableHeadingFirst>Всього:</TableHeadingFirst>
                    <TableData></TableData>
                    <TableData></TableData>
                    <TableDataTotal>50</TableDataTotal>
                    </TableRow>

                    <TableRow>
                        <TableHeadingFirst>Разом прибуток:</TableHeadingFirst>
                        <TableData></TableData>
                        <TableData></TableData>
                        <TableDataTotal>2300</TableDataTotal>
                    </TableRow>
                </TableWrap>

                
            </Wrapper>
        </div>
    );
}

export default OutleyDefaultState;
