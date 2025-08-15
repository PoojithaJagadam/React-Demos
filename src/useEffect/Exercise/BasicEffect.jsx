//Question : to log a msg whenever the component mounts

import React, { useEffect } from 'react'

const BasicEffect = () => {

  useEffect( () => {
    console.log("Hello , Welcome to useeffect")
  },[])
  return (
    <div>
      <h2>Check console</h2>

    </div>
  )
}

export default BasicEffect