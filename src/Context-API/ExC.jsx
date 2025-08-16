import React from 'react'
import { Data, Data1 } from './Context'
const ExC = () => {
  return (
    <Data.Consumer>

    {
        (name) => { 
            return (
                <Data1.Consumer>
                    {(age) => {
                      return  <h1>Hello This is {name} and Iam {age} years old</h1>
                    }}
                </Data1.Consumer>
            ) 
        }
    }
    </Data.Consumer>
  )
}

export default ExC