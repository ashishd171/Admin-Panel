import React from 'react';
import DashBoard from '../../components/DashBoard';
import EmptyState from '../../components/EmptyState';
import ProductGrid from '../../components/ProductGrid';
import ProductList from '../../components/ProductList';
import SideBar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import AddNew from './AddNew';
import HallList from './HallList';
import {Wrapper,FlexContainer} from './style'

const Hall = () => {
   
    return (
        <div>
            <Wrapper>
            <TopBar />
            <FlexContainer>
                <SideBar />
                <DashBoard>
                   <HallList />
                   <EmptyState />
                   <AddNew />
                </DashBoard>
            </FlexContainer>
        </Wrapper>
        </div>
    );
}

export default Hall;
