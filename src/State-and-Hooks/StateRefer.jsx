import React from 'react'

import {useState} from "react";
import ComponenetOne from './ComponenetOne'; //child Components
import ComponenetTwo from './ComponenetTwo';


const StateRefer = () => { //parent Componenet
    const [count, setCount]= useState(0);

  return (
    // rendering  child components in parent componenet
    <section>
        <ComponenetOne count={count} onClickHandler ={() => setCount(count+1)}/> 
        <ComponenetTwo count={count} onClickHandler ={() => setCount(count+1)}/>


    </section>
  )
}

export default StateRefer