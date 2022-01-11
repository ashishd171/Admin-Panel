import React from 'react';
import DashBoard from '../../../components/DashBoard';
import SideBar from '../../../components/Sidebar';
import TopBar from '../../../components/TopBar';
import {Wrapper,FlexContainer} from './style'
import IncomeDefaultState from '../../../components/IncomeDefaultState';

const FinanceList = () => {
    return (
        <div>
            <Wrapper>
                <TopBar />
                <FlexContainer>
                    <SideBar />
                    <DashBoard showInput={false} listgridbtn={false}>
                        <IncomeDefaultState />
                    </DashBoard>
                </FlexContainer>
            </Wrapper>
        </div>
    );
}

export default FinanceList;
