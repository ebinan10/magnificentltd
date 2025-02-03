import React from 'react'
import './home.css'   
import blueprint from './clipboard.png'

const Home = () => {
  return (
    <div className='home'>
        <div className="homeContainer">
            <div className="homeItem">
                <h1 className="text"><span>WELCOME </span> <br /><span>to</span>  <br/> <span>
                Magnificent LTD
                  </span></h1>
            </div>
            <div className="homeContent">
                    <div className="homeContent2">
                      <div className="homecontentX ">
                        <img src={blueprint} alt="" />
                        <h4>
                          General Contracting
                        </h4>
                        <p className='font-[15px] '>
                        As a general contractor, Forte Construction 
                        Corp. oversees the day-to-day efforts of multiple
                         construction sites, manages vendors and subcontractors,
                          and is the central point of communication for all of 
                          its projects. Forte specializes in performing large-scale 
                          public construction contracts in NYC and Long Island. 
                          Forte has considerable experience with the MTA, having
                           upgraded over 40 stations for NYCT and LIRR.</p>
                      </div>
                      <div className="homecontentX homeA">
                      <img src='icons8-service.gif' alt="" />
                        <h4>
                          Pre-Construction
                        </h4>
                        <p className='font-[15px] '>
                        Forte Construction partners with clients 
                        during pre-construction to ensure a smooth 
                        transition from acquisitions, leasing and planning
                         to the construction site. Forte’s discovery process 
                         is essential to understand the project's needs and 
                         goals to turn out a functionally and financially 
                         successful project.​
                          </p>
                      </div>
                     </div>
                     <div className="homeContent3">
                        <div className="homecontentY homeB">
                        <img src='icons8-service.gif' alt="" />
                        <h4>
                          Design Build
                        </h4>
                        <p className='font-[15px] '>Design-Build 
                          contracts offer a unique opportunity for
                           coordination between the general contractor
                            and the architect-engineering firms. 
                            This unified flow of work from initial 
                            concept through completion saves money 
                            and time through effective collaboration 
                            and teamwork.</p>
                        </div>
                        <div className="homecontentY homeA">
                        <img src='icons8-service.gif' alt="" />
                        <h4>
                          Development
                        </h4>
                        <p className='font-[15px] '>Magnificent LTD
                          offers a range of development services tailored
                           to affiliated entities. Our expert team begins with
                           thorough site investigations and market 
                           research to craft preliminary designs, 
                           construction budgets, and precise cash flow
                            analyses.

.</p>
                        </div>
                     </div>
            </div>
            <div className="main">  
                  <h6 className='text'> 
                  Welcome to Magnificent Limited your lasts search for 
                  engineer/building and construction solutions, we are a building, 
                  road and facility construction and design company based 
                  in Nigeria with the main goal of improving the quality 
                  of structures, homes and roads in Nigeria and beyond with our 
                  quality designs and execution patterns. </h6>
                </div>
        </div>
        </div>
  )
}

export default Home