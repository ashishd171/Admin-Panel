import React from 'react';
import { SubHeading, Wrapper, Title, SubTitle, SubWrapper } from './style';
import Button from '../AddButtonNew'
import SearchInput from '../SearchInput';
import ViewButton from '../ViewButton';

const Header = ({showButton,showInput,listgridbtn, productDesign,handleProduct}) => {
   
    return (
        <Wrapper>
            <Title>Головна</Title>
            <SubHeading>
                <SubTitle>Головна</SubTitle>
                <Button showButton={true} children={"+ Додати"} />
            </SubHeading>
            <SubWrapper>
                <SearchInput showInput={true} />
                <ViewButton  listgridbtn={true} productDesign={productDesign} handleProduct={handleProduct}/>
            </SubWrapper>
        </Wrapper>
    );
}
export default Header;