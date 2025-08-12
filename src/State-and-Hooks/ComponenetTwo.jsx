import React from 'react'

const ComponenetTwo = ( {count, onClickHandler}) => {
    let handleClick = () => onClickHandler();
  return (
    <div>
        <p>{count}</p> 
        <button onClick={handleClick} >Increment</button>
    </div>
  )
}

export default ComponenetTwo