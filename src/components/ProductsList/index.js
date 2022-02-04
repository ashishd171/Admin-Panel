import React, {useEffect} from 'react';
import { Wrapper, ProdTable, TableBody, TableRow, TableDatafirst, TableDataSecond, TableData, Image, Span, TableHeadingFirst, TableHeadingPhoto, TableHeadingStatus, TableHeadingNizwa, TableHeadingEdit, Anchor } from './style'
import { HiOutlinePencil } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import CategoryItemEdit from '../category/CategoryItemEdit';

const ProductList = ({ toggle, isModal ,listStructure}) => {
    const history = useHistory();

    return (
        <div>
            {
            isModal ?
                <CategoryItemEdit />
                :
                <Wrapper>
                    <ProdTable>
                        <TableBody>
                            <TableRow>
                                <TableHeadingFirst></TableHeadingFirst>
                                <TableHeadingPhoto>Фoтo</TableHeadingPhoto>
                                <TableHeadingStatus>Cтaтyc</TableHeadingStatus>
                                <TableHeadingNizwa>Haзвa</TableHeadingNizwa>
                                <TableHeadingEdit>Дiя</TableHeadingEdit>
                            </TableRow>
                            {listStructure.map((item, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableDatafirst><Image src="./images/text.svg" /></TableDatafirst>
                                        <TableDataSecond><Anchor href="#"><Image src="./images/userphoto.svg" /></Anchor></TableDataSecond>
                                        <TableData><Span></Span>{item.name}</TableData>
                                        <TableData>{item.name}</TableData>
                                        <TableData>
                                            <Anchor onClick={() => toggle()}><HiOutlinePencil /></Anchor>
                                        </TableData>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </ProdTable>
                </Wrapper>
            }
        </div>
    );
}
export default ProductList;