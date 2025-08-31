import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Hamburger toggle (mobile only) */}
        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Nav links */}
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li className="nav-item">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>

        {/* Cart */}
        <div className="cart">
          🛒<span className="cart-badge">3</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
