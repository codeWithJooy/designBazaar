import React,{useState} from "react";
import Header from "../../components/header/Header";
import { contactText } from "../../data/contactTextUnits";
import "./contact.css";
import Footer from "../../components/footer/Footer";
import ContactTextUnit from "./ContactTextUnit";
import GettingStarted from "../../components/gettingStarted/GettingStarted";


const Contact = () => {
  const [model,setModel]=useState(false)
  return (
    <div className="main">
      <div className="contactSection">
      <Header setModel={setModel}/>
        <div className="contactHeader">
          <div className="contactTitle">
            <p>Contact</p>
            <p style={{ color: "#fb8500", marginLeft: "10px" }}>Us</p>
          </div>
          <div className="contactDescription">
            <p>We'd love to talk about how we can help you.</p>
          </div>
        </div>
        <div className="contactMain">
          <div className="contactTexts">
            {
                contactText && 
                contactText.map((data,key)=>(
                 <ContactTextUnit 
                  leftImg={data.leftImg}
                  title={data.title}
                  desc={data.desc}
                  linkText={data.linkText}
                  link={data.link}
                  arrow={data.arrow}
                 />
                ))
            }
            
          </div>
          <div className="contactFormSection">
            <div className="contactForm">
              <div className="formHeader">
                <p>Get In Touch</p>
              </div>
              <div className="formInput">
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div className="formInput">
                <input type="text" placeholder="Enter Your Email" />
              </div>
              <div className="formInput">
                <input type="text" placeholder="Enter Your Phone Number" />
              </div>
              <div className="formInput">
                <textarea placeholder="Message"></textarea>
              </div>
              <div className="formInput">
                <button>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {
        model && <GettingStarted setModel={setModel}/>
      }
    </div>
  );
};

export default Contact;
