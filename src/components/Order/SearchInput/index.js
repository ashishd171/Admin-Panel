import React from 'react';
import { Wrapper } from './style';

const SearchInput = () => {

    return (
        <Wrapper>
            <div class="searchInput">
                <image className='clearIcon' src="./icons/cancel.png"></image>
                <input type="text" placeholder="Введіть назву товару" className="setInput" />
                <button type="submit">Пошук</button>
            </div>
        </Wrapper>
    );
}

export default SearchInput;
