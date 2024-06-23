import React from "react";
import "./home.css";
import CategoryCard from "../../components/categoryCards/CategoryCard";
import { category } from "../../data/category";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import Description from "../../components/description/Description";
import Header from "../../components/header/Header";
import Need from "../../components/need/Need";
import How from "../../components/how/How";
import Tags from "../../components/tags/Tags";
const Home = () => {
  return (
    <div className="main">
      <div className="topSection">
        <Header />
        <div className="mainLanding">
          <div className="landingText">
            <div className="landingTextdiv">
              <p>Build your <span style={{color:"#fb8500"}}>Portfolio</span></p>
            </div>
            <div className="landingTextdiv">
              <p>Website Using your </p>
            </div>
            <div className="landingTextdiv">
              <p>phone with our </p>
            </div>
            <div className="landingTextdiv">
              <p style={{color:"#fb8500"}} >Ai-powered cms</p>
            </div>
          </div>
          <div className="landingImage">
            <img src="Assets/common/device.png" />
          </div>
        </div>
      </div>
<Tags />
      <div className="category">
        <div className="categoryTitle">
          <p>ECommerce <span style={{color:"#fb8500"}}>Designs</span></p>
        </div>
        <div className="categoryCardSection">
           {
            category &&
            category.map((data,key)=>(
              <CategoryCard 
                key={key}
                title={data.title}
                actual={data.actual}
                original={data.original}
                discount={data.discount}
                img={data.img}
              />
            ))
           }
        </div>
      </div>
      <div className="category">
        <div className="categoryTitle">
          <p>Developers <span style={{color:"#fb8500"}}>Designs</span></p>
        </div>
        <div className="categoryCardSection">
           {
            category &&
            category.map((data,key)=>(
              <CategoryCard 
                key={key}
                title={data.title}
                actual={data.actual}
                original={data.original}
                discount={data.discount}
                img={data.img}
              />
            ))
           }
        </div>
      </div>
      <div className="category">
        <div className="categoryTitle">
          <p>Artist <span style={{color:"#fb8500"}}>Designs</span></p>
        </div>
        <div className="categoryCardSection">
           {
            category &&
            category.map((data,key)=>(
              <CategoryCard 
                key={key}
                title={data.title}
                actual={data.actual}
                original={data.original}
                discount={data.discount}
                img={data.img}
              />
            ))
           }
        </div>
      </div>
      <div className="category">
        <div className="categoryTitle">
          <p>Designer <span style={{color:"#fb8500"}}>Designs</span></p>
        </div>
        <div className="categoryCardSection">
           {
            category &&
            category.map((data,key)=>(
              <CategoryCard 
                key={key}
                title={data.title}
                actual={data.actual}
                original={data.original}
                discount={data.discount}
                img={data.img}
              />
            ))
           }
        </div>
      </div>
      <div className="category">
        <div className="categoryTitle">
          <p>Photographer <span style={{color:"#fb8500"}}>Designs</span></p>
        </div>
        <div className="categoryCardSection">
           {
            category &&
            category.map((data,key)=>(
              <CategoryCard 
                key={key}
                title={data.title}
                actual={data.actual}
                original={data.original}
                discount={data.discount}
                img={data.img}
              />
            ))
           }
        </div>
      </div>
      <Need />
      <Faq />
      <How />
      
      <Footer />
    </div>
  );
};

export default Home;
