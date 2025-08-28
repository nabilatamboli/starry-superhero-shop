import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img 
            src="https://tse2.mm.bing.net/th/id/OIP.RB-sR7Qsy3MUEH3ZNrtg5AHaFb?pid=Api&P=0&h=180" 
            alt="Starry Superhero" 
            className="logo-img"
          />
          <h1 className="cool-heading">Infinity Collectible</h1>
        </div>

        {}
        <ul className="nav-menu">
          <li className="nav-item">Home</li>
          <li className="nav-item"><a href="/products">Products</a></li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
        </ul>

        {}
        <div className="cart">
          🛒<span className="cart-badge">3</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
