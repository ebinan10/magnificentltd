import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import './login.css'
import { useState } from 'react';

const Login = () => {
  const [password, setPassword]=useState('password')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [eye, setEye]= useState(faEye)
  const ViewPassword = ()=>{
      if(password === 'password'){
        if(pass.length>=1){
          setPassword('text')
          setEye(faEyeSlash)
        }
        else{
          setPassword('password')
          setEye(faEye);
        }
          
      }
      else{
        setPassword('password')
        setEye(faEye);
      }
      
  }
    const InputValue = (e, direction) =>{
        if(direction==='password'){
          setPass(e.target.value)
        }else{
        setEmail(e.target.value)
    }}
    const Submit = () =>{

    }
  return (<div className='login'>
  <div className="loginContainer">
      <div className="loginItem"><div className="icon">
          <span className='loginTitle'>Login</span>
          <FontAwesomeIcon icon={faUser} /></div>
          <form action="/" className="form">
             <input type="email" className="input" value={email}
                  placeholder='Email' required onChange={(e)=>{InputValue(e,'email')}}/>
                  <div className="password">
             <input type={password} className="input"  value={pass}
                  placeholder='Password' onChange={(e)=>{InputValue(e,'password')}}/>
              <FontAwesomeIcon icon={eye} className='ico' onClick={()=>{ViewPassword()}}/></div>
               <button  className='loginBtn' onClick={Submit}>
                Submit
                </button>
          </form>
      </div>
  </div>
</div>
  )
}

export default Login