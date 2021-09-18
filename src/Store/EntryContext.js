import React from 'react';

const EntryContext = React.createContext({
    spendList: [],
    categoryList: [],
    addEntry: (newEntry) =>{}
})

export default EntryContext;