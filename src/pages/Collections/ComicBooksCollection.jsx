import React from "react";
import "./Collection.css";
import { useCart } from "../../context/CartContext";

const comics = [
  { id: 1, name: "Iron Man Vol. 1", image: "/images/comics/ironman-vol1.jpg", description: "Classic debut of Tony Stark’s armored alter ego.", price: 499 },
  { id: 2, name: "Thor: God of Thunder", image: "/images/comics/thor-godofthunder.jpg", description: "Epic battles featuring Thor.", price: 399 },
  { id: 3, name: "Batman: The Dark Knight Returns", image: "/images/comics/batman-dkr.jpg", description: "Frank Miller’s Gotham saga.", price: 599 },
  { id: 4, name: "Spider-Man: Into the Spider-Verse", image: "/images/comics/spiderman-verse.jpg", description: "Multiverse adventure with Spider-heroes.", price: 499 },
  { id: 5, name: "Avengers: Infinity War", image: "/images/comics/avengers-infinitywar.jpg", description: "Earth’s heroes face Thanos.", price: 699 },
  { id: 6, name: "Superman: Red Son", image: "/images/comics/superman-redson.jpg", description: "What if Superman landed in Soviet Union?", price: 399 },
  { id: 7, name: "Wonder Woman: Year One", image: "/images/comics/wonderwoman-yearone.jpg", description: "Origin story of Diana of Themyscira.", price: 349 },
  { id: 8, name: "Black Panther: A Nation Under Our Feet", image: "/images/comics/blackpanther-nation.jpg", description: "T’Challa defends Wakanda.", price: 399 },
];

const ComicBooksCollection = () => {
  const { addToCart } = useCart();

  return (
    <div className="collection-page">
      <h1 className="collection-title">Legendary Comic Books 📚</h1>
      <div className="collection-grid">
        {comics.map((comic) => (
          <div key={comic.id} className="collection-card">
            <img src={comic.image} alt={comic.name} className="collection-image" />
            <h2 className="collection-name">{comic.name}</h2>
            <p className="collection-desc">{comic.description}</p>
            <p className="collection-price">₹{comic.price}</p>
            <button className="cta-button" onClick={() => addToCart(comic)}>
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicBooksCollection;
