import React,{useState} from "react";
import { useHistory } from "react-router-dom";
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
import Login from "../../components/gettingStarted/Login";
import GettingStarted from "../../components/gettingStarted/GettingStarted";


const Home = () => {
  const [model,setModel]=useState(false)
  const history=useHistory()

  const handleStarted=()=>{
    history.push("/contact")
  }
  return (
    <div className="main">
      <div className="topSection">
        <Header setModel={setModel}/>
        <div className="categoryMain">
          <div className="categoryPageText">
            <div className="categoryPageTag">
              <p>Designer Portfolios</p>
            </div>
            <div className="categoryPageHeader">
              <p>
              Build Your <span style={{ color: "#fb8500" }}>Portfolio</span></p>
              <p>
              Website Using our
              </p>
              <p style={{ color: "#fb8500" }}>AI-powered CMS</p>
            </div>
            <div className="categoryPageDesc">
              <p>
                Effortlessly build and update your portfolio website from your
                phone, as easily as posting on social media, without any coding
                knowledge, all using our AI-powered CMS. Explore numerous
                portfolio options for a truly customizable experience.
              </p>
            </div>
            <div className="categoryPageButton">
              <button onClick={handleStarted} >Get Started</button>
            </div>
          </div>
          <div className="categoryPageImages">
            <img src="Assets/photographer/collage.jpg" />
          </div>
        </div>
      </div>
      <Tags />
      <div className="category">
        <div className="categoryTitle">
          <p>
            ECommerce <span style={{ color: "#fb8500" }}>Designs</span>
          </p>
        </div>
        <div className="categoryCardSection">
          {category &&
            category.map((data, key) => (
              <CategoryCard
                key={key}
                title={data.title}
                actual={data.actual}
                original={data.original}
                discount={data.discount}
                img={data.img}
              />
            ))}
        </div>
      </div>
      <div className="category">
        <div className="categoryTitle">
          <p>
            Developers <span style={{ color: "#fb8500" }}>Designs</span>
          </p>
        </div>
        <div className="categoryCardSection">
          {category &&
            category.map((data, key) => (
              <CategoryCard
                key={key}
                title={data.title}
                actual={data.actual}
                original={data.original}
                discount={data.discount}
                img={data.img}
              />
            ))}
        </div>
      </div>
      <div className="category">
        <div className="categoryTitle">
          <p>
            Artist <span style={{ color: "#fb8500" }}>Designs</span>
          </p>
        </div>
        <div className="categoryCardSection">
          {category &&
            category.map((data, key) => (
              <CategoryCard
                key={key}
                title={data.title}
                actual={data.actual}
                original={data.original}
                discount={data.discount}
                img={data.img}
              />
            ))}
        </div>
      </div>
      <div className="category">
        <div className="categoryTitle">
          <p>
            Designer <span style={{ color: "#fb8500" }}>Designs</span>
          </p>
        </div>
        <div className="categoryCardSection">
          {category &&
            category.map((data, key) => (
              <CategoryCard
                key={key}
                title={data.title}
                actual={data.actual}
                original={data.original}
                discount={data.discount}
                img={data.img}
              />
            ))}
        </div>
      </div>
      <div className="category">
        <div className="categoryTitle">
          <p>
            Photographer <span style={{ color: "#fb8500" }}>Designs</span>
          </p>
        </div>
        <div className="categoryCardSection">
          {category &&
            category.map((data, key) => (
              <CategoryCard
                key={key}
                title={data.title}
                actual={data.actual}
                original={data.original}
                discount={data.discount}
                img={data.img}
              />
            ))}
        </div>
      </div>
      <Need />
      <Faq />
      <How />

      <Footer />
      {
        model && <GettingStarted setModel={setModel}/>
      }
      
    </div>
  );
};

export default Home;
