import React from 'react';
import { Edit, Dot, Wrapper, Name, Card, BottomSection, Image, Anchor } from './style'
import { HiOutlinePencil } from "react-icons/hi";

const ProductGrid = ({ CardStructure, Cardtype }) => {

    return (
        <Wrapper>
            {CardStructure?.map((item, index) => {
                return (
                    <Card key={index} Category={Cardtype === "Category"}>
                        <Image src={item.Image} Category={Cardtype === "Category"} />
                        <BottomSection Category={Cardtype === "Category"}>
                            <Name><Dot Category={Cardtype === "Category"}></Dot>{item.name}</Name>
                            <Edit Category={Cardtype === "Category"} >
                                <Anchor href="" Category={Cardtype === "Category"}><HiOutlinePencil /></Anchor>
                            </Edit>
                        </BottomSection>
                    </Card>
                )
            })}

        </Wrapper>
    );
}

export default ProductGrid;
