import React from 'react';
import CatagoryItemEdit from '../../components/CatagoryItemEdit';
import DashBoard from '../../components/DashBoard';
import SideBar from '../../components/Sidebar';
import TodayIncomeCard from '../../components/TodayIncomeCard';
import TopBar from '../../components/TopBar';
import { Wrapper } from './style'

const HomePage = () => {
    return (
        <>
            <Wrapper>
                <TopBar />
                <div className="flex-container">
                    <SideBar />
                    <DashBoard showInput={false}>
                        <TodayIncomeCard />
                    </DashBoard>
                </div>
            </Wrapper>
        </>
    );
}

export default HomePage;
