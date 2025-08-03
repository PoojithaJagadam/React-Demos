import React from 'react'

/*const Card = (props) => {
  return (
    <div>
        {props.children}
    </div>
  )
}
*/
//
//Destructuring 
const Card = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}
export default Card