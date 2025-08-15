//Q : update the doc title whenever count changes

import React, { useEffect, useState } from 'react'

const CounterEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        
        document.title = `Increment ${count}`
    },[count]);
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default CounterEffect