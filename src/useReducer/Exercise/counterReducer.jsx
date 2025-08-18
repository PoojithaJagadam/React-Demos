import React from 'react'
import { useReducer } from 'react'
//Q. : reducer fn to manage a simple counters state

// counterReducer.jsx
export const initialState = { count: 0 };

export const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "incrementByAmount":
      return { count: state.count + action.payload };
    case "decrementByAmount":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};




export default {counterReducer, initialState}