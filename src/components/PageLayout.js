import React from 'react';
import DashBoard from './DashBoard';
import { Wrapper } from '../Pages/HomePage/style';
import SideBar from './Sidebar';
import TopBar from './TopBar';
import  '../Pages/HomePage/style'
import Routes from '../Routes';
import { useHistory } from 'react-router-dom';

const Pagelayout = ({}) => {

    const history = useHistory();

    console.log(history)
    return (
        <Wrapper>
           <TopBar />
           <div className='flex-container'>
                <SideBar/>
                <DashBoard>
                    <Routes />
                </DashBoard>
           </div>
        </Wrapper>
    );
}

export default Pagelayout;