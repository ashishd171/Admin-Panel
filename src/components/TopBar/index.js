import React from 'react';
import {Wrapper,Logo,Topbar,LogoPara,Anchor,HomeText,Image} from './style';
import { useHistory } from "react-router-dom";

const TopBar = () => {
    const history = useHistory();
    const routeChange = () =>{ 
      let path = '/login'; 
      history.push(path);
    }
    
    return (
        <Wrapper>
            <Topbar>
                <Logo><LogoPara>Logo</LogoPara></Logo>
                <HomeText><Anchor href="" onClick={routeChange}>Вийти</Anchor><Image src="./icons/icon-wrapper.png" /></HomeText>
            </Topbar>
        </Wrapper>
    );
}   
export default TopBar;