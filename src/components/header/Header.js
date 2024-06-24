import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Header = ({ setModel }) => {
  const history = useHistory();
  const [showDropdown, setShowDropdown] = useState(false);
  const [openMobDrop,setMobDrop]=useState(false);
  const handleHome = () => {
    history.push("/home");
  };
  const handleContact=()=>{
    history.push("/contact")
  }
  const handleEcommerce=()=>{
    history.push("/ecommerce")
  }
  const handleDeveloper=()=>{
    history.push("/developer")
  }
  const handleDesigner=()=>{
    history.push("/designer")
  }
  const handlePhotographer=()=>{
    history.push("/photographer")
  }
  const handleArtist=()=>{
    history.push("/artist")
  }
  const openModel = () => {
    setModel(true);
  };
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  return (
    <div className="headerSection">
      <div className="logoSection" onClick={handleHome}>
        <p>Design</p>
        <p style={{ color: "#fb8500" }}>Bazaar</p>
      </div>
      <div className="linkSection">
        <div className="linkUnit webLink" onClick={handleHome}>
          <p>Home</p>
        </div>
        <div
          className="linkUnit webLink "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p>Categories</p>
          {showDropdown && (
            <div className="dropdownMenu">
              <p onClick={handleArtist}>Artist</p>
              <p onClick={handleDeveloper}>Developer</p>
              <p onClick={handleDesigner}>Designer</p>
              <p onClick={handleEcommerce}>Ecommerce</p>
              <p onClick={handlePhotographer}>Photographer</p>
            </div>
          )}
        </div>
        <div className="linkUnit webLink">
          <p>FAQs</p>
        </div>
        <div className="linkUnit webLink" onClick={handleContact}>
          <p>Contact Us</p>
        </div>
        <div className="linkUnit webLink">
          <button onClick={openModel}>Login</button>
        </div>
        <div className="linkUnit mobLink">
          {
            !openMobDrop && <img src="Assets/common/ham.png" onClick={()=>{setMobDrop(!openMobDrop)}}/>
          }
          {
            openMobDrop && <img src="Assets/common/closeColor.png"  onClick={()=>{setMobDrop(!openMobDrop)}}/>
          }
        </div>
      </div>
      {
        openMobDrop && 
        <div className="mobileDrops mobLink">
        <div className="mobLinkUnit" onClick={handleHome}>
          <p>Home</p>
        </div>
        <div className="mobLinkUnit" onClick={handleEcommerce}>
          <p>Ecommerce Designs</p>
        </div>
        <div className="mobLinkUnit" onClick={handleArtist}>
          <p>Artist PortFoios</p>
        </div>
        <div className="mobLinkUnit" onClick={handleDesigner}>
          <p>Designer PortFoios</p>
        </div>
        <div className="mobLinkUnit" oonClick={handleDeveloper}>
          <p>Developer PortFoios</p>
        </div>
        <div className="mobLinkUnit" onClick={handlePhotographer}>
          <p>Photographer PortFoios</p>
        </div>
        <div className="mobLinkUnit">
          <p>FAQs</p>
        </div>
        <div className="mobLinkUnit" onClick={handleContact}>
          <p>Contact Us</p>
        </div>
      </div>
      }
    </div>
  );
};

export default Header;
