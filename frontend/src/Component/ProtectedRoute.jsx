import React from 'react'
import AuthenticateRequire from './AuthenticateRequire';

const ProtectedRoute = ({ children , AllowedUsers }) => {
    const myCookie = {
    name : "Rauf Ahmad Khan",
    gmail : "devraufahmadniazi@gmail.com",
    role : "user",
  }
  let allowed = 1;
  allowed =  myCookie && AllowedUsers && AllowedUsers.indexOf(myCookie.role);
  console.log("The allowed in the ProtectedRute is : " , allowed);
  console.log("The allowed in the protect rotue is : " , allowed);
  
  if(allowed == -1 || !myCookie){
    console.log("We have entered the allowed if in the protected route");
    
    return (
        <AuthenticateRequire />
    )
  }
  return children
}

export default ProtectedRoute
