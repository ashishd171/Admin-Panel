import React from 'react';
import { Wholewrapper,Edit, Dot, Wrapper, Name, Card, BottomSection, Image, Anchor } from './style'
import { HiOutlinePencil } from "react-icons/hi";
import {MdOutlineArrowBackIosNew} from "react-icons/md";
import Button from '../AddButtonNew';

const ProductGrid = ({ CardStructure, Cardtype, handleClick }) => {

    return (
        <>
        <Wholewrapper>
        <Button marginTop={20}  marginLeft={20} borderRadius={8} onClick={()=>handleClick('all')}><MdOutlineArrowBackIosNew />Back</Button>

        <Wrapper>
            {CardStructure?.map((item, index) => {
                return (
                    <Card key={item.type || index} Category={Cardtype === "Category"} onClick={()=>handleClick(item.type)}>
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
        </Wholewrapper>
        </>
    );
}

export default ProductGrid;
