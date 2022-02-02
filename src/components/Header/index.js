import React, { useEffect, useState } from 'react';
import { SubHeading, Wrapper, Title, SubTitle, SubWrapper } from './style';
import Button from '../AddButtonNew'
import SearchInput from '../SearchInput';
import ViewButton from '../ViewButton';
import { useLocation } from 'react-router-dom';

const Header = ({ productDesign, handleProduct ,handleProductfun}) => {

    const [show, setShow] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/category") {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [location]);

    return (
        <Wrapper>
            <Title>Головна</Title>
            <SubHeading>
                <SubTitle>Головна</SubTitle>
                {show ?
                    <Button children={"+ Додати"} />
                : null}
            </SubHeading>
            <SubWrapper>
                {show ?
                    <SearchInput />
                : null}
                
                {show ?
                    <ViewButton productDesign={productDesign} handleProduct={handleProduct} handleProductfun={handleProductfun} />
                : null}

                </SubWrapper>
        </Wrapper>
    );
}
export default Header;