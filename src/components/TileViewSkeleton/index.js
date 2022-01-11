import React from 'react';
import { Table } from 'reactstrap';
import {Wrapper,Card} from './style'
import ContentLoader from 'react-content-loader'

const TileViewSkeleton = () => {

    return (
        <Wrapper>
            <ContentLoader viewBox="0 0 380 200">
                <rect x="12" y="12" rx="0" ry="3" width="85" height="60" />
                <rect x="102" y="12" rx="0" ry="3" width="85" height="60" />
                <rect x="192" y="12" rx="0" ry="3" width="85" height="60" />
                <rect x="282" y="12" rx="0" ry="3" width="85" height="60" />
                {/* next row */}
                <rect x="12" y="82" rx="0" ry="3" width="85" height="60" />
                <rect x="102" y="82" rx="0" ry="3" width="85" height="60" />
                <rect x="192" y="82" rx="0" ry="3" width="85" height="60" />
                <rect x="282" y="82" rx="0" ry="3" width="85" height="60" />
            </ContentLoader>
        </Wrapper>
    );
}

export default TileViewSkeleton;
