import React,{useState} from 'react'
import "./gettingStarted.css"

const GettingStarted=({setModel})=>{
    const [login,setLogin]=useState(true)
    return(
      <>
        {
            login && <Login setLogin={setLogin} setModel={setModel}/>
        }
        {
            !login && <SignUp setLogin={setLogin} setModel={setModel}/>
        }
      </>
    )
}

export default GettingStarted;

const Login=({setLogin,setModel})=>{
    const handleSignup=()=>{
        setLogin(false)
    }
    const handleClose=()=>{
        setModel(false)
    }
    return(
      <div className='startedDiv'>
        <div className='startedContainerLogin'>
          <img className="startedClose" src="Assets/common/close.png" onClick={handleClose}/>  
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
            <p>Don't Have an account yet?<span onClick={handleSignup}>Sign Up</span></p>
          </div>
        </div>
      </div>
    )
}

const SignUp=({setLogin,setModel})=>{
    const handleLogin=()=>{
        setLogin(true)
    }
    const handleClose=()=>{
        setModel(false)
    }
    return(
      <div className='startedDiv'>
        <div className='startedContainer'>
          <img className="startedClose" src="Assets/common/close.png" onClick={handleClose}/>  
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
            <p>Already having an account ?<span onClick={handleLogin}>Login Here</span></p>
          </div>
        </div>
      </div>
    )
}