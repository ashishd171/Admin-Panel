import React from 'react';
import DashBoard from '../../../components/DashBoard';
import SpecialOfferList from '../../../components/SpecialOfferList';
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
                        <SpecialOfferList />
                    </DashBoard>
                </FlexContainer>
            </Wrapper>
        </div>
    );
}

export default SpecialOffers;
