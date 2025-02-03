import React from 'react'
import './mailer.css'

function Mailer() {
  return (
    <div className='mailer'>
        <div className="mailerContainer">
            <div className="mailerItem">
            <div className="span">
              <h2 className="newsletter">Subscribe to our newsletter</h2>
            </div>
                <div className="span"><p> Get the latest and new services info</p></div>
                <input type="text" placeholder='Email' className='input'/>
                <button className='btn'>Subscribe</button>
            </div>
            
            </div>  </div>
  )
}

export default Mailer