import React from 'react'
import UpdateUser from './UpdateUser'
import UserProfile from './UserProfile'
import { UserProvider } from './UserContext'
const Ap = () => {
  return (
   
    <UserProvider>
        <UserProfile />
        <UpdateUser/>
    </UserProvider>
  )
}

export default Ap