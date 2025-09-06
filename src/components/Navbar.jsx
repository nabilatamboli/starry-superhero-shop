import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="logo">
          <img 
            src="https://logos-world.net/wp-content/uploads/2020/05/Avengers-Symbol.jpg" 
            alt="Infinity Collectible Logo"
            className="logo-img"
          />
          <h1 className="cool-heading">Infinity Collectible</h1>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li><Link to="/" className="nav-item" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/products" className="nav-item" onClick={() => setIsOpen(false)}>Products</Link></li>
          <li><Link to="/about" className="nav-item" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" className="nav-item" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>

        <div className="cart">
          🛒 <span className="cart-badge">3</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
