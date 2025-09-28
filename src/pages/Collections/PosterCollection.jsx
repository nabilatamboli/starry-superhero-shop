import React from "react";
import "./Collection.css";
import { useCart } from "../../context/CartContext";

const posters = [
  { id: 1, name: "Iron Man Poster", image: "/images/posters/ironman-poster.jpg", description: "Vibrant Iron Man poster.", price: 499 },
  { id: 2, name: "Thor Lightning Poster", image: "/images/posters/thor-poster.jpg", description: "Thor summoning thunder.", price: 399 },
  { id: 3, name: "Batman Gotham Poster", image: "/images/posters/batman-poster.jpg", description: "Dark Knight overlooking Gotham.", price: 399 },
  { id: 4, name: "Spider-Man Poster", image: "/images/posters/spiderman-poster.jpg", description: "Spider-Man swinging across NYC.", price: 349 },
  { id: 5, name: "Avengers Assemble Poster", image: "/images/posters/avengers-poster.jpg", description: "All Earth’s heroes together.", price: 599 },
  { id: 6, name: "Wonder Woman Poster", image: "/images/posters/wonderwoman-poster.jpg", description: "Amazon warrior in battle stance.", price: 449 },
  { id: 7, name: "Black Panther Wakanda Poster", image: "/images/posters/blackpanther-poster.jpg", description: "Wakanda Forever tribute poster.", price: 399 },
  { id: 8, name: "Captain America Shield Poster", image: "/images/posters/captain-poster.jpg", description: "Iconic red, white, and blue shield.", price: 499 },
];

const PostersCollection = () => {
  const { addToCart } = useCart();

  return (
    <div className="collection-page">
      <h1 className="collection-title">Heroic Posters 🖼️</h1>
      <div className="collection-grid">
        {posters.map((poster) => (
          <div key={poster.id} className="collection-card">
            <img src={poster.image} alt={poster.name} className="collection-image" />
            <h2 className="collection-name">{poster.name}</h2>
            <p className="collection-desc">{poster.description}</p>
            <p className="collection-price">₹{poster.price}</p>
            <button className="cta-button" onClick={() => addToCart(poster)}>
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostersCollection;
