import React, { useState } from "react";
import S from './style'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calender = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <S.TypeTextBox>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <S.Icon src="./icons/calender.png"></S.Icon>
            </S.TypeTextBox>
        </>
    )
}

export default Calender;