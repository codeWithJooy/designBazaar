import React from "react";

const ContactTextUnit = ({leftImg,title,desc,linkText,link,arrow}) => {
  return (
    <div className="textUnit">
      <div className="textImage">
        <img src={leftImg} />
      </div>
      <div className="textMain">
        <div className="textTitle">
          <p>{title}</p>
        </div>
        <div className="textDesc">
          <p>{desc}</p>
        </div>
        <div className="textLink">
          <p>{linkText}</p>
          {
            arrow && <img src="Assets/common/right.png" />
          }
          
        </div>
      </div>
    </div>
  );
};

export default ContactTextUnit;
