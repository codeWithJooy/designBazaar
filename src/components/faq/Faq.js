import React from "react";
import "./faq.css"
import FaqUnit from "./FaqUnit";

const Faq=()=>{
    return(
      <div className="faqSection">
         <div className="sectionHeader">
            <div className="sectionTitle">
              <p>FAQ</p>
            </div>
            <div className="sectionDescription">
              <p>Frequently Asked Questions</p>
            </div>
         </div>
         <div className="faqContainer">
            <FaqUnit />
            <FaqUnit />
            <FaqUnit />
         </div>
      </div>
    )
}

export default Faq;