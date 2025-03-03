import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMailBulk, faMapLocation, faMapLocationDot, faMapPin, faPhone, faClock} from '@fortawesome/free-solid-svg-icons'
import './contact.css'
import axios from 'axios';
import { faMap } from '@fortawesome/free-regular-svg-icons';

const Contact = () => {
    const [message, setMessage] = useState('');
    const [input, setInput]= useState('');
    const Submit =() =>{
            axios.post({message,input})
    }
    const EnterInput = (e,value) =>{
        if(value==='message'){
            setMessage(e.target.value)
            console.log(message)
        }
        else{
            setInput(e.target.value)
            console.log(input)
        }
    }
  return (
    <div className='contact'>
        <div className="contactContainer">
            
            <div className="contactItem">
            <div className='contat'>
            <h4 className='contacth2'> Contact</h4>
            </div>
                <div className='contat'>
                <FontAwesomeIcon icon={faMailBulk} />
                    <p className='contactPar'>
                        ebinan10@gmail.com
                    </p>
                </div>
                <div className='contat'>
                <FontAwesomeIcon icon={faPhone} />
                    <p className='contactPar'>
                    +2348134054517
                    </p>
                </div>
                <div className='contat'>
                <FontAwesomeIcon icon={faMapPin} />
                    <p className='contactPar'>No 153A, Ikorodu - Lagos, Agric Bus stop Ikorodu Lagos. </p>
                </div>
                <div className='contat'>
                <FontAwesomeIcon icon={faClock} />
                    <p className='contactPar'>Mon - Fri, 8:00am - 5:00am</p>
                </div>
            </div>
            <div className="contat" id='par'>
               <p>Need to speak to us email us and you are one step away to your next project. <br/>
                We like to hear from you, just make that call and we are right at your door to serve you.
               </p>
                
            </div>
        </div>
    </div>
  )
}

export default Contact