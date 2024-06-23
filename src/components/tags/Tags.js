import React from "react";
import { useHistory } from "react-router-dom";
import "./tags.css"

const Tags = () => {
  const history=useHistory();
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
  return (
    <div className="categorySelect">
      <div className="categorySelectUnit" onClick={handleEcommerce}>
        <p>ECommerce</p>
      </div>
      <div className="categorySelectUnit" onClick={handleDeveloper}>
        <p>Developers</p>
      </div>
      <div className="categorySelectUnit" onClick={handlePhotographer}>
        <p>Photographer</p>
      </div>
      <div className="categorySelectUnit" onClick={handleDesigner}>
        <p>Designer</p>
      </div>
      <div className="categorySelectUnit" onClick={handleArtist}>
        <p>Artist</p>
      </div>
    </div>
  );
};

export default Tags;
