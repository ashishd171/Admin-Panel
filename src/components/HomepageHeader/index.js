import React from 'react';
import { SubHeading, Wrapper, Title, SubTitle, SubWrapper } from './style';
import Button from '../AddButtonNew'
import SearchInput from '../SearchInput';
import ViewButton from '../ViewButton';

const HomepageHeader = ({showInput,listgridbtn, productDesign,handleProduct}) => {
    return (
        <Wrapper>
            <Title>Головна</Title>
            <SubHeading>
                <SubTitle>Головна</SubTitle>
                <Button children={"+ Додати"} />
            </SubHeading>
            <SubWrapper>
                <SearchInput showInput={showInput} />
                <ViewButton  listgridbtn={listgridbtn} productDesign={productDesign} handleProduct={handleProduct}/>
            </SubWrapper>
            
        </Wrapper>
    );
}

export default HomepageHeader;
