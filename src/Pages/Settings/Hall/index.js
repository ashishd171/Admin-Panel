import React from 'react';
import EmptyState from '../../../components/EmptyState';
import AddNew from './AddNew';
import HallList from './HallList';

const Hall = () => {
   
    return (
        <>
        <HallList />
        <EmptyState />
        <AddNew />
        </>
    );
}

export default Hall;