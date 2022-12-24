import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerContainer">
            <div className="headeritem">
                <h2 className="headerName">Brand Name</h2>
                <FontAwesomeIcon icon={faSearch}/>
            </div>
        </div>
    </div>
  )
}

export default Header