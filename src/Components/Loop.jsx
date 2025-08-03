

/*const Loop = () => {
    const numbers= [1,2,3,4,5]
  return (
    <main>  
        {numbers.map(number => ( //for iterating thriugh each number we use map function
            <ul key = {number}> 
                <li>{number}</li> 
            </ul> //without using key in ul we will get this error"Loop.jsx:9  Each child in a list should have a unique "key" prop." so
            //this is bcoz when we delete or add into the list it will confuse where to add so for that we will assign unique key for each
            //number
        ))
        //when we use curly braces then only we will get the number in list
        }
    </main>
  )
}

export default Loop 

/*output

1
2
3
4
5
*/

//multiple objects


const Loop = () => {
    const userinfo = [
        {
            username : "John",
            location:"hyd",
            email : "john@gmail.com"
        },
        {
            username : "Alex",
            location : "delhi",
            email : "hello@gmail.com"
        },

        {
            username : "Hell",
            location : "new york",
            email : "hell@gmail.com"
        },
    ]
  return (
    <main>
        {userinfo.map((user) => {
            <ul key = {Math.random()}>
                <li>{user.username}</li>
                <li>{user.location}</li>
                <li>{user.email}</li>
            </ul>
        })
        }
    </main>
  )
}

export default Loop
