import React from 'react'

const Button = () => {

    //button creation
//   return (
//    <button>Click</button>
//   )

    //adding events to button to perform operations
   /* return (
        <button onClick={() =>console.log("You clicked me")}>Click</button>
    )*/

    //we can also write abovelogic using separate function
    const handleClick = () =>   console.log(Math.round(Math.random() *10))
    return (
        <button onClick={handleClick}>Click</button>
    )
}


export default Button