import React, { useState, useEffect } from 'react'

const Effect = () => {

    /*const [value, setValue] =useState(0);

    useEffect(()=> {
        console.log("Call useeffect");
        document.title = `Increment ${value}`
    }) 

    //here we will not provided any dependency array in useeffect so each time it is rerendering
  return (
    <div>
        <h2>{value}</h2>
        <button onClick={() => setValue(value => value+1)}>Click Me</button>
    </div>
  )
   
  output :
      7Effect.jsx:8 Call useeffect

      
  */

   /* const [value, setValue] =useState(0);

    useEffect(()=> {
        console.log("Call useeffect");
        document.title = `Increment ${value}`
    },[]) 

    //here we provided dependency array so event fires only once it will print call useefct only once remaining increment will be done as usual
  return (
    <div>
        <h2>{value}</h2>
        <button onClick={() => setValue(value => value+1)}>Click Me</button>
    </div>
  )
  
  output : 
  Call useeffect
  //here title value did not change
  */
 
  /*const [value, setValue] =useState(0);

    useEffect(()=> {
      console.log("Call useeffect");
      document.title = `Increment ${value}`
    },[value]) 

  //here we provided dependency array with value 
    return (
    <div>
        <h2>{value}</h2>
        <button onClick={() => setValue(value => value+1)}>Click Me</button>
    </div>
    ) */
    //output: 
    // 4 Call useeffect
    //here we will provided with value and also in this title value willl also change 
    //bco we provided value inside the array

  /*  const [value, setValue] =useState(0);

    if(value>0) {
        useEffect(()=> {
        console.log("Call useeffect");
        document.title = `Increment ${value}`
            },[value]) 
    }
  
    return (
        <div>
            <h2>{value}</h2>
            <button onClick={() => setValue(value => value+1)}>Click Me</button>
        </div>
    )

    

    output: 
        Hooks called by Effect. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks:
        it leads to error bcoz we used useeffct inside conditional statements
    */

   const [value, setValue] =useState(0);

   useEffect(()=> {
            if(value>0) {
        console.log("Call useeffect");
        document.title = `Increment ${value}`
    }
    },[value]) 
  
    return (
        <div>
            <h2>{value}</h2>
            <button onClick={() => setValue(value => value+1)}>Click Me</button>
        </div>
    )

    
    /*
    output: 
       here automatically the value will be incrementing bcoz we can use conditional statements inside useEffect()
    */
 

}



export default Effect
