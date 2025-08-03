import React from 'react'
const Users = () => {
    return (
        <div>
            <Person name="Krishna" age = {30} />
        </div>
    )
}
export default Users;

const Person = (props) => {

  return (
    <div>
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
    </div>
  )
}

//export default Person