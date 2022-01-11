import React from 'react';
import { Wrapper, FirstBar, SecondBar } from './style'
import ContentLoader from 'react-content-loader'

const ListViewSkeleton = () => {

    return (
        <Wrapper>
            <ContentLoader viewBox="0 0 380 70">
                <rect x="10" y="10" rx="o" ry="3" width="260" height="6" />
                <rect x="10" y="20" rx="o" ry="3" width="260" height="6" />
                <rect x="10" y="30" rx="0" ry="3" width="160" height="6" />
            </ContentLoader>
        </Wrapper>
    );
}

export default ListViewSkeleton;