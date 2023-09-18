import React, { useState } from 'react'
import {Link} from "react-router-dom"

import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './NavBar.css'

function NavBar() {
  const [click,setClick] = useState(false);
  const [button,setButton] = useState(true)

  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true)
    }
  }

  const handleClick = () =>{
    setClick(!click)
  }
 const closeMobileMenu = () =>{
     setClick(false)
 }
 
  return (
  
    <React.Fragment>
    <nav className='navbar'>
    <div navbar-container>
        <Link to="/" className='navbar-logo'>
       
        </Link>
        <div className='menu-icon'onClick={handleClick}>
        {click ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul className={click ? 'nav-menu active': 'nav-menu'}>
          <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
          </li>

          <li className='nav-item'>
          <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
            About us
          </Link>
          </li>

          <li className='nav-item'>
          <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
            Contact us
          </Link>
          </li>

          <li className='nav-item'>
          <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
            Services
          </Link>
          </li>
        </ul>
    </div>
    </nav>
    </React.Fragment>
    
  )
}

export default NavBar