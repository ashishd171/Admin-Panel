import react, { useState } from "react";
import AllOrderTable from "../../Order/Table";
import Table from './style';
import { MainBox, TH1, TH2, TH3, TH4, TH5, TH6, TableBox, ImageIcon, } from './style'


const PushNotificationList = () => {

    const TableRow = [
        { Date: "11.11.2021", Name: "Свидівок, Лозівок", Header: "Заголовок",Response: "Текстова частина листа...", Action: "./icons/View.png" },
        { Date: "11.11.2021", Name: "Всі населені пункти", Header: "Заголовок",Response: "Текстова частина листа...", Action: "./icons/View.png" },
        { Date: "11.11.2021", Name: "Всі населені пункти", Header: "Заголовок",Response: "Текстова частина листа...", Action: "./icons/View.png" },
        { Date: "11.11.2021", Name: "Всі населені пункти", Header: "Заголовок",Response: "Текстова частина листа...", Action: "./icons/View.png" },
        { Date: "11.11.2021", Name: "Всі населені пункти", Header: "Заголовок",Response: "Текстова частина листа...", Action: "./icons/View.png" },
        
    ]

    const rattingImg = [
        { Ratting: "./images/userphoto.svg" },
       
    ]
    return (
        <MainBox>
            <TableBox>
                <Table.Table>
                    <Table.Head>
                        <Table.TR>
                            <TH1>Дата</TH1>
                            <TH2>Зображення</TH2>
                            <TH3>Отримувач</TH3>
                            <TH4>Заголовок</TH4>
                            <TH5>Текст</TH5>
                            <TH6>Дія</TH6>
                        </Table.TR>
                    </Table.Head>
                    <Table.Body>
                        {TableRow.map((items, index) => {
                            return (
                                <Table.TR key={index}>
                                    <Table.TD>{items.Date}</Table.TD>
                                    <Table.TD>{rattingImg.map((img, index) => {
                                            return (
                                                <>
                                                    {index - 2 ? <ImageIcon src={img.Ratting}></ImageIcon>
                                                    : null}
                                                </>
                                            )
                                        })}</Table.TD>
                                    <Table.TD>{items.Name}</Table.TD>
                                    <Table.TD>{items.Header}</Table.TD>
                                    <Table.TD>{items.Response}</Table.TD>
                                    <Table.TD><ImageIcon src={items.Action}></ImageIcon></Table.TD>
                                </Table.TR>
                            )
                        })}
                    </Table.Body>
                </Table.Table>
            </TableBox>
        </MainBox>
    )
}

export default PushNotificationList;