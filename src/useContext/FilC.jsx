import React from 'react'

import { useContext } from 'react';
import { Data, Data1} from "./Comp"

// here we can directly fetch the data from useContext method so
//that we can directly use in our fetching the data by creating an instance
const FilC = () => {
    const userName = useContext(Data);
    const Age = useContext(Data1);
  return (
    <h1>My name is : {userName} and Iam {Age} old</h1>
  )
}

export default FilC