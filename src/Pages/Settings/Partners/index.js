import React from 'react';
import DashBoard from '../../../components/DashBoard';
import SettingLocationTable from '../../../components/SettingLocationTable';
import SideBar from '../../../components/Sidebar';
import TopBar from '../../../components/TopBar';
import {Wrapper,FlexContainer} from './style'
import TileViewSkeleton from '../../../components/TileViewSkeleton';
import PartnersList from './PartnersList';

const Partners = () => {
    return (
        <div>
            <Wrapper>
                <TopBar />
                <FlexContainer>
                    <SideBar />
                    <DashBoard showInput={false} listgridbtn={false}>
                        <PartnersList />
                    </DashBoard>
                </FlexContainer>
            </Wrapper>
        </div>
    );
}

export default Partners;
