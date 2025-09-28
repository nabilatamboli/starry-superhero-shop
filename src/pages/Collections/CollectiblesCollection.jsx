import React from "react";
import "./Collection.css";
import { useCart } from "../../context/CartContext";

const collectibles = [
  { id: 1, name: "Iron Man Helmet", image: "/images/collectibles/ironman-helmet.jpg", description: "Replica of Iron Man’s iconic helmet.", price: 2999 },
  { id: 2, name: "Mjolnir (Thor’s Hammer)", image: "/images/collectibles/mjolnir.jpg", description: "Wield the mighty hammer of Thor.", price: 3499 },
  { id: 3, name: "Captain America Shield", image: "/images/collectibles/cap-shield.jpg", description: "Durable replica of Cap’s shield.", price: 2699 },
  { id: 4, name: "Batman Batarang Set", image: "/images/collectibles/Batman Batarang Set.jpg", description: "Sharp, stylish for display or cosplay.", price: 1999 },
  { id: 5, name: "Spider-Man Figurine", image: "/images/collectibles/spiderman-figurine.jpg", description: "Detailed figurine of Spider-Man.", price: 1499 },
  { id: 6, name: "Hulk Smash Statue", image: "/images/collectibles/hulk-statue.jpg", description: "Mini statue of Hulk’s rage.", price: 1799 },
  { id: 7, name: "Doctor Strange Eye of Agamotto", image: "/images/collectibles/eye-of-agamotto.jpg", description: "Mystical glowing replica.", price: 2499 },
  { id: 8, name: "Black Panther Mask", image: "/images/collectibles/blackpanther-mask.jpg", description: "Sleek replica mask of Wakanda’s protector.", price: 1899 },
];

const CollectiblesCollection = () => {
  const { addToCart } = useCart();

  return (
    <div className="collection-page">
      <h1 className="collection-title">Superhero Collectibles</h1>
      <div className="collection-grid">
        {collectibles.map((item) => (
          <div key={item.id} className="collection-card">
            <img src={item.image} alt={item.name} className="collection-image" />
            <h2 className="collection-name">{item.name}</h2>
            <p className="collection-desc">{item.description}</p>
            <p className="collection-price">₹{item.price}</p>
            <button className="cta-button" onClick={() => addToCart(item)}>
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectiblesCollection;
