import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faContactCard, faHome, faPhone, faQuestion, faRightToBracket, faServer, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faAssistiveListeningSystems } from '@fortawesome/free-solid-svg-icons/faAssistiveListeningSystems'
import magnificent from './IMG-20250202-WA0064-removebg-preview (1).png'

const Nav = () => {
  return (
    <div className='nav'>
        {/* <div className="navContainer">
            <span className="title">MAGNIFICENT LTD</span>
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
              <Link to="/services">Service</Link>
               <FontAwesomeIcon icon={faAssistiveListeningSystems} className='iconNav'/>
              </li>      
             <li className='li'>
              <Link to="/component2">Component2</Link>
              </li>      
            </ul>
          
        </div> */}
        <span className="title">MAGNIFICENT</span>
        <section className=" md:hidden md:w-0  h-[4vh] mt-4 flex justify-end items-center my-auto w-full" id='top-nav'>
    
    <input id="menu-toggle" type="checkbox" className='h-full md:hidden'/>
    <label className='menu-button-container md:hidden w-1/3  ml-auto' for="menu-toggle">
    <div class='menu-button md:hidden'></div>
  </label>
   <ul className='menu md:hidden w-full m-auto mt-[21vh] bg-[#8c92a9] bg-opacity-60 text-sm'>
             <li className='z-100 w-full pt-[10vh]  h-[7vh] cursor-pointer '>
              <NavLink  to="">
              <h1 className='ml-[3vw] w-full flex justify-center pl-[10vh] md:w-0 md:none md:h-0 '>Home</h1>
              </NavLink>
             </li>
             <li className='z-100 w-full h-[7vh] cursor-pointer'>
              <NavLink  to="contact">
               <h1 className='ml-[3vw] w-full md:w-0 md:none md:h-0'> Contact</h1>
              </NavLink>
             </li>
             <li>
              <NavLink  to="/about">
              <h1 className='ml-[3vw] w-full md:w-0 md:none md:h-0'> About</h1>
              </NavLink>
              </li>
              <li>
              <NavLink  to="/location">
              <h1 className=' w-full md:w-0 md:none md:h-0'> Location</h1>
                </NavLink>
              </li>
              <li>
              <NavLink  to="/service" >
               <h1 className=' w-full md:w-0 md:none md:h-0'> Our Service</h1>
                </NavLink>
              </li>
              <li>
                <NavLink  to="/gallary" >
               <h1 className=' w-full '> Gallery</h1>
                </NavLink>
              </li>
   </ul>
  </section>
          <div className="logo">
            <img src={magnificent} alt="" /> 
          </div>
    </div>
  )
}

export default Nav 