import React from 'react'
import logo from '../img/amazon2.png'
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='nav-items'>
        <div>
            <img className='logo' src={logo} alt="" />
        </div>
        <div className='nav-pages'>
            <NavLink to="/">
                <p>Home</p>
            </NavLink>
            <NavLink to="/cart">
                <FaShoppingCart/>
            </NavLink>
            
        </div>
      </div>
    </div>
  )
}

export default NavBar
