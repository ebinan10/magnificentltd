import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faUserPlus, faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
    const [classname, setClassname] = useState('none');
    const [lang, setLang] = useState('EN')
    const [block, setBlock] = useState('none')
    const [block1, setBlock1] = useState('none')
    const changePaternSignin =(click)=>{
        if(block==='none')
        {
            setBlock('block')
        }
        else{
            setBlock('none')
        }
    }
    const changePaternSignup =(click)=>{
        if(block1==='none')
        {
            setBlock1('block')
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
    const Lang = (e, name) =>{
        switch(name){
            case 'english':setLang('EN')
            return;
            case 'deutch':setLang('DE');
            return;
            case 'italian':setLang('IT')

    }}
  return (
    <div className='header'>
        <div className="headerContainer">
            <h2 className="headerName">Brand Name</h2>
            <div className="headerItem">
                    <ul className="language">
                        <li className='lang'></li>
                    </ul>
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
              <li className="lilink">
              <Link to="/signup" className={block}>Sign up</Link>
              <FontAwesomeIcon icon={faUserPlus} className='iconNav' onClick={changePaternSignup}/>
             </li>
              <li className="lilink">
              <Link to="/login" className={block1}>Sign in</Link>
              <FontAwesomeIcon icon={faUser} className='iconNav' onClick={changePaternSignin}/>
             
              </li>
             </ul>
        </div>
    </div>
  )
}

export default Header