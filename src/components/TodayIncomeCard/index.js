import React from 'react';
import {Card,Amount,IncomeDetail,PriceDetail,IncomeDetailPara,PriceDetailPara,Wrapper} from './style';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillCaretUpFill,BsFillCaretDownFill } from "react-icons/bs";

const TodayIncomeCard = () => {
    const Table = [
        {incomedetail: "Дохід на сьогодні",amount: "₴ 1 300",pricedetail: "Різниця з попереднім днем 12%", status: "positive"},
        {incomedetail: "Витрати на сьогодні",amount: "₴ 600",pricedetail: "Різниця з попереднім днем 10%", status: "negative"}
    ]
    return (
        <Wrapper>
            {Table.map((items,index) => {
                return(
                    <Card key={index}>
                        <IncomeDetail>
                            <IncomeDetailPara>{items.incomedetail}</IncomeDetailPara><AiOutlineInfoCircle  />
                        </IncomeDetail>
                        <Amount>{items.amount}</Amount>
                        <PriceDetail>
                            <PriceDetailPara>{items.pricedetail}</PriceDetailPara> { items.status === "positive" ? <BsFillCaretUpFill  />  :<BsFillCaretDownFill className="svg2" /> }
                        </PriceDetail>
                    </Card>
                )
            })}
        </Wrapper>
    );
}

export default TodayIncomeCard;
