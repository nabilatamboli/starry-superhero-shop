import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h2>About Us</h2>
      <p className="intro">
        Welcome to our superhero merchandise store! 🦸‍♂️ We are passionate about bringing fans closer to the world of their favorite heroes.
      </p>

      <section className="mission">
        <h3>Our Mission</h3>
        <p>
          To provide the highest quality superhero collectibles, comics, posters, and action figures, making every fan’s dream collection a reality. We aim to combine fun, fandom, and creativity in one place.
        </p>
      </section>

      <section className="why-choose-us">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>🔥 Premium quality collectibles and merchandise</li>
          <li>⚡ Curated collections for true fans</li>
          <li>💌 Excellent customer support</li>
          <li>🌟 Fast shipping and secure packaging</li>
        </ul>
      </section>

      <section className="our-story">
        <h3>Our Story</h3>
        <p>
          Founded by a group of superhero enthusiasts, our store started with the dream of bringing unique and high-quality collectibles to fans across the world. Every item is handpicked, ensuring it sparks joy and amazement!
        </p>
      </section>

      <section className="fun-facts">
        <h3>False Facts</h3>
        <p>
          Did you know? We ship items to over 15 countries and have over 500+ satisfied superhero fans in our community! 🌍
        </p>
      </section>

      <p className="closing">
        Explore, shop, and let your inner hero shine! 💫
      </p>
    </div>
  );
};

export default AboutPage;
