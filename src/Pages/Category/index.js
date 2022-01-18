import React,{useState} from 'react';
import CategoryItemEdit from '../../components/category/CategoryItemEdit';
import OpenDropDown from '../../components/categoryForm';
import DashBoard from '../../components/DashBoard';
import ProductGrid from '../../components/ProductGrid';
import ProductList from '../../components/ProductList';
import SideBar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import {FlexContainer,Wrapper} from './style';

const Category = () => {
    const [product , setProduct] = useState(true)
    
    const CatagoryCard= [
        {Image: "./images/Pizzaimage.png", name: "Піца"},
        {Image: "./images/Pizzaimage.png", name: "Піца"},
        {Image: "./images/Pizzaimage.png", name: "Піца"},
        {Image: "./images/Pizzaimage.png", name: "Піца"},
        {Image: "./images/Pizzaimage.png", name: "Піца"},
        {Image: "./images/Pizzaimage.png", name: "Піца"},
    ]
    const [isModal,setIsModal]=useState(false);
    const handleModal=()=>{
        setIsModal(!isModal)
    }
    console.log(isModal)
    // if(isModal){
    //     return <CategoryItemEdit />
    // }
    return (
        <Wrapper>
            <TopBar />
            <FlexContainer>
                <SideBar />
                <DashBoard showInput={true} listgridbtn={true} productDesign={product} handleProduct={(valuechnage)=>setProduct(valuechnage)}>
                    {
                        product && !isModal ? <ProductGrid CardStructure={CatagoryCard} Cardtype={"Category"}/> : <ProductList isModal={isModal} toggle={handleModal}/>
                    }
                    {/* {isModal ? <CategoryItemEdit />:null} */}
                </DashBoard>
            </FlexContainer>
        </Wrapper>
    );
}

export default Category;
