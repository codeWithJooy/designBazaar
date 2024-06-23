import React,{useState} from "react";
import "./faq.css"

const FaqUnit = () => {
    const [open,setOpen]=useState(false)
    const handleToggle=()=>{
       setOpen(!open)
    }
    return (
    <div className="faqUnit">
      <div className="faqMain">
        <div className="faqQuestion">
          <p>What is a portfolio website ?</p>
        </div>
        {!open && <img src="Assets/common/plus.png" onClick={handleToggle}/>}
        {open && <img src="Assets/common/close.png" onClick={handleToggle}/>}
      </div>
      {
        open &&
        <div className="faqAnswer">
        <p>
          A portfolio website is a curated collection of your work, showcasing
          your skills and accomplishments. It benefits you by providing a
          visually appealing display of your work, helping you stand out in your
          industry and present your expertise to potential clients or employers.
        </p>
      </div>
      }
    </div>
  );
};

export default FaqUnit;
