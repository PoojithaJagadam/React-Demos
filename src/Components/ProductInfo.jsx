import React from 'react'

const ProductInfo = () => {
  const product = {
    name:"Laptop",
    price : 1500,
    availability : "In Stock",
  };
  return (
    <div>
      <h1> Name : {product.name}</h1>
      <h1> Price : ${product.price}</h1>
      <h1> Availability : {product.availability}</h1>
      
    </div>
  )
}

export default ProductInfo
/*output
Name : Laptop
Price : $1500
Availability : In Stock
*/