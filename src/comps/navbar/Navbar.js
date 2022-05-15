import { Link } from 'react-router-dom'
import React from 'react'

// styles & images
import './Navbar.css'
//import Temple from '../assets/temple.svg'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="header">
          <span>Ramdhan2022 Food Ration Distribution</span>
        </li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/pictures">Pictures</Link></li>
        <li><Link to="/locations">Locations</Link></li>
        <li><Link to="/accounting">Accouting</Link></li>
        <li><Link to="/receipts">Receipts</Link></li>
        
        

      </ul>
    </nav>
  )
}
