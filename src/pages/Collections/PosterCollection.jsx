import React from "react";
import "./Collection.css";

const posters = [
  {
    id: 1,
    name: "Iron Man Poster",
    image: "/images/posters/ironman-poster.jpg",
    description: "A vibrant Iron Man poster for your wall of heroes.",
  },
  {
    id: 2,
    name: "Thor Lightning Poster",
    image: "/images/posters/thor-poster.jpg",
    description: "Epic artwork of Thor summoning thunder and lightning.",
  },
  {
    id: 3,
    name: "Batman Gotham Poster",
    image: "/images/posters/batman-poster.jpg",
    description: "The Dark Knight overlooking Gotham City.",
  },
  {
    id: 4,
    name: "Spider-Man Poster",
    image: "/images/posters/spiderman-poster.jpg",
    description: "Spider-Man swinging across the New York skyline.",
  },
  {
    id: 5,
    name: "Avengers Assemble Poster",
    image: "/images/posters/avengers-poster.jpg",
    description: "All Earth’s mightiest heroes together in one frame.",
  },
  {
    id: 6,
    name: "Wonder Woman Poster",
    image: "/images/posters/wonderwoman-poster.jpg",
    description: "The Amazon warrior in a fierce battle stance.",
  },
  {
    id: 7,
    name: "Black Panther Wakanda Poster",
    image: "/images/posters/blackpanther-poster.jpg",
    description: "Wakanda Forever tribute poster.",
  },
  {
    id: 8,
    name: "Captain America Shield Poster",
    image: "/images/posters/captain-poster.jpg",
    description: "The iconic red, white, and blue shield in glory.",
  },
];

const PostersCollection = () => {
  return (
    <div className="collection-page">
      <h1 className="collection-title">Heroic Posters 🖼️</h1>
      <div className="collection-grid">
        {posters.map((poster) => (
          <div key={poster.id} className="collection-card">
            <img
              src={poster.image}
              alt={poster.name}
              className="collection-image"
            />
            <h2 className="collection-name">{poster.name}</h2>
            <p className="collection-desc">{poster.description}</p>
            <button className="cta-button">🛒 Add Poster</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostersCollection;
