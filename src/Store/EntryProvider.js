import EntryContext from './EntryContext'
import React, {useReducer, useState, useEffect} from 'react';
import {fetchEntries, getCategory, postEntry} from '../API/EntryAPI'

const EntryProvider = (props) => {
    const [data, setdata] = useState({
        spendList: [], 
        categoryList: []
    });

    const addEntryHandler = (newEntry) => {
        postEntry(newEntry)
        console.log(newEntry)
    }

    useEffect(
        ()=> {
            async function fetchData() {
                const categories = await getCategory();
                const entries = await fetchEntries();
                setdata({
                    spendList: entries, 
                    categoryList: categories[0].category
                })
            
            }
            fetchData();
        }, [addEntryHandler])


    const value = {
        spendList: data.spendList,
        categoryList: data.categoryList,
        addEntry: addEntryHandler
    }

    return ( <EntryContext.Provider value={value}>
        {props.children}
    </EntryContext.Provider> );
}
 
export default EntryProvider;