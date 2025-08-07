import React from 'react'

const Cart = () => {
    const items= ["IPhone", "earbuds","Charger","IWatch"]

  return (
    <div>
        <h1>Cart 🛒</h1>
        {items.length > 0 && <h2>The no. of items in Cart are {items.length}</h2>}
        <h2>Products</h2>
        {items.map(item  => (
            <ul key = {Math.random()}>
                <li>{item}</li>
            </ul>
        ))}

    </div>
  )
}



const Cartt = () => {
  return (
    <div>
        <Cart />
    </div>
  )
}

export default Cartt
