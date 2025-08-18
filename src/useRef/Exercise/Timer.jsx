import React from 'react'
//Implement timer
import {useRef ,useEffect, useState} from "react"
const Timer = () => {

    const [count, setCount] = useState(0);
    const intervalRef = useRef(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000)
    
        return () => {
            clearInterval(intervalRef.current);
        } 
    
    },[])
    
    const stopTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current=null;
    }
  return  <div>
        <h1>Timer: {count} seconds</h1>
        <button onClick={stopTimer}>Stop Timer</button>
    </div>
  
}

export default Timer