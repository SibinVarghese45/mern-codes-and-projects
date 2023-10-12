import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({setisLoggedIn}) => {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        email : "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event)
    {
        let {name, value} = event.target;

        setFormData((prevData) => (
           { 
                ...prevData,
                [name] : value
           }
        ))

    }

    function submitHandler(e){
        e.preventDefault();
        setisLoggedIn(true);
        toast.success("Logged In")
        navigate("/dashboard")
    }

  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>Email Address <sup>*</sup> </p>
        
        <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter email id:'
         
        />
        </label>

        <label>
            <p>Password <sup>*</sup> </p>
        
            <input
                required
                type={showPassword ? ("text") : ("password")}
                name="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
                 {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>

            <Link to="#">
                <p>Forgot password</p>
            </Link>
        </label>


        <button>
           SignUp
        </button>

    </form>
  )
}

export default LoginForm
