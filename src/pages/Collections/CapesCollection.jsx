import React from "react";
import "./Collection.css"; 

const capes = [
  {
    id: 1,
    name: "Classic Red Cape",
    image: "/images/capes/red-cape.jpg",
    description: "A bold red cape for true superheroes.",
  },
  {
    id: 2,
    name: "Stealth Black Cape",
    image: "/images/capes/black-cape.jpg",
    description: "Perfect for night missions and stealth.",
  },
  {
    id: 3,
    name: "Royal Blue Cape",
    image: "/images/capes/blue-cape.jpg",
    description: "Fly high in style with this royal blue cape.",
  },
  {
    id: 4,
    name: "Golden Trim Cape",
    image: "/images/capes/golden-cape.jpg",
    description: "A regal cape with golden trims for elite heroes.",
  },
  {
    id: 5,
    name: "Tattered Battle Cape",
    image: "/images/capes/tattered-cape.jpg",
    description: "Worn from battles, adds grit and realism.",
  },
  {
    id: 6,
    name: "Mystical Purple Cape",
    image: "/images/capes/purple-cape.jpg",
    description: "Channel magical energy with this mystical cape.",
  },
  {
    id: 7,
    name: "Crimson Velvet Cape",
    image: "/images/capes/crimson-cape.jpg",
    description: "Luxurious velvet design for cosplay and collectors.",
  },
  {
    id: 8,
    name: "Phantom Cape",
    image: "/images/capes/phantom-cape.jpg",
    description: "A mysterious white cape for stealthy guardians.",
  },
];


const CapesCollection = () => {
  return (
    <div className="collection-page">
      <h1 className="collection-title">Coolest Capes 😎</h1>
      <div className="collection-grid">
        {capes.map((cape) => (
          <div key={cape.id} className="collection-card">
            <img
              src={cape.image}
              alt={cape.name}
              className="collection-image"
            />
            <h2 className="collection-name">{cape.name}</h2>
            <p className="collection-desc">{cape.description}</p>
            <button className="cta-button">🛒 Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CapesCollection;
