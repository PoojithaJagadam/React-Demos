import React from 'react'

const Copy = () => {
    const copyHandler =() => console.log("Stop stealing my content")
  return (
    //this onCopy will display the msg when we try to copy the content as mentioned below
    <p onCopy = {copyHandler}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, repellat mollitia temporibus possimus magnam sint.</p>
  )
}

export default Copy