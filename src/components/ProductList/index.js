import React from 'react';
import { Wrapper,ProdTable,TableRow,TableData,Image,Span,TableHeadingFirst,TableHeadingPhoto,TableHeadingStatus, TableHeadingNizwa, TableHeadingEdit, Anchor} from './style'
import { HiOutlinePencil } from "react-icons/hi";

const ProductList = () => {

    const Tabl = [1, 2, 3, 4,5,6]
    return (
        <div>
            <Wrapper>
                <ProdTable>
                    <TableRow>
                        <TableHeadingFirst></TableHeadingFirst>
                        <TableHeadingPhoto>Фото</TableHeadingPhoto>
                        <TableHeadingStatus>Статус</TableHeadingStatus>
                        <TableHeadingNizwa>Назва</TableHeadingNizwa>
                        <TableHeadingEdit>Дія</TableHeadingEdit>
                    </TableRow>
                    {Tabl.map((items, index) => {
                        return (
                            <TableRow>
                                <TableData><Image src="./images/text.svg" /></TableData>
                                <TableData><Anchor href="#"><Image src="./images/userphoto.svg" /></Anchor></TableData>
                                <TableData><Span></Span>Активный</TableData>
                                <TableData>Піца</TableData>
                                <TableData><Anchor href="#"><HiOutlinePencil /></Anchor></TableData>
                            </TableRow>
                        )
                    })}
                </ProdTable>
            </Wrapper>
        </div>
    );
}

export default ProductList;
