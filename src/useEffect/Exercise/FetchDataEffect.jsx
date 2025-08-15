import React, {useState, useEffect } from 'react'

const FetchDataEffect = () => {

    const [data, setData] = useState([]);
    useEffect(()=> {
        async function getData() {
            const res= await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json();
            if(data && data.length) 
                setData(data)
        }
        getData()
    },[])
  return (
    <div>
        <h1>FirstPost Title</h1>
        { data.length > 0 ? <h2>{data[0].title}</h2> : <p>Loading....</p>}
    </div>
  )
}

export default FetchDataEffect