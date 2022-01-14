import React,{useState} from 'react';
import { ListBtn, GridBtn, Wrapper } from './style'
import { RiLayoutGridFill } from "react-icons/ri";
import { AiOutlineUnorderedList } from "react-icons/ai";

const ViewButton = ({ listgridbtn, handleProduct, product }) => {
    const [activebtn, setActivebtn] = useState(true);

    const onTileHandle = () => {
        handleProduct(true);
        setActivebtn(true)
    }

    const onGridHandle = () => {
        handleProduct(false);
        setActivebtn(false)
    }
    return (
        <div>
            { listgridbtn ?
                <Wrapper>
                    <GridBtn onClick={onTileHandle} className={ activebtn ? "gridActive" : ""}>
                    <RiLayoutGridFill  />
                    </GridBtn>
                    <ListBtn onClick={onGridHandle} className={ !activebtn ? "gridActive" : ""}>
                        <AiOutlineUnorderedList />
                    </ListBtn>
                </Wrapper>
                : null}
        </div>
    );
}

export default ViewButton;
