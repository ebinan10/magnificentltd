import React from 'react'
import './mailer.css'

function Mailer() {
  return (
    <div className='mailer'>
        <div className="mailerContainer">
            <div className="mailerItem">
            <div className="span">
              <h2 className="title">Subscribe to our newsletter</h2>
            </div>
                <div className="span"><p> get the latest and new product info</p></div>
                <input type="text" placeholder='Email' className='input'/>
                <button className='btn'>Submit</button>
            </div>
            
            </div>  </div>
  )
}

export default Mailer