import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      {/*  */}
      <section className="hero-banner">
  <div className="hero-content">
    <h1 className="hero-title">Unleash Your Inner Superhero </h1>
    <p className="hero-subtitle">
      Exclusive comics, collectibles, and merch inspired by your favorite heroes.
    </p>
    <Link to="/products">
      <button className="hero-btn">Shop Now</button>
    </Link>

    {/* Categories inside banner */}
    <div className="hero-categories">
      <div className="category-card">
        <img 
          src="https://thecomicbookstore.in/wp-content/uploads/2024/03/Marvel-Comics-300x300.png" 
          alt="Comics" 
        />
        <h3>Comics</h3>
      </div>
      <div className="category-card">
        <img 
          src="https://thecomicbookstore.in/wp-content/uploads/2023/05/Trump-Cards-6-300x300.png" 
          alt="Trading Cards" 
        />
        <h3>Trading Cards</h3>
      </div>
      <div className="category-card">
        <img 
          src="https://thecomicbookstore.in/wp-content/uploads/2023/05/Collectibles-3-300x300.png" 
          alt="Collectibles" 
        />
        <h3>Collectibles</h3>
      </div>
      <div className="category-card">
        <img 
          src="https://thecomicbookstore.in/wp-content/uploads/2023/05/Posters-2-300x300.png" 
          alt="Posters" 
        />
        <h3>Posters</h3>
      </div>
    </div>
  </div>
</section>
  {/* ✅ Why Choose Us */}
<section className="why-section">
  <h2 className="section-title">Why Choose Infinity Collectible Shop?</h2>
  <div className="why-cards">
    <div className="why-card">
      <h3>⭐ Authentic Products</h3>
      <p>100% original superhero merchandise you can trust.</p>
    </div>
    <div className="why-card">
      <h3>🚀 Fast Delivery</h3>
      <p>Lightning-fast shipping to bring your heroes home.</p>
    </div>
    <div className="why-card">
      <h3>💳 Secure Checkout</h3>
      <p>Shop safely with trusted and secure payments.</p>
    </div>
    <div className="why-card">
      <h3>🎁 Exclusive Deals</h3>
      <p>Special discounts and limited editions just for you.</p>
    </div>
  </div>
</section>

     
    </div>
  );
};

export default HomePage;
