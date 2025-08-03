import React from 'react'

const Greeting = () => {
    const greet= prompt("Enter greeting message")
    const name = "John";
    
  return (
    <div>
        <h1>{greet}</h1>
    </div>
  )
}

export default Greeting