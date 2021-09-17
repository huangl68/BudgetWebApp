import React, { useState, useEffect, useRef} from 'react';
import SpendList from '../Components/SpendList';
import InputEntry from '../Components/InputEntry';
import {fetchEntries, postEntry} from '../API/EntryAPI'

const EntryPage = () => {
    const [spendList, setspendList] = useState([]);
    
    useEffect(
        ()=> {
            async function fetchData() {
                const data = await fetchEntries();
                setspendList(data)
            }
            fetchData();
        }, [])

    const AddHandler = (data) => {
        setspendList(spendList.concat(data))
        postEntry(data)
        console.log(data)
    }

    

    return ( <React.Fragment>
        <SpendList data={spendList}></SpendList>
        <InputEntry onAdd = {AddHandler}></InputEntry>
    </React.Fragment> );
}
 
export default EntryPage;