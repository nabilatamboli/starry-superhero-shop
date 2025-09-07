import React from "react";
import "./Collection.css"; 

const figures = [
  {
    id: 1,
    name: "Iron Warrior",
    image: "/images/action-figures/iron-warrior.jpg",
    description: "A highly detailed iron-clad warrior action figure.",
  },
  {
    id: 2,
    name: "Stealth Ninja",
    image: "/images/action-figures/stealth-ninja.jpg",
    description: "Perfect for stealth missions and epic battles.",
  },
  {
    id: 3,
    name: "Captain Stellar",
    image: "/images/action-figures/captain-stellar.jpg",
    description: "Fly through galaxies with Captain Stellar.",
  },
  {
    id: 4,
    name: "Iron Man",
    image: "/images/action-figures/iron-man.jpg",
    description: "Tony Stark in his iconic armored suit, blending genius with firepower.",
  },
  {
    id: 5,
    name: "Thor",
    image: "/images/action-figures/thor.jpg",
    description: "The God of Thunder, wielding Mjölnir and commanding lightning.",
  },
  {
    id: 6,
    name: "Bat-Man",
    image: "/images/action-figures/batman.jpg",
    description: "The Dark Knight of Gotham, armed with intelligence, strategy, and gadgets.",
  },
  {
    id: 7,
    name: "Crimson Commander",
    image: "/images/action-figures/crimson-commander.jpg",
    description: "Lead your army with the Crimson Commander.",
  },
  {
    id: 8,
    name: "Phantom Assassin",
    image: "/images/action-figures/phantom-assassin.jpg",
    description: "Silent, deadly, and mysterious action figure.",
  },
];

const ActionFiguresCollection = () => {
  return (
    <div className="collection-page">
      <h1 className="collection-title">Epic Action Figures 🎮</h1>
      <div className="collection-grid">
        {figures.map((figure) => (
          <div key={figure.id} className="collection-card">
            <img
              src={figure.image}
              alt={figure.name}
              className="collection-image"
            />
            <h2 className="collection-name">{figure.name}</h2>
            <p className="collection-desc">{figure.description}</p>
            <button className="cta-button">🛒 Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionFiguresCollection;
