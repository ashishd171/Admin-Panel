import React from 'react';
import CatagoryItemEdit from '../CatagoryItemEdit';
import EmptyState from '../EmptyState';
import Header from '../Header';
import ProductGrid from '../ProductGrid';
import ProductList from '../ProductList';
import ListViewSkeleton from '../ListViewSkeleton/index';
import SearchInput from '../SearchInput';
import TileViewSkeleton from '../TileViewSkeleton';
import TodayIncomeCard from '../TodayIncomeCard';
import ViewButton from '../ViewButton';
import {Wrapper} from './style'

const DashBoard = ({children, showInput,listgridbtn,productDesign,handleProduct}) => {
    return (
        <Wrapper>   
            <Header showInput={showInput}  listgridbtn={listgridbtn} productDesign={productDesign} handleProduct={handleProduct}/>
            {children}
            {/* <TodayIncomeCard /> */}
            {/* <SearchInput /> */}
            {/* <ViewButton /> */}
            {/* <ProductGrid /> */}
            {/* <ProductList /> */}
            {/* <EmptyState /> */}
            {/* <CatagoryItemEdit /> */}
            {/* <TileViewSkeleton /> */}
            {/* <ListViewSkeleton /> */}
        </Wrapper>
    );
}

export default DashBoard;
