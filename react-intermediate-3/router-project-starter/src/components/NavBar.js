import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import toast from 'react-hot-toast'

const NavBar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setisLoggedIn = props.setisLoggedIn;

  return (
    <div className='flex justify-evenly'>
      <NavLink to="/">
        <img src={Logo} alt="Logo" width={160} height={32} loading='lazy'/>
      </NavLink>

    <nav>
        <ul>
            <li  className='flex gap-3 '>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
            </li>
        </ul>
    </nav>

    {/* login/signup/logout/dashboard button */}

    <div className='flex gap-3 ml-5 mr-3'>
        
            {
                isLoggedIn===false &&
                <Link to="/login">
                    <button className=''>Login</button> 
                </Link>
            }

            {
                isLoggedIn===false &&
                <Link to="/signup">
                    <button>SignUp</button> 
                </Link>
            }

            {
                isLoggedIn &&
                <Link to="/logout">
                    <button onClick={() => {
                        setisLoggedIn(false);
                        toast.success("Sucessfully Logged Out")
                    }}
                    >Logout</button> 
                </Link>
            }

            {
                isLoggedIn &&
                <Link to="/dashboard">
                    <button>DashBoard</button> 
                </Link>
            }
        
    </div>

    </div>
  )
}

export default NavBar