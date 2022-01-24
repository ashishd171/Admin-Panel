import react, { useState } from "react";
import OrderProfile from "../OrderProfile";
import Table from '../Table/style';
import { MainBox, Status, Span, TH1, TH2, TH3, Span1, TableBox } from './style'


const OrderDetails = () => {

    const TableRow = [
        { Number: "Піца Папероні", Span: "Сир моцарела, Кукурудза", Date: "2", Status: "150" },
        { Number: "Піца Сирна", Span: "Сир моцарела, Кукурудза", Date: "2", Status: "150" },
    ]

    return (
        <>
            <MainBox>
                <TableBox>
                <Status>Статус: <Span>Доставлено</Span></Status>
                <Table.Table>
                    <Table.Head>
                        <Table.TR>
                            <TH1>Товар</TH1>
                            <TH2>К-сть</TH2>
                            <TH3>Ціна</TH3>
                        </Table.TR>
                    </Table.Head>
                    <Table.Body>
                        {TableRow.map((items, index) => {
                            return (
                                <Table.TR key={index}>
                                    <Table.TD>{items.Number}<br /><Span1>{items.Span}</Span1></Table.TD>
                                    <Table.TD>{items.Date}</Table.TD>
                                    <Table.TD>{items.Status}</Table.TD>
                                </Table.TR>
                            )
                        })}
                    </Table.Body>
                </Table.Table>
                </TableBox>
                <OrderProfile />
            </MainBox>
        </>
    )
}

export default OrderDetails;