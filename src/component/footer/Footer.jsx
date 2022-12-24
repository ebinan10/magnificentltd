import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Twitter from './twitter (1).svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerContainer">
        <div className="footerContent">
          <ul className='ul'>
            <h3 className='li'>Support</h3>
            <li className='li'>After Sales</li>
            <li className='li'>Damages</li>
            <li className='li'>Complains</li>
            <li className='li'>Customer Care</li>
        </ul>
        <ul className='ul'>
          <h3 className='li'>Company Name</h3>
          <li className='li'>Explore</li>
          <li className='li'>App Developers</li>
          <li className='li'></li>
        </ul>
        <ul className='ul'>
          <h3 className='li'>Product Category</h3>
          <li className='li'>first</li>
          <li className='li'>second</li>
          <li className='li'>third</li>
        </ul>
        <ul className='ul'>
        <h3 className='li'>Content</h3>
          <li className='li'>Email Address</li>
          <li className='li'>Phone Number</li>
          <li className='li'>Physical Address</li>
          <li className='li'>Content Page</li>
        </ul>
        </div>
        <div className="footerItem">
        <a href="www.twitter.com/ebinan10"><img src={Twitter} alt="" to></img></a>
        <a href="www.facebook.com/ebinan10"><img src={Facebook} alt="" ></img></a>
        <a href="www.youtube.com/ebinan10"><img src={Youtube} alt="" ></img></a>
        <a href="www.linkedin.com/ebinan10"><img src={Linkedin} alt=""></img></a>
            <>&copy;2022 Component. All rights reserved.</>
        </div>
        </div></div>
  )
}

export default Footer