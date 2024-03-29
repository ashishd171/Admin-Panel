import React from 'react';
import HomepageHeader from '../../HomepageHeader';
import SearchInput from '../SearchInput';
import { Wrapper, SearchBox } from '../../DashBoard/style';
import Calender from '../calender';
import AllOrderTable from '../Table';
import OrderDetails from '../orderDetails';

const OrderAll = () => {
    return (
        <Wrapper>
            {/* <HomepageHeader /> */}
            <SearchBox>
                <SearchInput />
                <Calender />
            </SearchBox>
            <AllOrderTable />
            {/* <OrderDetails /> */}
        </Wrapper>
    );
}

export default OrderAll;
