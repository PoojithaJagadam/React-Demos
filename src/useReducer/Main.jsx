import React from 'react'
import { useReducer } from 'react'

const initialState = {count :0};
//reducer fn can take the state as parameter to indicate current state and action indicates that the type of operation to be performed 
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1};
        case "decrement":
          return {...state, count: state.count-1};
        case "reset":
          return {...state, count:0};
        default:
            return state;
    }
}
const Main = () => {

  const [state, dispatch] =useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() =>dispatch({type:"increment"}) }>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
      <button onClick={() => dispatch({type : "reset"})}>Reset</button>
      <h1>Count: {state.count}</h1>
      
    </div>
  )
}

export default Main