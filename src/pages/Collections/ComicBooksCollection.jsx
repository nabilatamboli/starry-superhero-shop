import React from "react";
import "./Collection.css";

const comics = [
  {
    id: 1,
    name: "Iron Man Vol. 1",
    image: "/images/comics/ironman-vol1.jpg",
    description: "The classic debut of Tony Stark’s armored alter ego.",
  },
  {
    id: 2,
    name: "Thor: God of Thunder",
    image: "/images/comics/thor-godofthunder.jpg",
    description: "Epic battles across realms featuring the mighty Thor.",
  },
  {
    id: 3,
    name: "Batman: The Dark Knight Returns",
    image: "/images/comics/batman-dkr.jpg",
    description: "Frank Miller’s legendary tale of Gotham’s protector.",
  },
  {
    id: 4,
    name: "Spider-Man: Into the Spider-Verse",
    image: "/images/comics/spiderman-verse.jpg",
    description: "A multiverse adventure with multiple Spider-heroes.",
  },
  {
    id: 5,
    name: "Avengers: Infinity War",
    image: "/images/comics/avengers-infinitywar.jpg",
    description: "Earth’s Mightiest Heroes face the Mad Titan, Thanos.",
  },
  {
    id: 6,
    name: "Superman: Red Son",
    image: "/images/comics/superman-redson.jpg",
    description: "What if Superman had landed in the Soviet Union?",
  },
  {
    id: 7,
    name: "Wonder Woman: Year One",
    image: "/images/comics/wonderwoman-yearone.jpg",
    description: "The inspiring origin story of Diana of Themyscira.",
  },
  {
    id: 8,
    name: "Black Panther: A Nation Under Our Feet",
    image: "/images/comics/blackpanther-nation.jpg",
    description: "T’Challa defends Wakanda in a politically charged saga.",
  },
];

const ComicBooksCollection = () => {
  return (
    <div className="collection-page">
      <h1 className="collection-title">Legendary Comic Books 📚</h1>
      <div className="collection-grid">
        {comics.map((comic) => (
          <div key={comic.id} className="collection-card">
            <img
              src={comic.image}
              alt={comic.name}
              className="collection-image"
            />
            <h2 className="collection-name">{comic.name}</h2>
            <p className="collection-desc">{comic.description}</p>
            <button className="cta-button">📖 Add to Library</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicBooksCollection;
