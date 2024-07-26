import React, {useState} from 'react'
import './LogIn.css'
import { assets } from '../../assets/assets'

const LogIn = ({setShowLogin}) => {

    const [currState, setCurrtState] = useState("Login")
  return (

    <div className='login-page'>
<form className="login-page-container">
    <div className="login-page-title">
<h2>{currState}</h2>
<img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
    </div>
    <div className="login-page-inputs">
    {currState==="Login"? <></>:
        <input type="text" placeholder='Enter your name' required />}
        <input type="email" placeholder='Enter your email' required />
        <input type="password" placeholder='Enter your password' required />
         </div>
        <button>{currState==="Sign Up"? "Create account": "Login"}</button>
        <div className="login-page-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms opf use and privacy policy</p>
        </div>
        {currState === "login"?<p>Create a new account? <span onClick={()=> setCurrtState("Sign Up")}>Click here </span></p>:
        <p>Already have an account? <span onClick={()=> setCurrtState("login")}>Login here</span></p>}
  
   

</form>
      
    </div>
  )
}

export default LogIn
