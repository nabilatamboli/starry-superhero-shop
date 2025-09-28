import React from "react";
import "./Collection.css";
import { useCart } from "../../context/CartContext";

const capes = [
  { id: 1, name: "Classic Red Cape", image: "/images/capes/red-cape.jpg", description: "A bold red cape for true superheroes.", price: 499 },
  { id: 2, name: "Stealth Black Cape", image: "/images/capes/black-cape.jpg", description: "Perfect for night missions.", price: 599 },
  { id: 3, name: "Royal Blue Cape", image: "/images/capes/blue-cape.jpg", description: "Fly high in style.", price: 549 },
  { id: 4, name: "Golden Trim Cape", image: "/images/capes/golden-cape.jpg", description: "Regal cape with golden trims.", price: 799 },
  { id: 5, name: "Tattered Battle Cape", image: "/images/capes/tattered-cape.jpg", description: "Adds grit and realism.", price: 449 },
  { id: 6, name: "Mystical Purple Cape", image: "/images/capes/purple-cape.jpg", description: "Channel magical energy.", price: 699 },
  { id: 7, name: "Crimson Velvet Cape", image: "/images/capes/crimson-cape.jpg", description: "Luxurious velvet design.", price: 999 },
  { id: 8, name: "Phantom Cape", image: "/images/capes/phantom-cape.jpg", description: "Mysterious white cape.", price: 649 },
];

const CapesCollection = () => {
  const { addToCart } = useCart();

  return (
    <div className="collection-page">
      <h1 className="collection-title">Coolest Capes 🦸‍♀️</h1>
      <div className="collection-grid">
        {capes.map((cape) => (
          <div key={cape.id} className="collection-card">
            <img src={cape.image} alt={cape.name} className="collection-image" />
            <h2 className="collection-name">{cape.name}</h2>
            <p className="collection-desc">{cape.description}</p>
            <p className="collection-price">₹{cape.price}</p>
            <button className="cta-button" onClick={() => addToCart(cape)}>
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CapesCollection;
