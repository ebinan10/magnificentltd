import './location.css'

import React from 'react'
import map from './map (1).png'

export const Location = () => {
  return (
    <div className='location'>
       <div className='locationContainer'>
         <div className="locationItem">
         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d990.7932916131408!2d3.4848482660514772!3d6.625401143693889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1742326480882!5m2!1sen!2sng" width="100%" height="100%" style={{border:"0"}} title='magnificentLtd' allowFullScreen="" loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
         </iframe>
         </div>
        </div></div>
  )
}
