import react, { useState } from "react";
import Table from './style';
import D from '../../Product/NewProductAdd/style'


const AllOrderTable = () => {

    const TableRow = [
        { Number: "3456", Date: "21.10.21 18:30", Status: "Доставляється", Adesa: "вул. Партизанська,8 с. Свидівок", Payment: "Готівка", Suma: "350 грн" },
        { Number: "3456", Date: "21.10.21 18:30", Status: "Доставляється", Adesa: "вул. Партизанська,8 с. Свидівок", Payment: "Готівка", Suma: "350 грн" },
        { Number: "3456", Date: "21.10.21 18:30", Status: "Доставляється", Adesa: "вул. Партизанська,8 с. Свидівок", Payment: "Готівка", Suma: "350 грн" },
        { Number: "3456", Date: "21.10.21 18:30", Status: "Доставляється", Adesa: "вул. Партизанська,8 с. Свидівок", Payment: "Готівка", Suma: "350 грн" },
        { Number: "3456", Date: "21.10.21 18:30", Status: "Доставляється", Adesa: "вул. Партизанська,8 с. Свидівок", Payment: "Готівка", Suma: "350 грн" },
        { Number: "3456", Date: "21.10.21 18:30", Status: "Доставляється", Adesa: "вул. Партизанська,8 с. Свидівок", Payment: "Готівка", Suma: "350 грн" },
        { Number: "3456", Date: "21.10.21 18:30", Status: "Доставляється", Adesa: "вул. Партизанська,8 с. Свидівок", Payment: "Готівка", Suma: "350 грн" },
        { Number: "3456", Date: "21.10.21 18:30", Status: "Доставляється", Adesa: "вул. Партизанська,8 с. Свидівок", Payment: "Готівка", Suma: "350 грн" },
        { Number: "3456", Date: "21.10.21 18:30", Status: "Доставляється", Adesa: "вул. Партизанська,8 с. Свидівок", Payment: "Готівка", Suma: "350 грн" },
        { Number: "3456", Date: "21.10.21 18:30", Status: "Доставляється", Adesa: "вул. Партизанська,8 с. Свидівок", Payment: "Готівка", Suma: "350 грн" },
    ]

    const Number = [
        { Number1: "4" },
        { Number1: "5" },
        { Number1: "6" },
        { Number1: "7" },
        { Number1: "8" },
    ]

    // const dropDown = [1, ]

    // const [isOpen, setIsOpen] = useState(false);
    // const toggling = () => setIsOpen(!isOpen);

    return (
        <>
            <Table.Table>
                <Table.Head>
                    <Table.TR>
                        <Table.TH1>№</Table.TH1>
                        <Table.TH2>Дата та час</Table.TH2>
                        <Table.TH3>Статус</Table.TH3>
                        <Table.TH4>Адеса</Table.TH4>
                        <Table.TH5>Тип оплати</Table.TH5>
                        <Table.TH6>Сума</Table.TH6>
                    </Table.TR>
                </Table.Head>
                <Table.Body>
                    {TableRow.map((items, index) => {
                        return (
                            <Table.TR>
                                <Table.TD>{items.Number}</Table.TD>
                                <Table.TD>{items.Date}</Table.TD>
                                <Table.TD2>{items.Status}</Table.TD2>
                                <Table.TD>{items.Adesa}</Table.TD>
                                <Table.TD>{items.Payment}</Table.TD>
                                <Table.TD>{items.Suma}</Table.TD>
                            </Table.TR>
                        )
                    })}
                </Table.Body>
            </Table.Table>
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
                        <Table.ArrowBox>
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
                        // onClick={toggling}
                        >6/сторінка<D.Icon src='arrow-down.png'></D.Icon></Table.DropDownHeader>
                        {/* {isOpen && (
                            <D.DropDownListContainer>
                                <D.DropDownList>
                                    {dropDown.map((items, index) => {
                                        return (
                                            <D.ListItem>6/сторінка</D.ListItem>
                                        )
                                    })}
                                </D.DropDownList>
                            </D.DropDownListContainer>
                        )} */}
                    </D.DropDownContainer>
                </Table.InputBox>
            </Table.NumberBox>
        </>

    )
}

export default AllOrderTable;