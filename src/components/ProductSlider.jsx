import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./ProductSlider.css";

const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <div className="slider-wrapper">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product, index) => (
            <div className="slide" key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default ProductSlider;
