import React from 'react';
import { Wrapper,ProdTable,TableBody,TableRow,TableDatafirst,TableDataSecond,TableData,Image,Span,TableHeadingFirst,TableHeadingPhoto,TableHeadingStatus, TableHeadingNizwa, TableHeadingEdit, Anchor} from './style'
import { HiOutlinePencil } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import CategoryItemEdit from '../category/CategoryItemEdit';

const ProductList = ({toggle, isModal}) => {
    const history = useHistory();
    const Tabl = [1, 2, 3, 4,5,6]
  console.log("handleModal",toggle)
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
                    {Tabl.map((items, index) => {
                        return (
                            <TableRow key={index}>
                                <TableDatafirst><Image src="./images/text.svg" /></TableDatafirst>
                                <TableDataSecond><Anchor href="#"><Image src="./images/userphoto.svg" /></Anchor></TableDataSecond>
                                <TableData><Span></Span>Aктивный</TableData>
                                <TableData>Пiцa</TableData>
                                <TableData><Anchor onClick={()=>toggle()}
                                // onClick={(event)=>{
                                //     event.preventDefault()
                                //     history.push('/category/item/edit/'+index)}}
                                    href="#"><HiOutlinePencil /></Anchor>
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
