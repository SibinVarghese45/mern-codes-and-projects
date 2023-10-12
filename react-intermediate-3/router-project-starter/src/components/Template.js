import React from 'react'
import frameImg from '../assets/frame.png'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

const Template = ({title, desc1, desc2, image, formtype, setisLoggedIn}) => {
  return (
    <div>
      
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {
                formtype === "signup" ?
                (<SignUpForm/>) :
                (<LoginForm setisLoggedIn={setisLoggedIn}></LoginForm>)
            
            }

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>Sign Up with Google</button>
            
        </div>

        <div>
            <img src={frameImg} 
            alt="Pattern" 
            width={558} 
            height={504} 
            loading='lazy'/>

            <img src={image} 
            alt="Students" 
            width={558} 
            height={504} 
            loading='lazy'/>
        </div>

    </div>
  )
}

export default Template
