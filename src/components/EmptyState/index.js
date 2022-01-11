import React from 'react';
import {Wrapper, StateText, Content,Image} from './style'
import Button from '../AddButtonNew'

const EmptyState = () => {
    return (
        <Wrapper>
            <Content>
                <Image src="./images/empty-image.svg" />
                <StateText>Немає данних</StateText>
                <Button children={"+ Додати"} display={"none"} />
            </Content>
        </Wrapper>
    );
}

export default EmptyState;
