import React from 'react'

//in this we will use arrow function to initialise the value i.e inside useState fn
import { useState } from 'react';
const ExampleOne = () => {
    const [count,setCount] = useState(() => { //here we used arrow fn
        const initial =10; 
        return initial;
    })

    const increment = () => {
        setCount(prev => prev+1);
    }
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick = {increment} >Increment</button>
        </div>
    )
}

export default ExampleOne