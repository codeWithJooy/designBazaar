import React from "react";
import { useHistory } from "react-router-dom";

const Header=({setModel})=>{
  const history=useHistory()
  const handleHome=()=>{
    history.push("/home")
  }  
  const openModel=()=>{
    setModel(true)
  }
  return( 
        <div className="headerSection">
          <div className="logoSection" onClick={handleHome}>
            <p>Design</p>
            <p style={{ color: "#fb8500" }}>Bazaar</p>
          </div>
          <div className="linkSection">
            <div className="linkUnit webLink">
              <p>Home</p>
            </div>
            <div className="linkUnit webLink ">
              <p>Categories</p>
            </div>
            <div className="linkUnit webLink">
              <p>Blogs</p>
            </div>
            <div className="linkUnit webLink">
              <p>FAQs</p>
            </div>
            <div className="linkUnit webLink">
              <button onClick={openModel}>Login</button>
            </div>
            <div className="linkUnit">
              <img src="Assets/common/ham.png" />
            </div>
          </div>
        </div>
    )
}

export default Header;