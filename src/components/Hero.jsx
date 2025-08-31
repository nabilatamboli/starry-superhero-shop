import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h2 className="hero-title">Welcome to Infinity Collectible Superhero Shop</h2>
      <p className="hero-subtitle">
        Find exclusive your favourite superhero merchandise and comic collectibles! Available here only!!!
      </p>
        <Link to="/products">
          <button className="hero-button">Shop Now</button>
        </Link>
      <div className="stars"></div>
    </section>
  );
};

export default Hero;
