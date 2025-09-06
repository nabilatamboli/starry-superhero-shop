import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <section className="featured-section">
        <h2 className="section-title">Explore Our Collections</h2>
        <div className="categories">
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
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section">
        <h2 className="section-title">Why Shop With Us?</h2>
        <div className="why-cards">
          <div className="why-card">
            <h3>⭐ Authentic Products</h3>
            <p>We bring you 100% original superhero merchandise.</p>
          </div>
          <div className="why-card">
            <h3>🚀 Fast Delivery</h3>
            <p>Get your favorite comics and collectibles quickly at your door.</p>
          </div>
          <div className="why-card">
            <h3>💳 Secure Payments</h3>
            <p>Shop with confidence using our safe checkout process.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Join the Superhero Universe Today</h2>
        <Link to="/products">
          <button className="cta-button">Start Shopping</button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
