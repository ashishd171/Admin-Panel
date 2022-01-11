import React from 'react';
import DashBoard from '../../components/DashBoard';
import ProductList from '../../components/ProductList';
import SideBar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import {Wrapper,FlexContainer} from './style'

const Orders = () => {
    return (
        <Wrapper>
        <TopBar />
        <FlexContainer>
            <SideBar />
            <DashBoard showInput={true} listgridbtn={false}>
                <ProductList />
            </DashBoard>
        </FlexContainer>
    </Wrapper>
    );
}

export default Orders;
