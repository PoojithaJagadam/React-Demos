import React from 'react'

//This is the custom componenet in which we created data and fetching data
//This can be reusable in different components
//by importing this useEffect file
import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])

  return [data];
}

export default useFetch