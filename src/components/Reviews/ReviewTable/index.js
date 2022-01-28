import PageNumber from "../PageNumber";
import Table from './style';
import { MainBox,TableWrap, TH1, TH2, TH3, TH4, TH5, TH6, TableBox, RattingIcon, } from './style'

const ReviewTable = () => {

    const TableRow = [
        { Date: "21.11.2021", Name: "Ольга Іванова", Response: "Неодноразово замовляю доставку з цієї піцерії,  дуже смачно...", Action: "./icons/View.png" },
        { Date: "21.11.2021", Name: "Ольга Іванова", Response: "Неодноразово замовляю доставку з цієї піцерії,  дуже смачно...", Action: "./icons/View.png" },
        { Date: "21.11.2021", Name: "Ольга Іванова", Response: "Неодноразово замовляю доставку з цієї піцерії,  дуже смачно...", Action: "./icons/View.png" },
        { Date: "21.11.2021", Name: "Ольга Іванова", Response: "Неодноразово замовляю доставку з цієї піцерії,  дуже смачно...", Action: "./icons/View.png" },
        { Date: "21.11.2021", Name: "Ольга Іванова", Response: "Неодноразово замовляю доставку з цієї піцерії,  дуже смачно...", Action: "./icons/View.png" },
        { Date: "21.11.2021", Name: "Ольга Іванова", Response: "Неодноразово замовляю доставку з цієї піцерії,  дуже смачно...", Action: "./icons/View.png" },
        { Date: "21.11.2021", Name: "Ольга Іванова", Response: "Неодноразово замовляю доставку з цієї піцерії,  дуже смачно...", Action: "./icons/View.png" },
        { Date: "21.11.2021", Name: "Ольга Іванова", Response: "Неодноразово замовляю доставку з цієї піцерії,  дуже смачно...", Action: "./icons/View.png" },
        { Date: "21.11.2021", Name: "Ольга Іванова", Response: "Неодноразово замовляю доставку з цієї піцерії,  дуже смачно...", Action: "./icons/View.png" },
        { Date: "21.11.2021", Name: "Ольга Іванова", Response: "Неодноразово замовляю доставку з цієї піцерії,  дуже смачно...", Action: "./icons/View.png" },
    ]

    const rattingImg = [
        { Ratting: "./icons/star.png" },
    ]
    return (
        <>
        <MainBox>
            <TableBox>
                <TableWrap>
                <Table.Table>
                    <Table.Head>
                        <Table.TR>
                            <TH1>№</TH1>
                            <TH2>Дата</TH2>
                            <TH3>Ім’я </TH3>
                            <TH4>Оцінка</TH4>
                            <TH5>Відгук</TH5>
                            <TH6>Дія</TH6>
                        </Table.TR>
                    </Table.Head>
                    <Table.Body>
                        {TableRow.map((items, index) => {
                            return (
                                <Table.TR key={index}>
                                    <Table.TD>{index + 1}</Table.TD>
                                    <Table.TD>{items.Date}</Table.TD>
                                    <Table.TD>{items.Name}</Table.TD>
                                    <Table.TD>
                                        {rattingImg.map((img, index) => {
                                            return (
                                                <>
                                                    {index + 1 ? <RattingIcon src={img.Ratting}></RattingIcon>
                                                    : null}
                                                </>
                                            )
                                        })}
                                    </Table.TD>
                                    <Table.TD>{items.Response}</Table.TD>
                                    <Table.TD><RattingIcon src={items.Action}></RattingIcon></Table.TD>
                                </Table.TR>
                            )
                        })}
                    </Table.Body>
                </Table.Table>
                <PageNumber />
                </TableWrap>
            </TableBox>
            </MainBox>
        </>
    )
}

export default ReviewTable;