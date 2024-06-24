import React from "react";
import "./need.css";
import NeedUnit from "./NeedUnit";
import { needVal } from "../../data/need";

const Need = () => {
  return (
    <div className="needSection">
      <div className="needHeaderSection">
        <div className="needTitle">
          <p>{needVal.title}</p>
        </div>
        <div className="needDescription">
          <p>{needVal.description}</p>
        </div>
      </div>
      <div className="needContainer">
        <div className="needTexts">
          {
            needVal.val && needVal.val.map((data,key)=>(
              <NeedUnit val={data}/>
            ))
          }
        </div>
        <div className="needImage">
           <img src="Assets/common/need.webp" />
        </div>
      </div>
    </div>
  );
};

export default Need;
