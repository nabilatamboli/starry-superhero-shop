import React from "react";
import "./Collection.css";
import { useCart } from "../../context/CartContext";

const figures = [
  { id: 1, name: "Iron Warrior", image: "/images/action-figures/iron-warrior.jpg", description: "Highly detailed iron-clad warrior.", price: 699 },
  { id: 2, name: "Stealth Ninja", image: "/images/action-figures/stealth-ninja.jpg", description: "Perfect for stealth missions.", price: 599 },
  { id: 3, name: "Captain Stellar", image: "/images/action-figures/captain-stellar.jpg", description: "Fly through galaxies.", price: 799 },
  { id: 4, name: "Iron Man", image: "/images/action-figures/iron-man.jpg", description: "Tony Stark in armored suit.", price: 999 },
  { id: 5, name: "Thor", image: "/images/action-figures/thor.jpg", description: "The God of Thunder.", price: 899 },
  { id: 6, name: "Batman", image: "/images/action-figures/batman.jpg", description: "Dark Knight of Gotham.", price: 850 },
  { id: 7, name: "Crimson Commander", image: "/images/action-figures/crimson-commander.jpg", description: "Lead your army.", price: 750 },
  { id: 8, name: "Phantom Assassin", image: "/images/action-figures/phantom-assassin.jpg", description: "Silent and deadly.", price: 650 },
];

const ActionFiguresCollection = () => {
  const { addToCart } = useCart();

  return (
    <div className="collection-page">
      <h1 className="collection-title">Epic Action Figures 🦸</h1>
      <div className="collection-grid">
        {figures.map((figure) => (
          <div key={figure.id} className="collection-card">
            <img src={figure.image} alt={figure.name} className="collection-image" />
            <h2 className="collection-name">{figure.name}</h2>
            <p className="collection-desc">{figure.description}</p>
            <p className="collection-price">₹{figure.price}</p>
            <button className="cta-button" onClick={() => addToCart(figure)}>
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionFiguresCollection;
