// ProductCard.js
import React, { useState } from "react";
import "./Card.css"; // Import the CSS file
import nike from "./nike.jpg";
const Card = () => {
  return (
    <>
      <div className="product-card">
        <img src={nike} alt="Product Image" className="product-image" />
        <div className="product-details">
          <h2 className="product-name">Product Name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            quod iste, quaerat totam illo obcaecati, quasi distinctio odit,
            
          </p>

          <div className="options">
            <label htmlFor="color">Color:</label>
            <select id="color" name="color">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
            <label htmlFor="size">Size:</label>
            <select id="size" name="size">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <p className="price">$19.99</p>
          <div className="buttons">
            <button className="wishlist-button">Wishlist</button>
            <button className="add-to-cart-button">Add to Cart</button>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
