import React from "react";
import "./description.css";

const Description = ({ data }) => {
  return (
    <div className="descriptionCard">
      <div className="descriptionHeader">
        <div className="descriptionTitle">
          <p>{data.title}</p>
        </div>
        <div className="descriptionDes">
          <p>{data.description}</p>
        </div>
      </div>
      <div className="descBenefit">
        <div className="descBenefitTitle">
          <p>{data.pointsTitle}</p>
        </div>
        {data.points &&
          data.points.map((val,key) => (
            <div className="descBenefitUnit">
              <div className="benefitTitle">
                <p>{val.title}</p>
              </div>
              <div className="benefitDesc">
                <p>
                  {
                    val.description
                  }
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Description;
