import { NavLink } from "react-router-dom"
import React from "react"

// styles & images
import "./Sidebar2.css"
// import DashboardIcon from '../assets/dashboard_icon.svg'
// import AddIcon from '../assets/add_icon.svg'

export default function Sidebar2() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          
          {/* avatar & username here later */}
          <p>User Name</p>  
        </div>
        <div className="heading">
          <span></span>
          </div>  
        <nav className="links">
          <ul>
            <li>
                
                {/* <span>Contacts</span> */}
                <NavLink exact to="/accounting">
                <li>Accounting</li>
              </NavLink>
              <NavLink exact to="/financialInstitutes">
                <li>Financial Institutes</li>
              </NavLink>              
              <NavLink exact to="/digitalAccounts">
                <li>Digital Accounts</li>
              </NavLink>
              <NavLink exact to="/messages">
                <li>Standard Messages</li>
              </NavLink>                               
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
