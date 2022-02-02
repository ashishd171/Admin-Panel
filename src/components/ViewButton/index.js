import React, { useState } from 'react';
import { ListBtn, GridBtn, Wrapper } from './style'
import { RiLayoutGridFill } from "react-icons/ri";
import { AiOutlineUnorderedList } from "react-icons/ai";

const ViewButton = ({ handleProduct, product ,handleProductfun }) => {
    const [activebtn, setActivebtn] = useState(true);
console.log(handleProduct,'val')
console.log(handleProductfun,'funtion')
    const onGridHandle = () => {
        handleProductfun(true);
        setActivebtn(true)
    }

    const onListHandle = () => {
        handleProductfun(false);
        setActivebtn(false)
    }
    return (
        <div>
            <Wrapper>
                <GridBtn onClick={onGridHandle} className={activebtn ? "gridActive" : ""}>
                    <RiLayoutGridFill />
                </GridBtn>
                <ListBtn onClick={onListHandle} className={!activebtn ? "gridActive" : ""}>
                    <AiOutlineUnorderedList />
                </ListBtn>
            </Wrapper>
        </div>
    );
}

export default ViewButton;
