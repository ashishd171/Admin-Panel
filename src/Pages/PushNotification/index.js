import React from 'react';
import DashBoard from '../../components/DashBoard';
import EmptyState from '../../components/EmptyState';
import SideBar from '../../components/Sidebar';
import { Wrapper,FlexContainer } from './style';
import TopBar from '../../components/TopBar';
import ListViewSkeleton from '../../components/ListViewSkeleton';
import PushNotificationList from '../../components/PushNotification/PushNotificationList';

const PushNotification = () => {
    return (
        <div>
            <Wrapper>
            <TopBar />
            <FlexContainer>
                <SideBar />
                <DashBoard showInput={false} listgridbtn={false}>
                    <PushNotificationList />
                </DashBoard>
            </FlexContainer>
        </Wrapper>
        </div>
    );
}

export default PushNotification;
