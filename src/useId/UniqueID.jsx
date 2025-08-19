import React from 'react'

import { useId } from 'react'

const UniqueID = () => {
    const id = useId()
    //we can create unique ids by adding prefixes
  return (
    <div>
        <label htmlFor={`${id}-email`}>Email</label>
        <input type= "email" id = {`${id}-email`} />

        <br/>

        <label htmlFor={`${id}-password`}>Password</label>
        <input type= "password" id = {`${id}-password`} />
    </div>
  )
}
//now for different components unique id's will be assigned 
//we can see id's through --> browser --> inspect --> html code

export default UniqueID