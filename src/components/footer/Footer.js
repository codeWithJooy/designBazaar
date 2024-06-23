import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerText">
        <div className="footerTitle">
          <p>Design</p>
          <p style={{"color":"#fb8500"}}>Bazaar</p>
        </div>
        <div className="footerDescription">
          <p>
            DesignBazaar provides a modern way to have control over your digital
            career. Craft a striking online presence with our designer-made,
            fast, professional, and affordable portfolios.
          </p>
        </div>
      </div>
      <div className="footerLinks">
        <div className="footerLinkTitle">
         <p>Company</p>
        </div>
        <div className="footerLinkUnit">
          <p>Home</p>
        </div>
        <div className="footerLinkUnit">
          <p>Home</p>
        </div>
        <div className="footerLinkUnit">
          <p>Home</p>
        </div>
        <div className="footerLinkUnit">
          <p>Home</p>
        </div>
        <div className="footerLinkUnit">
          <p>Ecommerce</p>
        </div>
      </div>
      <div className="footerLinks">
        <div className="footerLinkTitle">
         <p>Categories</p>
        </div>
        <div className="footerLinkUnit">
          <p>Ecommerce</p>
        </div>
        <div className="footerLinkUnit">
          <p>Developer</p>
        </div>
        <div className="footerLinkUnit">
          <p>Photographer</p>
        </div>
        <div className="footerLinkUnit">
          <p>Designer</p>
        </div>
        <div className="footerLinkUnit">
          <p>Artist</p>
        </div>
      </div>
      <div className="footerLinks">
        <div className="footerLinkTitle">
         <p>Extra Links</p>
        </div>
        <div className="footerLinkUnit">
          <p>Privacy Policy</p>
        </div>
        <div className="footerLinkUnit">
          <p>About Us</p>
        </div>
        <div className="footerLinkUnit">
          <p>Privacy Policy</p>
        </div>
        <div className="footerLinkUnit">
          <p>About Us</p>
        </div>
        <div className="footerLinkUnit">
          <p>About Us</p>
        </div>
      </div>
      <div className="copyright">
        <p>@ Cogpyright 2024, All rights reserved by ElevanceTech</p>
      </div>
    </div>
  );
};

export default Footer;
