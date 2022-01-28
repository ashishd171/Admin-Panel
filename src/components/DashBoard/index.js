import React,{useEffect} from 'react';
import Header from '../Header';
import { Wrapper } from './style'

const DashBoard = ({ children, showButton, showInput, listgridbtn, productDesign, handleProduct }) => {
    
    
    useEffect(() => {
        const pageLocation = window.location.pathname
        
    },[window]);
    
    return (
        <Wrapper>   
            <Header showButton={showButton} showInput={showInput} listgridbtn={listgridbtn} productDesign={productDesign} handleProduct={handleProduct}/>
            {children}
        </Wrapper>
    );
}
export default DashBoard;