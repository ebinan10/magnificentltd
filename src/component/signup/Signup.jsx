import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus,faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './signup.css'

const Signup = () => {
  const [nameVal, setNameVal] =useState('')
  const [password, setPassword]=useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('password')
  const [eye, setEye]= useState(faEye)
  const ViewPassword = ()=>{
      if(pass === 'password'){
        if(password.length>=1){
          setPass('text')
          setEye(faEyeSlash)
        }
        else{
          setPass('password')
          // setEye(faEye);
        }
          
      }
      else{
        setPass('password')
        setEye(faEye);
      }
      
  }
    const InputValue = (e, direction) =>{
        if(direction==='password'){
          setPassword(e.target.value)
        }else if(direction==='name'){
        setNameVal(e.target.value)
    }else{
      setEmail(e.target.value)
    }
  }
       const Submit = () =>{

    }
  return (
    <div className='signup'>
        <div className="signupContainer">
            <div className="signupItem">
              <div className="icon">
                <span className='signupTitle'>Sign Up</span>
                <FontAwesomeIcon icon={faUserPlus} className='iconStyle'/>
                </div>
                <form className="form">
                     <input type="text" className="input" onChange={(e)=>{InputValue(e,'name')}}
                        placeholder='Name' value={nameVal}/>
                     <input type="email" className="input" onChange={(e)=>{InputValue(e,'email')}}
                        placeholder='Email' value={email}/>
                      <div className="password">
             <input type={pass} className="input" id='password' onChange={(e)=>{InputValue(e,'password')}}
                  placeholder='Password' value={password}/>
              <FontAwesomeIcon icon={eye} className='ico' onClick={ViewPassword}/></div>
                     <button className='signupBtn' onClick={Submit}>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup