import React from 'react'
import "./gettingStarted.css"

const SignUp=()=>{
    return(
      <div className='startedDiv'>
        <div className='startedContainer'>
          <img className="startedClose" src="Assets/common/close.png" />  
          <div className='startedHeader'>
            <p>Sign Up</p>
          </div>
          <div className='startedInputContainer'>
            <div className='startedlabel'>
                <p>Full Name</p>
            </div>
            <div className='startedInput'>
                <input type="text"  onChange={()=>{}}/>
            </div>
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
            <div className='startedlabel'>
                <p>Confirm Password</p>
            </div>
            <div className='startedInput'>
                <input type="text" onChange={()=>{}}/>
            </div>
          </div>
          <div className='startedInputContainer'>
            <button>Sign Up</button>
          </div>
          <div className='startedInputContainer'>
            <p>Already having an account ?<span>Login Here</span></p>
          </div>
        </div>
      </div>
    )
}

export default SignUp;