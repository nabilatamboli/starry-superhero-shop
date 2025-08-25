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
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-yellow-400 font-semibold mt-1">${product.price}</p>
      <button className="mt-3 w-full btn-accent hover:scale-105">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
