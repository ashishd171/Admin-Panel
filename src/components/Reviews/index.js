import React from 'react';
import Header from '../Header';
import SearchInput from '../Order/SearchInput';
import { Wrapper, SearchBox } from '../DashBoard/style';
import Calender from '../Order/calender';
import ReviewTable from './ReviewTable';
import ReviewProfile from './ReviewsProfile';

const ReviewsComp = () => {
    return (
        <Wrapper>
            {/* <Header /> */}
            {/* <SearchBox>
                <SearchInput />
                <Calender />
            </SearchBox> */}
            <ReviewTable />
            {/* <ReviewProfile /> */}
        </Wrapper>
    );
}

export default ReviewsComp;
