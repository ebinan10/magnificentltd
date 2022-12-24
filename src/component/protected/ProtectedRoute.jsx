import React, { useEffect } from 'react'
import './protected.css'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({islogin,children}) => {
  const Nav = ()=>{
    const navlink = useNavigate();
  useEffect(() => {
    
    return () => {
      navlink('/login')
    } 
  })
}
   
  if(islogin){ 
    console.log(islogin);
    return(children)
  }
  else{
  Nav()
}
}

export default ProtectedRoute