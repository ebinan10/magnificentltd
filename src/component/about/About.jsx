import React from 'react'
import './about.css'
import blueprint from './constructionWorker3.jpg'
import speed from './speed.png'
import safety from './worker.png'
import efficiency from './efficiency.png'
import quality from './quality.png'

const About = () => {
  return (
    <div className='about'>
        <div className="aboutContainer">
            <h2 className='aboutTitle'>About</h2>
            <ul className='aboutUl'>
              <h2 className='aboutH'>Our Core Value</h2>
              <li className='aboutli'>Safety <img src={safety} alt="" /></li> 
              <li className='aboutli'>Efficiency <img src={efficiency} alt="" /></li>
              <li className='aboutli'>Speed <img src={speed} alt="" /></li>
              <li className='aboutli'>Quality <img src={quality} alt="" /></li>
            </ul>
        
        <div className="aboutItem">
                <p className='aboutPar'> We are a Modern day Organization 
                  that uses twenty first century tools, skill and human 
                  resource to provide quality building and infrastructure to
                  meet and satisfy modern day infrastructural demand and also
                   our wonderful clients, you are a step away from reaching us
                   email us today and lets discuss your next project.
            </p>
            <p className='aboutPar'>
            <img src={safety} alt="" /> Safety:  One of our very core is 
            the priority we ascribe to safety at site, we recognize that safety 
            is big business and at such we can nt but continue to emphasize
            safety as everyones business.
            </p>
            <p className='aboutPar'>
            <img src={efficiency} alt="" /> 
            Efficiency: We will continue to deliver and be your choice for that 
            next project, think building, think Magnificent Ltd, be rest assured 
            that your project will deliver on time, We have you covered
            </p>
            <p className='aboutPar'>
            <img src={speed} alt="" /> 
            Speed: To deliver your projects on time, choose Magnificent Ltd, 
            you choose timely delivery of project, we deliver at your pace, at 
            Magnificent ltd, we are here to serve you better, place that call today,
            we are here to serve.
            </p>
            <p className='aboutPar'>
            <img src={quality} alt="" />
            Quality: We ensure that all quality and standards are maintained all
            through the project life cycle, quality assurance is a major player in the 
            execution of a durable project, so we are keen on maintaining the quality 
            of project to ensure that we beat and surpass the standards.
            </p>
            </div></div>
    </div>
  )
}

export default About