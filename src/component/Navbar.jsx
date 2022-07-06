import React from 'react'
import './Navbar.css'

import { Button } from '@mui/material';
function Navbar() {
  return (
    <div>

    <nav>
    <div className="brand">
      <h3>MyBrand</h3>
    </div>
    <div className="navigation">
      <ul className="menu">
        <li><a href="#">Main Dashboard</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="search">
        <div className="search-content">
            
          <button className="search-button"><i className="fa fa-search"></i></button>
                <input type="text" className="search-input" placeholder="Search here..." />
          {/* <Button variant='contained'>Search</Button> */}
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
