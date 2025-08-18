import React from 'react'

import { useRef } from 'react';
const UseRef = () => {

    const inputElement = useRef(null);
    //manaki kavalsina position dhaggara focus cheyamani chepthadhi like curr pos
    const focusInput = () =>{
        inputElement.current.focus();
        //idhi manam button click cheyagaane e value paina focus cheyyali ani chepthadhi
        inputElement.current.value = 'Poojitha'
    }
  return (
    <div>
        <input type="text" ref={inputElement}/>
        <button onClick={() => focusInput()}>Focus & Write</button>
    </div>
  )
}


export default UseRef