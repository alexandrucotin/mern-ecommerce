import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";

const Card = ({ product }) => {
  return (
    <div className="card">
      <ShowImage item={product} url="product" />
      <div className="card-body">
        <div className="card-header">{product.name}</div>
        <div className="card-inside-body">
          <p className="card-description">{product.description}</p>
          <p className="card-price">${product.price}</p>
        </div>

        <div className="links">
          <Link to="/">
            <button className="button button-blue">view product</button>
          </Link>
          <button className="button button-green">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
