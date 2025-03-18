import React from 'react'
import './service.css'
import service from './construction-site.png'
import renovation from './renovation.png'
import business from './business.png'
import staircase from './staircase.png'

const data = [
  {
      name:"Building Development",
      description:"Building a project from foundation to finish",
      icon:service
  },
  {
      name:"Renovation",
      description:"Maintaining an existing building",
      icon:renovation
  },
  {
      name:"Interior Design",
      description:"Giving beautify touches",
      icon: staircase
  },
  {
      name:"Construction Company",
      description:"Building a project from foundation to finish",
      icon:business
  }
]

const Service = () => {
  return (
    <div className='service'>
        <div className="serviceContainer">
        <div className="serviceTitle"><h2 className=''>Services</h2></div>
            <div className="serviceItem">
                { data.map((data, i)=>  <div className='serviceMap' key={i}>
              <h2 className='serviceh'>{data.name}</h2>
              <span className='serviceSpan'> 
                <img className='serviceImg' src={data.icon} alt="" />
              </span>
              <p className='serviceP'>{data.description}</p>
              </div>) }
            </div>
        </div>
    </div>
  )
} 

export default Service;