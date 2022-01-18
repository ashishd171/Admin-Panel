import react, { useState } from "react";
import AllOrderTable from "../../Order/Table";
import PageNumber from "../../Reviews/PageNumber";
import Table from './style';
import { MainBox, TH1, TH2, TH3, TH4, TH5, TH6, TableBox, TD3 } from './style'


const UserOrderHistoryList = () => {

    const TableRow = [
        { No:"3456" ,Date: "21.10.21 18:30", Status:"Доставлено", Name: "Ольга Іванова", Address: "вул. Партизанська,8 с. Свидівок",PaymentType: "Готівка", Amount: "350 грн" },
        { No:"3456" ,Date: "21.10.21 18:30", Status:"Доставлено", Name: "Ольга Іванова", Address: "вул. Партизанська,8 с. Свидівок",PaymentType: "Готівка", Amount: "350 грн" },
        { No:"3456" ,Date: "21.10.21 18:30", Status:"Доставлено", Name: "Ольга Іванова", Address: "вул. Партизанська,8 с. Свидівок",PaymentType: "Готівка", Amount: "350 грн" },
        { No:"3456" ,Date: "21.10.21 18:30", Status:"Доставлено", Name: "Ольга Іванова", Address: "вул. Партизанська,8 с. Свидівок",PaymentType: "Готівка", Amount: "350 грн" },
        { No:"3456" ,Date: "21.10.21 18:30", Status:"Доставлено", Name: "Ольга Іванова", Address: "вул. Партизанська,8 с. Свидівок",PaymentType: "Готівка", Amount: "350 грн" },
        { No:"3456" ,Date: "21.10.21 18:30", Status:"Доставлено", Name: "Ольга Іванова", Address: "вул. Партизанська,8 с. Свидівок",PaymentType: "Готівка", Amount: "350 грн" },
        { No:"3456" ,Date: "21.10.21 18:30", Status:"Доставлено", Name: "Ольга Іванова", Address: "вул. Партизанська,8 с. Свидівок",PaymentType: "Готівка", Amount: "350 грн" },
        { No:"3456" ,Date: "21.10.21 18:30", Status:"Доставлено", Name: "Ольга Іванова", Address: "вул. Партизанська,8 с. Свидівок",PaymentType: "Готівка", Amount: "350 грн" },
        { No:"3456" ,Date: "21.10.21 18:30", Status:"Доставлено", Name: "Ольга Іванова", Address: "вул. Партизанська,8 с. Свидівок",PaymentType: "Готівка", Amount: "350 грн" },
        { No:"3456" ,Date: "21.10.21 18:30", Status:"Доставлено", Name: "Ольга Іванова", Address: "вул. Партизанська,8 с. Свидівок",PaymentType: "Готівка", Amount: "350 грн" },
        
    ]

    // const rattingImg = [
    //     { Ratting: "./images/userphoto.svg" },
       
    // ]
    return (
        <>
            <TableBox>
                <Table.Table>
                    <Table.Head>
                        <Table.TR>
                            <TH1>№</TH1>
                            <TH2>Дата та час</TH2>
                            <TH3>Статус</TH3>
                            <TH4>Адеса</TH4>
                            <TH5>Тип оплати</TH5>
                            <TH6>Сума</TH6>
                        </Table.TR>
                    </Table.Head>
                    <Table.Body>
                        {TableRow.map((items, index) => {
                            return (
                                <Table.TR>
                                    <Table.TD>{items.No}</Table.TD>
                                    <Table.TD>{items.Date}</Table.TD>
                                    <Table.TD3>{items.Status}</Table.TD3>
                                    <Table.TD>{items.Address}</Table.TD>
                                    <Table.TD>{items.PaymentType}</Table.TD>
                                    <Table.TD>{items.Amount}</Table.TD>
                                </Table.TR>
                            )
                        })}
                    </Table.Body>
                </Table.Table>
            </TableBox>
            <PageNumber  />
        </>
    )
}

export default UserOrderHistoryList;