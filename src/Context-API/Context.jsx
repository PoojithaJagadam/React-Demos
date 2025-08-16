import React from 'react'

import { createContext } from 'react'
import ComponentA from '../Prop-Drilling/ComponentA'
import ExA from './ExA'

//to avoid linear way of sending data i.e prop-drilling context-API cam into picture
//in this we directly send the data from exA --> exC by using DataProvider and DataConsumer
export const Data = createContext() // through this we can pass sigle data
export const Data1 = createContext()
//passing multiple data through context

//in this if we want to pass multiple data we have to create multiple data and pass through data.provider
const Context = () => {

    const name = "Poojithaaaa"
    const age= 21
  return (
    <div>
        <Data.Provider value={name}>
            <Data1.Provider value ={age} >
            <ExA />
            </Data1.Provider>
        </Data.Provider>
    </div>
  )
}

export default Context