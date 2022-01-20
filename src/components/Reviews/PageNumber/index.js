import react, { useState } from "react";
import Table from './style';
import D from '../../Product/NewProductAdd/style'

const PageNumber = () => {

    const Number = [
        { Number1: "4" },
        { Number1: "5" },
        { Number1: "6" },
        { Number1: "7" },
        { Number1: "8" },
    ]

    return (
        <>
            <Table.NumberBox>
                <Table.Positions>1-100 з 1000 позицій</Table.Positions>
                <Table.ArrowBox>
                    <Table.ArrowIcon src="./icons/left.png"></Table.ArrowIcon>
                </Table.ArrowBox>
                <Table.ArrowBox>
                    <Table.Number>1</Table.Number>
                </Table.ArrowBox>
                <Table.ArrowBox>
                    <Table.Loaded src="./icons/loaded.png"></Table.Loaded>
                </Table.ArrowBox>
                {Number.map((number, index) => {
                    return (
                        <Table.ArrowBox key={index}>
                            <Table.Number>{number.Number1}</Table.Number>
                        </Table.ArrowBox>
                    )
                })}
                <Table.ArrowBox>
                    <Table.Loaded src="./icons/loaded.png"></Table.Loaded>
                </Table.ArrowBox>
                <Table.ArrowBox>
                    <Table.Number>50</Table.Number>
                </Table.ArrowBox>
                <Table.ArrowBox>
                    <Table.ArrowIcon src="./icons/right.png"></Table.ArrowIcon>
                </Table.ArrowBox>
                <Table.InputBox>
                    <D.DropDownContainer>
                        <Table.DropDownHeader
                        >6/сторінка<D.Icon src='./images/arrow-down.png'></D.Icon></Table.DropDownHeader>
                    </D.DropDownContainer>
                </Table.InputBox>
            </Table.NumberBox>
        </>
    )
}

export default PageNumber;