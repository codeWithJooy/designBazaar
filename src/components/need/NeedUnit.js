import React from "react";
import "./need.css"

const NeedUnit=({val})=>{
    return(
        <div className="needUnit">
        <div className="needUnitTitle">
            <p>{val.title}</p>
        </div>
        <div className="needUnitDescription">
            <p>{val.description}</p>
        </div>
      </div>
    )
}

export default NeedUnit;