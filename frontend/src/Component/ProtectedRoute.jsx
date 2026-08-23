import React from 'react'
import AuthenticateRequire from './AuthenticateRequire';

const ProtectedRoute = ({ children , AllowedUsers }) => {
    const myCookie = {
    name : "Rauf Ahmad Khan",
    gmail : "devraufahmadniazi@gmail.com",
    role : ""
  }
  const allowed = 0 //AllowedUsers && AllowedUsers.indexOf(myCookie.role);
  console.log("The allowed in the ProtectedRute is : " , allowed);
  
  if(allowed == -1){
    console.log("We have entered the allowed if in the protected route");
    
    return (
        <AuthenticateRequire />
    )
  }
  return children
}

export default ProtectedRoute
