import React from 'react';
import DashBoard from '../../components/DashBoard';
import EmptyState from '../../components/EmptyState';
import SideBar from '../../components/Sidebar';
import { Wrapper,FlexContainer } from './style';
import TopBar from '../../components/TopBar';
import ReviewsComp from '../../components/Reviews';

const Reviews = () => {
    return (
        <div>
            <Wrapper>
            <TopBar />
            <FlexContainer>
                <SideBar />
                <DashBoard showInput={true} listgridbtn={false}  >
                    {/* <EmptyState /> */}
                    <ReviewsComp />
                </DashBoard>
            </FlexContainer>
        </Wrapper>
        </div>
    );
}

export default Reviews;
