import React from 'react'


const Weather = () => {
    let temp=55;

        if(temp<15) {
           return  <p>Its cold outside!</p>
        }
        else if(temp >=15 && temp<=25)  {
           return <p>Its nice Outside!</p>
        }
        else if(temp>25) {
           return <p>Its hot Outside!</p>
        }
    
  
}




export default Weather