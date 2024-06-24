import React from 'react'
import "./gettingStarted.css"

const Login=()=>{
    return(
      <div className='startedDiv'>
        <div className='startedContainerLogin'>
          <img className="startedClose" src="Assets/common/close.png" />  
          <div className='startedHeader'>
            <p>Login</p>
          </div>
          <div className='startedInputContainer'>
            <div className='startedlabel'>
                <p>Email</p>
            </div>
            <div className='startedInput'>
                <input type="text" onChange={()=>{}}/>
            </div>
          </div>
          <div className='startedInputContainer'>
            <div className='startedlabel'>
                <p>Password</p>
            </div>
            <div className='startedInput'>
                <input type="text" onChange={()=>{}}/>
            </div>
          </div>
          <div className='startedInputContainer'>
            <button>Login</button>
          </div>
          <div className='startedInputContainer'>
            <p>Don't Have an account yet?<span>Sign Up</span></p>
          </div>
        </div>
      </div>
    )
}

export default Login;