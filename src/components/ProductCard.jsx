import React from "react";
import { Link } from "react-router-dom";
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
      <Link to={`/collections/${product.route}`}>
      <button className="add-btn">
        View Collection
      </button>
      </Link>

    </div>

  </div>
  
  );
};

export default ProductCard;
