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
import { Wrapper } from './style'

import NewProductAdd from '../Product/NewProductAdd';
import UploadImg from '../Product/NewProductAdd/UploadImg';
import UserProfileHeader from '../UserInfo/index';
import PushNotificationCreateNew from '../PushNotification/PushNotificationCreateNew';
import PushNotificationDetails from '../PushNotification/PushNotificationDetails'
import OpenDropDown from '../categoryForm';
import OrderAll from '../../components/Order/AllOders';
import Reviews from '../Reviews/index';


const DashBoard = ({ children, showInput, listgridbtn, productDesign, handleProduct }) => {
    return (
<<<<<<< HEAD
        <Wrapper>   
            <Header showInput={showInput}  listgridbtn={listgridbtn} productDesign={productDesign} handleProduct={handleProduct}/>
=======
        <Wrapper>
            <HomepageHeader showInput={showInput} listgridbtn={listgridbtn} productDesign={productDesign} handleProduct={handleProduct} />
>>>>>>> 46ba41a8628cc4b3518509adb63ef43ae9a1f94f
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
            
            {/* <OrderAll /> */}
            {/* <Reviews /> */}
            {/* <NewProductAdd /> */}
            {/* <UploadImg /> */}
            {/* <UserProfileHeader /> */}
            {/* <PushNotificationCreateNew /> */}
            {/* <PushNotificationDetails /> */}
            {/* <OpenDropDown /> */}
        </Wrapper>
    );
}

export default DashBoard;
