import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'


const Navbar = () => {

  return (
    <nav className="nav-wrapper teal lighten-2">
      <div className="container">
        <span className="brand-logo left">Simple App</span>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)