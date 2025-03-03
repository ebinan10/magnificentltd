import React from 'react'
import '../component.css'

const data = [
  {
      name:"Building Development",
      description:"Building a project from foundation to finish",
      icon:"" 
  },
  {
      name:"Renovation",
      description:"Maintaining an existing building",
      icon:"" 
  },
  {
      name:"Interior Design",
      description:"Giving beautify touches",
      icon:"" 
  },
  {
      name:"Construction Company",
      description:"Building a project from foundation to finish",
      icon:"" 
  }
]

const Service = () => {
  return (
    <div className='service'>
        <div className="serviceContainer">
            <div className="serviceItem">
                { data.map((data)=> <div className='serviceMap'>
              <h3 className=''>{data.name}</h3>
              <span className=''> {data.icon}</span>
                <p className=''>{data.description}</p>
                </div>) }
            </div>
        </div>
    </div>
  )
} 

export default Service;