import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Brand */}
        <Link to="/" className="brand">
          <div className="brand-title">
            <img className="logo" src="/images/logo.jpg" alt="Infinity Collectible Logo" />
            <span className="brand-text">Infinity Collectible</span>
          </div>
        </Link>

        {/* Hamburger Button */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Nav Links */}
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>

        {/* Cart & Login */}
        <div className="navbar-actions">
          <Link to="/cart" className="cart">
            🛒
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </Link>
          <Link to="/login" className="login-button">
            Login 
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16"> <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/> </svg>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
