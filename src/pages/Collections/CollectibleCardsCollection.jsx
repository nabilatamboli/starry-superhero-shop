import React from "react";
import "./Collection.css";

const cards = [
  {
    id: 1,
    name: "Iron Man Card",
    image: "/images/cards/ironman-card.jpg",
    description:
      "Tony Stark’s genius captured in a premium collectible card.",
  },
  {
    id: 2,
    name: "Thor Card",
    image: "/images/cards/thor-card.jpg",
    description:
      "The God of Thunder in stunning detail, a must-have for fans.",
  },
  {
    id: 3,
    name: "Batman Card",
    image: "/images/cards/batman-card.jpg",
    description:
      "The Dark Knight of Gotham immortalized in an epic trading card.",
  },
  {
    id: 4,
    name: "Captain America Card",
    image: "/images/cards/captain-card.jpg",
    description:
      "The First Avenger’s courage and shield showcased in collectible form.",
  },
  {
    id: 5,
    name: "Spider-Man Card",
    image: "/images/cards/spiderman-card.jpg",
    description:
      "The friendly neighborhood hero in an iconic web-slinging pose.",
  },
  {
    id: 6,
    name: "Hulk Card",
    image: "/images/cards/hulk-card.jpg",
    description:
      "Unstoppable strength and rage sealed in this rare trading card.",
  },
  {
    id: 7,
    name: "Wonder Woman Card",
    image: "/images/cards/wonderwoman-card.jpg",
    description:
      "Amazonian power and grace, an empowering collectible for all fans.",
  },
  {
    id: 8,
    name: "Black Panther Card",
    image: "/images/cards/blackpanther-card.jpg",
    description:
      "Wakanda Forever – a legendary hero preserved in this rare card.",
  },
];

const CardCollection = () => {
  return (
    <div className="collection-page">
      <h1 className="collection-title">Superhero Trading Cards 🃏</h1>
      <div className="collection-grid">
        {cards.map((card) => (
          <div key={card.id} className="collection-card">
            <div className="card-image-wrapper">
              <img
                src={card.image}
                alt={card.name}
                className="collection-image"
              />
            </div>
            <h2 className="collection-name">{card.name}</h2>
            <p className="collection-desc">{card.description}</p>
            <button className="cta-button">✨ Add to Collection</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCollection;
