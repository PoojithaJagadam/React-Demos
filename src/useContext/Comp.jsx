import React from 'react'

import { createContext } from 'react'
import FilA from './FilA';

// //in Context-ApI if we want to pass multiple data we have to create multiple data instances and pass through data.provider 
// and data will be consumed thorugh different callback fns to avoid this we use useContext
//about useContext - in FilC 
export const Data= createContext();
export const Data1= createContext();
const Comp = () => {
    const name = "Hello";
    const age= 15;
    return (
    <Data.Provider value ={name}>
        <Data1.Provider value = {age}>
            <FilA/>
        </Data1.Provider>
    </Data.Provider>
  )
}

export default Comp