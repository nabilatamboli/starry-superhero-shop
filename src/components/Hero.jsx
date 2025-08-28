import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h2 className="hero-title">Welcome to Infinity Collectible Superhero Shop</h2>
      <p className="hero-subtitle">
        Find exclusive your favourite superhero merchandise and comic collectibles! Available here only!!!
      </p>
      <button className="hero-button">Shop Now</button>
      <div className="stars"></div>
    </section>
  );
};

export default Hero;
