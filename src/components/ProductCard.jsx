import React from "react";
import "./ProductCard.css";


const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-desc">{product.description}</p>
      <button className="add-btn">
        View Collection
      </button>
    </div>

  </div>
  
  );
};

export default ProductCard;
