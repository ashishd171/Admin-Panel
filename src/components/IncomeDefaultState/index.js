import React from 'react';
import {Wrapper, Title,TableWrap, TableRow,TableFooter, TableHeadingThird,TableHeadingFourth,TableDataTotal, TableHeadingFirst, TableHeadingSecond, TableData } from './style'

const IncomeDefaultState = () => {
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
                        <TableHeadingFirst colSpan="5">Назва</TableHeadingFirst>
                        <TableHeadingSecond>Ціна</TableHeadingSecond>
                        <TableHeadingThird>К-ть</TableHeadingThird>
                        <TableHeadingFourth>Всього</TableHeadingFourth>
                    </TableRow>
                    {Arrayname.map((item, index) => {
                        return (
                            <TableRow >
                                <TableData colSpan="5">{item.paperon}</TableData>
                                <TableData>150</TableData>
                                <TableData>5</TableData>
                                <TableData>750</TableData>
                                

                            </TableRow>
                        )
                    })}
                    <TableFooter>
                    <TableDataTotal colSpan="5">Всього:</TableDataTotal>
                    <TableData></TableData>
                    <TableData></TableData>
                    <TableDataTotal>2250</TableDataTotal>
                    </TableFooter>
                </TableWrap>

                <Title>Доставка</Title>
            <TableWrap>
                    <TableRow>
                        <TableDataTotal>Адреса</TableDataTotal>
                        
                    </TableRow>
                    {Arrayname.map((item, index) => {
                        return (
                            <TableRow>
                                <TableData colSpan='5'>{item.paperon}</TableData>
                                <TableData></TableData>
                                <TableData></TableData>
                                <TableData>50</TableData>
                                

                            </TableRow>
                        )
                    })}
                    <TableRow>
                    <TableDataTotal colSpan="5">Всього:</TableDataTotal>
                    <TableData></TableData>
                    <TableData></TableData>
                    <TableDataTotal>50</TableDataTotal>
                    </TableRow>

                    <TableFooter>
                        <TableDataTotal colSpan="5">Разом прибуток:</TableDataTotal>
                        <TableData></TableData>
                        <TableData></TableData>
                        <TableDataTotal>2300</TableDataTotal>
                    </TableFooter>
                </TableWrap>

                
            </Wrapper>
        </div>
    );
}

export default IncomeDefaultState;
