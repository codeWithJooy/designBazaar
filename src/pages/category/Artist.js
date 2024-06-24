import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./category.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Description from "../../components/description/Description";
import { developerDescription } from "../../data/description";
import Tags from "../../components/tags/Tags";
import CategoryCard from "../../components/categoryCards/CategoryCard";
import { category } from "../../data/category";
import GettingStarted from "../../components/gettingStarted/GettingStarted";

const Artist = () => {
  const [model, setModel] = useState(false);
  const history=useHistory()

  const handleStarted=()=>{
    history.push("/contact")
  }
  return (
    <div className="main">
      <div className="categoryHeader">
        <Header setModel={setModel} />
        <div className="categoryMain">
          <div className="categoryPageText">
            <div className="categoryPageTag">
              <p>Artist Portfolios</p>
            </div>
            <div className="categoryPageHeader">
              <p>Stand Out with a</p>
              <p>
                Unique <span style={{ color: "#fb8500" }}>Artist</span>
              </p>
              <p>Portfolio</p>
            </div>
            <div className="categoryPageDesc">
              <p>
                Update your portfolio like a social media post! Easily manage
                and showcase your work with no coding required. Stay
                professional and stand out online.
              </p>
            </div>
            <div className="categoryPageButton">
              <button onClick={handleStarted}>Get Started</button>
            </div>
          </div>
          <div className="categoryPageImages">
            <img src="Assets/artist/collage.jpg" />
          </div>
        </div>
      </div>
      <Tags />
      <div className="categoryCardsHolder">
        <div className="categoryCardsHeader">
          <p>Portfolio Websites For Artists</p>
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
      <Description data={developerDescription} />
      <Footer />
      {
        model && <GettingStarted setModel={setModel}/>
      }
    </div>
  );
};

export default Artist;
