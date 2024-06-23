import React from "react";
import "./need.css";
import NeedUnit from "./NeedUnit";

const Need = () => {
  return (
    <div className="needSection">
      <div className="needHeaderSection">
        <div className="needTitle">
          <p>Benefits of a portfolio website ?</p>
        </div>
        <div className="needDescription">
          <p>Elevate your digital presence with DesignBazaar.</p>
        </div>
      </div>
      <div className="needContainer">
        <div className="needTexts">
           <NeedUnit/>
           <NeedUnit />
           <NeedUnit/>
           <NeedUnit />
        </div>
        <div className="needImage">
           <img src="Assets/common/need.webp" />
        </div>
      </div>
    </div>
  );
};

export default Need;
