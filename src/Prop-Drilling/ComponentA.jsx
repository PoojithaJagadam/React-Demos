import React from 'react'
import ComponentB from './ComponentB'

//we want to tranfer data from componenetA to ComponenetC so we use prop-drilling
//in this the data transfer should be done as compA --> compB --> compC (linear way)
const ComponentA = ({name}) => {
    
  return (
    <div>
      <ComponentB name = {name} />
    </div>
  )
}

export default ComponentA