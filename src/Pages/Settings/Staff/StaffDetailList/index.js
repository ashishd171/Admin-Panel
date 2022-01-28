import react, { useState } from "react";
import Table from './style';
import { MainBox, TH1, TH2, TH3, TH4, TH5, TH6, TH7, TableBox, ImageIcon, } from './style'
import { HiOutlinePencil } from "react-icons/hi";


const StaffDetailList = () => {

    const TableRow = [
        { Date: "11.11.2021", FullName: "Марія Іванова", Position: "Повар", Contact: "Т+380558688934", Code: "5678", Statistic: "./icons/View.png", Action: "./icons/View.png" },
        { Date: "11.11.2021", FullName: "Марія Іванова", Position: "Повар", Contact: "Т+380558688934", Code: "5678", Statistic: "", Action: "./icons/View.png" },
        { Date: "11.11.2021", FullName: "Марія Іванова", Position: "Повар", Contact: "Т+380558688934", Code: "5678", Statistic: "", Action: "./icons/View.png" },
        { Date: "11.11.2021", FullName: "Марія Іванова", Position: "Повар", Contact: "Т+380558688934", Code: "5678", Statistic: "", Action: "./icons/View.png" },
        { Date: "11.11.2021", FullName: "Марія Іванова", Position: "Повар", Contact: "Т+380558688934", Code: "5678", Statistic: "", Action: "./icons/View.png" },

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
                            <TH1>Фото</TH1>
                            <TH2>Ім’я та Прізвище</TH2>
                            <TH3>Посада</TH3>
                            <TH4>Заголовок</TH4>
                            <TH5>Код доступу</TH5>
                            <TH6>Статистика</TH6>
                            <TH7>Дія</TH7>
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
                                    <Table.TD>{items.FullName}</Table.TD>
                                    <Table.TD>{items.Position}</Table.TD>
                                    <Table.TD>{items.Contact}</Table.TD>
                                    <Table.TD>{items.Code}</Table.TD>
                                    <Table.TD><ImageIcon src={items.Action}></ImageIcon></Table.TD>
                                    <Table.TD><HiOutlinePencil /></Table.TD>
                                </Table.TR>
                            )
                        })}
                    </Table.Body>
                </Table.Table>
            </TableBox>
        </MainBox>
    )
}

export default StaffDetailList;