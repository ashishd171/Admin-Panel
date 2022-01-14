import React from 'react';
import DashBoard from '../../../components/DashBoard';
import SettingLocationTable from '../../../components/SettingLocationTable';
import SideBar from '../../../components/Sidebar';
import TopBar from '../../../components/TopBar';
import {Wrapper,FlexContainer} from './style'
import TileViewSkeleton from '../../../components/TileViewSkeleton';

const SpecialOffers = () => {
    return (
        <div>
            <Wrapper>
                <TopBar />
                <FlexContainer>
                    <SideBar />
                    <DashBoard showInput={false} listgridbtn={false}>
                        <p>SpecialOffers</p>
                        <TileViewSkeleton />
                    </DashBoard>
                </FlexContainer>
            </Wrapper>
        </div>
    );
}

export default SpecialOffers;
