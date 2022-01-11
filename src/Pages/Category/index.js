import React,{useState} from 'react';
import DashBoard from '../../components/DashBoard';
import ProductGrid from '../../components/ProductGrid';
import ProductList from '../../components/ProductList';
import SideBar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import {FlexContainer,Wrapper} from './style';

const Category = () => {
    const [product , setProduct] = useState(true)

    return (
        <Wrapper>
            <TopBar />
            <FlexContainer>
                <SideBar />
                <DashBoard showInput={true} listgridbtn={true} productDesign={product} handleProduct={(valuechnage)=>setProduct(valuechnage)}>
                    {
                        product ? <ProductGrid /> : <ProductList />
                    }
                    
                </DashBoard>
            </FlexContainer>
        </Wrapper>
    );
}

export default Category;
