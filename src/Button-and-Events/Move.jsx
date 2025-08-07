import React from 'react'

const Move = () => {
    function moveHandler() {
        alert('You moved mouseeee')
        console.log('You moved mouseeee')
    }
  return (
    <p onMouseMove={moveHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas iure reprehenderit mollitia aliquam praesentium?</p>
  )
}

export default Move