import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Superhero Cape",
    price: 29.99,
    image: "https://tse3.mm.bing.net/th/id/OIP.kfr5_PUyWK4ctqoz0KAG3AHaE_?pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: "Action Figure",
    price: 49.99,
    image: "https://preview.redd.it/6ljuqi7y2zf61.jpg?auto=webp&s=d20881467d6e7538ed28b2cd63c842c7d3cab1ac",
  },
  {
    id: 3,
    name: "Comic Book",
    price: 9.99,
    image: "https://tse3.mm.bing.net/th/id/OIP.hGNZrcX1obKyeZEIRgi6FwHaGt?pid=Api&P=0&h=180",
  },
  {
    id: 4,
    name: "Superhero Mask",
    price: 19.99,
    image: "https://tse1.mm.bing.net/th/id/OIP.vbNSIhkrMuGcAlvSiDfDLAHaFL?pid=Api&P=0&h=180",
  },
];

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <Hero />

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
