import React from 'react'

/*import { useState, useEffect } from 'react'
const Custom = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])


  return (
    <div>
        {data && data.map((item) => {
            return <p key = {item.id}>{item.title}</p>
        })}
    </div>

    //if we want to render the data in all components then we have to create dat i.e useState and fetch the data i.e useEffect and render
    //this leads to lot of work
    //so to simplify this work we will use custom hooks
  )
}
  */

//to overcome above problem we will do as below
import useFetch from './useFetch'
const Custom = ()=> {

    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')
    return (
    <div>
        {data && data.map((item) => {
            return <p key = {item.id}>{item.title}</p>
        })}
    </div>
    )
}

export default Custom