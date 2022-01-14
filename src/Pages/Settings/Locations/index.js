import React from 'react';
import DashBoard from '../../../components/DashBoard';
import SettingLocationTable from '../../../components/SettingLocationTable';
import SideBar from '../../../components/Sidebar';
import TopBar from '../../../components/TopBar';
import SettingLocationDetail from '../../../components/SettingLocationDetail';
import {Wrapper,FlexContainer} from './style'
import SettingDelivery from './../../../components/SettingDelivery'
import SettingEmptyState from '../../../components/SettingEmptyState';
import SettingRequisites from '../../../components/SettingRequisites';

const Locations = () => {
    return (
        <div>
                <Wrapper>
                    <TopBar />
                    <FlexContainer>
                        <SideBar />
                        <DashBoard showInput={false} listgridbtn={false}>
                            <SettingLocationTable />
                            <SettingLocationDetail />
                            <SettingDelivery />
                            <SettingEmptyState />
                            <SettingRequisites />
                        </DashBoard>
                    </FlexContainer>
                </Wrapper>
        </div>
    );
}

export default Locations;
