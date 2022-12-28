import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faUserPlus, faUser, faCaretDown, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'

const Header = () => {
    const [classname, setClassname] = useState('none');
    const [lang, setLang] = useState('EN')
    const [block, setBlock] = useState('none')
    const [block1, setBlock1] = useState('none')
    const [block2, setBlock2] = useState('none')
    const changePaternSignin = (click) =>{
        if(block2==='none')
        {
            setBlock2('block1')
        }
        else{
            setBlock2('none')
        }
    }
    const changePaternSignup =()=>{
        console.log('first') 
        if(block1==='none')
        {
            setBlock1('block1')
        }
        else{
            setBlock1('none')
        }
    }
    const changeStyle = () =>{
        if(classname==='none'){
            setClassname('block')
        }
        else{
            setClassname('none')
        }
        
    }
    const changePatern =()=>{
     return  block1==='block2'?setBlock2('none'): setBlock2('block2');
    }
    const Lang = (e, name) =>{
        switch(name){
            case 'english':setLang('EN')
            return;
            case 'deutch':setLang('DE');
            return;
            case 'italian':setLang('IT')

    }}
    useEffect(() => {
        setTimeout(() => {
           setBlock1('none') 
           setBlock2('none')
        }, 2000);
       
    }, )
    
  return (
    <div className='header'>
        <div className="headerContainer">
            <h2 className="headerName">Brand Name</h2>
            <div className="headerItem">
                    
                    {lang}<FontAwesomeIcon icon={faCaretDown} onClick={changeStyle}/>
                    <ul className={classname}> 
                        
        <li  className='lang' onClick={(e)=>Lang(e,'english')}>EN</li>
        <li  className='lang' onClick={(e)=>Lang(e,'deutch')}>DE</li>
        <li  className='lang' onClick={(e)=>Lang(e,'english')}>NL</li>
        <li  className='lang' onClick={(e)=>Lang(e,'french')}>FR</li>
        <li  className='lang' onClick={(e)=>Lang(e,'italian')}>IT</li>
        <li  className='lang' onClick={(e)=>Lang(e,'spanish')}>ES</li>
        <li  className='lang' onClick={(e)=>Lang(e,'poland')}>PL</li>
        <li  className='lang' onClick={(e)=>Lang(e,'potugees')}>PT</li>
        <li  className='lang' onClick={(e)=>Lang(e,'english')}>TR</li>
        <li  className='lang' onClick={(e)=>Lang(e,'english')}>RU</li>
        <li  className='lang' onClick={(e)=>Lang(e,'hungarian')}>HU</li>
        <li  className='lang' onClick={(e)=>Lang(e,'english')}>CS</li>
        <li  className='lang' onClick={(e)=>Lang(e,'english')}>SV</li>
                    </ul>
            </div>
            <ul className="HeaderItemLi">
              <li className="lilink"><div className={block1}>Signup</div>
              <Link to="/signup" className='headerLink'>
                <FontAwesomeIcon icon={faUserPlus} className='iconNav'
                 onMouseEnter={changePaternSignup} />
              </Link>
             </li>
              <li className="lilink">
              <Link to="/login" className='headerLink'>
                <div className={block2}>Signin</div>
              <FontAwesomeIcon icon={faRightToBracket} className='iconNav'
              onMouseEnter={changePatern} >
              <i class="fa-sharp fa-solid fa-right-to-bracket"></i>
              </FontAwesomeIcon>
              </Link>
              
             
              </li>
             </ul>
        </div>
    </div>
  )
}

export default Header