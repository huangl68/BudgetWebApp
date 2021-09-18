import React from 'react';
import SpendList from '../Components/SpendList';
import InputEntry from '../Components/InputEntry';
import EntryProvider from '../Store/EntryProvider';

const EntryPage = () => {

    return (
        <React.Fragment>
            <SpendList></SpendList>
            <InputEntry></InputEntry>
        </React.Fragment> );
}
 
export default EntryPage;