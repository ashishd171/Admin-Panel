import React from 'react';
import { Wrapper } from './style'

const CheckBox = ({ Checked }) => {
    return (
        <Wrapper>

            <label for="check" className="checkLabel">
                <p>{Checked}</p>
                <input type="checkbox" id="check" name="check"
                    value="checked" className="checkbox"  />
                <span className="checkmark"></span>
            </label>
        </Wrapper>
    );
}

export default CheckBox;