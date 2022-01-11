import React from 'react';
import DashBoard from '../../../components/DashBoard';
import FinanceCostChart from '../../../components/FinanceCostChart';
import FinanceCostList from '../../../components/FinanceCostList';
import IncomeDefaultState from '../../../components/IncomeDefaultState';

import SideBar from '../../../components/Sidebar';
import TopBar from '../../../components/TopBar';

import {Wrapper,FlexContainer} from './style'


const FinanceChart = () => {
    return (
        <div>
            <Wrapper>
                <TopBar />
                <FlexContainer>
                    <SideBar />
                    <DashBoard showInput={false} listgridbtn={false}>
                        <FinanceCostChart />
                        <FinanceCostList />
                    </DashBoard>
                </FlexContainer>
            </Wrapper>
        </div>
    );
}

export default FinanceChart;
