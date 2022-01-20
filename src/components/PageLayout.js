import React from 'react';
import DashBoard from './DashBoard';
import { Wrapper } from '../Pages/HomePage/style';
import SideBar from './Sidebar';
import TopBar from './TopBar';
import  '../Pages/HomePage/style'
import Routes from '../Routes';
import {BrowserRouter as Router} from "react-router-dom";

const Pagelayout = ({}) => {
    return (
        <Router>
        <Wrapper>
           <TopBar />
           <div className='flex-container'>
                <SideBar/>
                <DashBoard>
                    <Routes />
                </DashBoard>
           </div>
        </Wrapper>
        </Router>
    );
}
export default Pagelayout;