import React from 'react'

const Prod = ()=> {
    return (
        <Product name ="Phone" price={10000}/>
    )
}
const Product = ({name,price}) => {
  return (
    <div>
        <h2> Name :{name} </h2>
        <p>Price : ${price}</p>
    </div>
  )
}

export default Prod