import React from "react";
import "./categoryCard.css"

const CategoryCard = ({title,actual,original,discount,img}) => {
  return (
    <div className="categoryCards">
      <div className="categoryPics">
        <img src={img} />
      </div>
      <div className="cardName">
        <p>{title}</p>
      </div>
      <div className="cardPrice">
        <div className="actualPrice">
          <img src="Assets/common/rupeeColor.png" />
          <p>{actual}/yr</p>
        </div>
        <div className="originalPrice">
          <img src="Assets/common/rupeeWhite.png" />
          <p>{original}/yr</p>
        </div>
        <div className="discountTag"><p>{discount}% off</p></div>
      </div>
      <div className="cardExclusive">
        <p>( Exclusive Deal )</p>
      </div>
      <div className="cardButtons">
        <button>
          <img src="Assets/common/link.png" />
          <p>Preview</p>
        </button>
        <button>
          <img src="Assets/common/cart.png" />
          <p>Buy</p>
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;