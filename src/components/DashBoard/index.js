import React from 'react';
import Header from '../Header';
import { Wrapper } from './style'

const DashBoard = ({ children, showButton, showInput, listgridbtn, productDesign, handleProduct }) => {
    
    const pageLocation = window.location.pathname
    console.log(pageLocation, "Dashboard")
    
    return (
        <Wrapper>   
            <Header showButton={showButton} showInput={showInput} listgridbtn={listgridbtn} productDesign={productDesign} handleProduct={handleProduct}/>
            {children}
        </Wrapper>
    );
}
export default DashBoard;