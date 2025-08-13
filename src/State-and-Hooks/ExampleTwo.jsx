import React, { useState } from 'react'

const ExampleTwo = () => {
    const [randomNumber, setRandomNumber] = useState(() => {
        const initial = Math.floor(Math.random()*100) ;
        return initial
    })

    const newNo = () => {
        setRandomNumber(randomNumber => Math.floor(Math.random() *100))
    }
  return (
    <div>
        <h1>Random Number : {randomNumber}</h1>
        <button onClick = {newNo} >New Number</button>
    </div>
  )
}

export default ExampleTwo