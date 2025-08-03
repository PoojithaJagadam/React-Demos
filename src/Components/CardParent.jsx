import React from 'react'
import Card from './Card'

const CardParent = () => {
  return (
    <div>     
        <Card>
           <h2> My Card 1</h2>
           <p> My card description  is Card 1</p> 
           <h2> My Card 2</h2>
           <p> My card description  is Card 2</p> 
           <h2> My Card 3</h2>
           <p> My card description  is Card 3</p> 
        </Card>
    </div>
  )
}

export default CardParent