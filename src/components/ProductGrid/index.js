import React from 'react';
import {Edit,Dot,Wrapper,Name,Card,BottomSection,Image,Anchor} from './style'
import { HiOutlinePencil } from "react-icons/hi";

const ProductGrid = () => {
    const Table = [
        {Image: "./images/Pizzaimage.png", name: "Піца"},
        {Image: "./images/Pizzaimage.png", name: "Піца"},
        {Image: "./images/Pizzaimage.png", name: "Піца"},
        {Image: "./images/Pizzaimage.png", name: "Піца"},
        {Image: "./images/Pizzaimage.png", name: "Піца"},
        {Image: "./images/Pizzaimage.png", name: "Піца"},
    ] 
    return (
        <Wrapper>
            {Table.map((item, index)=>{
                return(
                    <Card>
                    <Image  src={item.Image} />
                    <BottomSection>
                        <Name><Dot></Dot>{item.name}</Name>
                        <Edit>
                            <Anchor href=""><HiOutlinePencil  /></Anchor>
                        </Edit>
                    </BottomSection>
                </Card>
                )
            })}
           
        </Wrapper>
    );
}

export default ProductGrid;
