import React from "react";
import "./category.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Description from "../../components/description/Description";
import { developerDescription } from "../../data/description";
import Tags from "../../components/tags/Tags";
import CategoryCard from "../../components/categoryCards/CategoryCard";
import { category } from "../../data/category";
const Ecommerce = () => {
  return (
    <div className="main">
      <div className="categoryHeader">
        <Header />
        <div className="categoryMain">
          <div className="categoryPageText">
            <div className="categoryPageTag">
              <p>Developer Portfolios</p>
            </div>
            <div className="categoryPageHeader">
              <p>Stand Out with a</p>
              <p>
                Unique <span style={{ color: "#fb8500" }}>Developer</span>
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
              <button>Get Started</button>
            </div>
          </div>
          <div className="categoryPageImages">
            <img src="Assets/photographer/collage.jpg" />
          </div>
        </div>
      </div>
      <Tags />
      <div className="categoryCardsHolder">
        <div className="categoryCardsHeader">
          <p>Portfolio Websites For Developer</p>
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
    </div>
  );
};

export default Ecommerce;