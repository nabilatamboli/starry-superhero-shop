import React from "react";
import "./Collection.css";
import { useCart } from "../../context/CartContext";

const cards = [
  { id: 1, name: "Iron Man Card", image: "/images/cards/ironman-card.jpg", description: "Tony Stark’s genius captured in a premium collectible card.", price: 499 },
  { id: 2, name: "Thor Card", image: "/images/cards/thor-card.jpg", description: "The God of Thunder in stunning detail.", price: 399 },
  { id: 3, name: "Batman Card", image: "/images/cards/batman-card.jpg", description: "The Dark Knight immortalized in an epic trading card.", price: 299 },
  { id: 4, name: "Captain America Card", image: "/images/cards/captain-card.jpg", description: "The First Avenger’s courage showcased.", price: 499 },
  { id: 5, name: "Spider-Man Card", image: "/images/cards/spiderman-card.jpg", description: "Friendly neighborhood hero in web-slinging pose.", price: 399 },
  { id: 6, name: "Hulk Card", image: "/images/cards/hulk-card.jpg", description: "Unstoppable strength sealed in this rare card.", price: 349 },
  { id: 7, name: "Wonder Woman Card", image: "/images/cards/wonderwoman-card.jpg", description: "Amazonian power and grace.", price: 249 },
  { id: 8, name: "Black Panther Card", image: "/images/cards/blackpanther-card.jpg", description: "Wakanda Forever preserved in this card.", price: 349 },
];

const CardCollection = () => {
  const { addToCart } = useCart();

  return (
    <div className="collection-page">
      <h1 className="collection-title">Superhero Trading Cards 🃏</h1>
      <div className="collection-grid">
        {cards.map((card) => (
          <div key={card.id} className="collection-card">
            <img src={card.image} alt={card.name} className="collection-image" />
            <h2 className="collection-name">{card.name}</h2>
            <p className="collection-desc">{card.description}</p>
            <p className="collection-price">₹{card.price}</p>
            <button className="cta-button" onClick={() => addToCart(card)}>
              ✨ Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCollection;
