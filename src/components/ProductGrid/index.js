import React from 'react';
import { Wholewrapper, Edit, Dot, Wrapper, Name, Card, BottomSection, PriceSection, Image, Anchor ,ImageWrap} from './style'
import { HiOutlinePencil } from "react-icons/hi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Button from '../AddButtonNew';

const ProductGrid = ({ gridStructure, cardType, handleClick ,data}) => {

    return (
        <>
            <Wholewrapper>
                {
                    data==='all' ?
                        null
                        : 
                        <Button marginTop={20} marginLeft={20} borderRadius={8} onClick={() => handleClick('all')}><MdOutlineArrowBackIosNew />Back</Button>
                }
                <Wrapper>
                    {gridStructure?.map((item, index) => {
                        return (
                            <Card key={item.type || index} Category={data === "all"} onClick={() => {
                                if (item.type) {
                                    handleClick(item.type)
                                }
                            }}> 
                                <ImageWrap>
                                <Image src={item.Image} Category={data === "all"} />
                                </ImageWrap>
                                <BottomSection Category={cardType === "Category"}>
                                    <Name><Dot Category={cardType === "Category"}></Dot>{item.name}</Name>
                                    <Edit Category={cardType === "Category"} >
                                        <Anchor href="" Category={cardType === "Category"}><HiOutlinePencil /></Anchor>
                                    </Edit>
                                </BottomSection>
                                {
                                    item.price ?
                                        <PriceSection Category={cardType === "Category"}>
                                            <Name>{item.price}</Name>
                                        </PriceSection>
                                        : null
                                }
                            </Card>
                        )
                    })}

                </Wrapper>
            </Wholewrapper>
        </>
    );
}

export default ProductGrid;
