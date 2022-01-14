import React from 'react';
import DashBoard from '../../components/DashBoard';
import EmptyState from '../../components/EmptyState';
import SideBar from '../../components/Sidebar';
import { Wrapper,FlexContainer } from './style';
import TopBar from '../../components/TopBar';
import ListViewSkeleton from '../../components/ListViewSkeleton';

const User = () => {
    return (
        <div>
            <Wrapper>
            <TopBar />
            <FlexContainer>
                <SideBar />
                <DashBoard showInput={true} listgridbtn={true}  >
                    <ListViewSkeleton />
                </DashBoard>
            </FlexContainer>
        </Wrapper>
        </div>
    );
}

export default User;
