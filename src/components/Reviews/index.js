import React from 'react';
import HomepageHeader from '../HomepageHeader';
import SearchInput from '../Order/SearchInput';
import { Wrapper, SearchBox } from '../DashBoard/style';
import Calender from '../Order/calender';
import ReviewTable from './Reviews';
import ReviewProfile from './ReviewsProfile';

const Reviews = () => {
    return (
        <Wrapper>
            {/* <HomepageHeader /> */}
            <SearchBox>
                <SearchInput />
                <Calender />
            </SearchBox>
            <ReviewTable />
            {/* <ReviewProfile /> */}
        </Wrapper>
    );
}

export default Reviews;
