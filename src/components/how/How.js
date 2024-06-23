import React from "react";

import HowUnit from "./HowUnit"

const How = () => {
  return (
    <div className="needSection">
      <div className="needHeaderSection">
        <div className="needTitle">
          <p>How It Works ?</p>
        </div>
        <div className="needDescription">
          <p>How to Buy a Portfolio and Setup it in 3 Simple Steps.</p>
        </div>
      </div>
      <div className="needContainer">
        <div className="needTexts">
           <HowUnit/>
           <HowUnit />
           <HowUnit/>
           <HowUnit />
        </div>
        <div className="needImage">
           <img src="Assets/common/how.webp" />
        </div>
      </div>
    </div>
  );
};

export default How;