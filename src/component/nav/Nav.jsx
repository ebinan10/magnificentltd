import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faContactCard, faHome, faPhone, faQuestion, faRightToBracket, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <div className='nav'>
        <div className="navContainer">
            <span className="title">Component</span>
            <ul className="navItem"> 
             <li className='li'>
              <Link to="/">Home</Link>
              <FontAwesomeIcon icon={faHome} className='iconNav'/>
              </li> 
             <li className='li'>
              <Link to="/contact">Contact</Link>
              <FontAwesomeIcon icon={faPhone} className='iconNav'/>
              </li>      
             <li className='li'>
              <Link to="/about">About</Link>
              <FontAwesomeIcon icon={faQuestion}  className='iconNav'/>
              </li>       
             <li className='li'>
              <Link to="/component1">Component1</Link>
              </li>      
             <li className='li'>
              <Link to="/component2">Component2</Link>
              </li>      
            </ul>
             <ul className="navItemLi">
              <li className="lilink">
              <Link to="/signup">Sign up</Link>
              <FontAwesomeIcon icon={faUserPlus} className='iconNav'/>
             </li>
              <li className="lilink">
              <Link to="/login">Sign in</Link>
              <FontAwesomeIcon icon={faUser} className='iconNav'/>
             
              </li>
             </ul>

            
        </div>
        
    </div>
  )
}

export default Nav 