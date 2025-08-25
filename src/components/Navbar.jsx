import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
   <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <span><img src="https://tse2.mm.bing.net/th/id/OIP.RB-sR7Qsy3MUEH3ZNrtg5AHaFb?pid=Api&P=0&h=180" alt="" height="150px" /></span>
                <h1 className="cool-heading">
                Starry Superhero Shop</h1>
        </div>

        {/* Menu */}
        <ul className="nav-menu">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Cart */}
        <div className="cart">
          🛒
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
