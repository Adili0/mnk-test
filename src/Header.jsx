import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <>
    <header>
    <a href='' className='logo'>Event Booking</a>
      <nav>
        
      <NavLink to='/'>Home</NavLink>
      <NavLink to='login'>Login</NavLink>
    
    
      

    
      </nav>
    </header>
      
    </>
  )
}

export default Header
