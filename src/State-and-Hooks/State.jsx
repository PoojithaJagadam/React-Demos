import React from 'react'
import {useState} from "react";
const State = () => {
    /*const counter = useState(0);
    console.log(counter); 
    
    by the above format we will get 
    output in array format
    like : [0, ƒ]
            0: 0
            1: ƒ ()
            length: 2
            [[Prototype]]: Array(0)

    */
 
    /*
        //to avoid that we will destructure tha array

   const [count,setCount] = useState(100);
   //here setCount is the function through which we can change the initial value
    const increment =() => setCount(count + 1);
    const decrement =() => setCount(count - 1);
   return (
    <div>
        <h1>{count}</h1>
        <button  onClick={increment}>+</button>
        <button  onClick={decrement}>-</button>
    </div>
  ) */
/*
    //retrieving the array elements

    const [friends , setFriends] = useState(['Hari', 'krishna']);

    //this addNewFrd function is used to add new frds into the array
    const addNewFrd = () => setFriends([...friends, 'Giri'])
   
    //this removefrs fn willl filter the elemnts based on the condition provided
    const removeFrd = () => setFriends(friends.filter((f) => f!='Giri'))

    //this fn will update the details
    const updateFrd = ()=> {
        setFriends(friends.map(f => f=== 'Hari' ? 'Harini': f));
    }
    return (
        <secton>
            {friends.map(f => (
                <li key= {Math.random()}>{f}</li>
            ))}
            <button onClick={addNewFrd}>Add new Friend</button>
            <button onClick = {removeFrd}>Remove Friend</button>
            <button onClick = {updateFrd}>Update Friend</button>

        </secton>
    )
*/

//updating objects

const [movie, setMovie]= useState({
    name : "KGF ",
    rating :7
})

const handleClick =()=> setMovie({...movie, rating : 5})
return (
    <section>
        <h1>Title : {movie.name}</h1>
        <p>Rating : {movie.rating}</p>
        <button onClick={handleClick}>Change Rating</button>
    </section>
)

}

export default State