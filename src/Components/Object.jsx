import React from 'react'

const Object = () => {
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
        {userinfo.map((user) => (
            <ul key = {user.id}>
                <li>{user.username}</li>
                <li>{user.location}</li>
                <li>{user.email}</li>
            </ul>
        ))
        }
    </main>
  )
}



export default Object