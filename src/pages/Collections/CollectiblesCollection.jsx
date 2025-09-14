import React from "react";
import "./Collection.css";

const collectibles = [
  {
    id: 1,
    name: "Iron Man Helmet",
    image: "/images/collectibles/ironman-helmet.jpg",
    description: "A high-quality replica of Iron Man’s iconic helmet.",
  },
  {
    id: 2,
    name: "Mjolnir (Thor’s Hammer)",
    image: "/images/collectibles/mjolnir.jpg",
    description: "Wield the mighty hammer of Thor – only for the worthy.",
  },
  {
    id: 3,
    name: "Captain America Shield",
    image: "/images/collectibles/cap-shield.jpg",
    description: "A durable replica of Cap’s legendary Vibranium shield.",
  },
  {
    id: 4,
    name: "Batman Batarang Set",
    image: "/images/collectibles/Batman Batarang Set.jpg",
    description: "Sharp, stylish, and perfect for display or cosplay.",
  },
  {
    id: 5,
    name: "Spider-Man Figurine",
    image: "/images/collectibles/spiderman-figurine.jpg",
    description: "A detailed collectible figurine of your friendly neighborhood Spider-Man.",
  },
  {
    id: 6,
    name: "Hulk Smash Statue",
    image: "/images/collectibles/hulk-statue.jpg",
    description: "Bring the Hulk’s rage to your shelf with this mini statue.",
  },
  {
    id: 7,
    name: "Doctor Strange Eye of Agamotto",
    image: "/images/collectibles/eye-of-agamotto.jpg",
    description: "A mystical collectible glowing replica of the Sorcerer Supreme’s artifact.",
  },
  {
    id: 8,
    name: "Black Panther Mask",
    image: "/images/collectibles/blackpanther-mask.jpg",
    description: "A sleek replica mask honoring Wakanda’s protector.",
  },
];

const CollectiblesCollection = () => {
  return (
    <div className="collection-page">
      <h1 className="collection-title">Superhero Collectibles</h1>
      <div className="collection-grid">
        {collectibles.map((item) => (
          <div key={item.id} className="collection-card">
            <img
              src={item.image}
              alt={item.name}
              className="collection-image"
            />
            <h2 className="collection-name">{item.name}</h2>
            <p className="collection-desc">{item.description}</p>
            <button className="cta-button">🛒 Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectiblesCollection;
