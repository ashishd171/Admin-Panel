import React,{useState,useEffect} from 'react';
import Header from '../Header';
import { Wrapper } from './style'

const DashBoard = ({ children, showButton, showInput, listgridbtn, productDesign, handleProduct ,handleProductfun,show, setShow}) => {
    
    
   

    return (
        <Wrapper>   
            <Header showButton={showButton} showInput={showInput} listgridbtn={listgridbtn} productDesign={productDesign} handleProduct={handleProduct} handleProductfun={handleProductfun} show={show} setShow={setShow}/>
            {children}
        </Wrapper>
    );
}
export default DashBoard;