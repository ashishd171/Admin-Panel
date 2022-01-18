import react, { useState } from "react";
import AllOrderTable from "../../Order/Table";
import PageNumber from "../../Reviews/PageNumber";
import Table from './style';
import { MainBox, TH1, TH2, TH3, TH4, TH5, TH6, TableBox, ImageIcon, } from './style'


const UserList = () => {

    const TableRow = [
        { Date: "Ольга Іванова", Name: "Ольга Іванова", Address: "вул. Партизанська,8 с. Свидівок",Contact: "Т+380558688934", Action: "./icons/View.png" },
        { Date: "Ольга Іванова", Name: "Ольга Іванова", Address: "вул. Партизанська,8 с. Свидівок",Contact: "Т+380558688934", Action: "./icons/View.png" },
        { Date: "Ольга Іванова", Name: "Ольга Іванова", Address: "вул. Партизанська,8 с. Свидівок",Contact: "Т+380558688934", Action: "./icons/View.png" },
        { Date: "Ольга Іванова", Name: "Ольга Іванова", Address: "вул. Партизанська,8 с. Свидівок",Contact: "Т+380558688934", Action: "./icons/View.png" },
        { Date: "Ольга Іванова", Name: "Ольга Іванова", Address: "вул. Партизанська,8 с. Свидівок",Contact: "Т+380558688934", Action: "./icons/View.png" },
        
    ]

    const rattingImg = [
        { Ratting: "./images/userphoto.svg" },
       
    ]
    return (
        <>
            <TableBox>
                <Table.Table>
                    <Table.Head>
                        <Table.TR>
                            <TH1>Фото</TH1>
                            <TH2>Ім’я</TH2>
                            {/* <TH3>Отримувач</TH3> */}
                            <TH4>Адреса</TH4>
                            <TH5>Номер телефону</TH5>
                            <TH6>Історія замовлень</TH6>
                        </Table.TR>
                    </Table.Head>
                    <Table.Body>
                        {TableRow.map((items, index) => {
                            return (
                                <Table.TR>
                                    <Table.TD>{rattingImg.map((img, index) => {
                                            return (
                                                <>
                                                    {index - 2 ? <ImageIcon src={img.Ratting}></ImageIcon>
                                                    : null}
                                                </>
                                            )
                                        })}</Table.TD>
                                    <Table.TD>{items.Name}</Table.TD>
                                    {/* <Table.TD>{items.Name}</Table.TD> */}
                                    <Table.TD>{items.Address}</Table.TD>
                                    <Table.TD>{items.Contact}</Table.TD>
                                    <Table.TD><ImageIcon src={items.Action}></ImageIcon></Table.TD>
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

export default UserList;