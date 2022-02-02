import React from 'react';
import {Wrapper,Input,Search,Button} from './style'

const SearchInput = () => {
    
    return (
        <>
        <Wrapper>
            <Search>
                <Input type="text" placeholder="Введіть назву товару" />
                <Button type="submit">Пошук</Button>
            </Search>
        </Wrapper>
        </>
    );
}

export default SearchInput;
