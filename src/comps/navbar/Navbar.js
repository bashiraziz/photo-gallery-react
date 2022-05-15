import { Link } from 'react-router-dom'
import React from 'react'

// styles & images
import './Navbar.css'
//import Temple from '../assets/temple.svg'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        {/* <li className="logo">
          <img src={Temple} alt="dojo logo" />
          <span>Add --&#62; (Icon) --- </span>
          <span>End of Journey</span>
        </li> */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pictures">Pictures</Link></li>
        <li><Link to="/accounting">Accouting</Link></li>
        <li><Link to="/accounting">Receipts</Link></li>
        

      </ul>
    </nav>
  )
}
