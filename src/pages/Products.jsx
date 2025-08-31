import React from "react";
import ProductCard from "../components/ProductCard";
import ProductSlider from "../components/ProductSlider";
import "./Products.css";


const products = [  
  {
    id: 1,
    name: "Superhero Cape",
    description: "Various capes for your favorite superheroes",
    image: "https://tse3.mm.bing.net/th/id/OIP.kfr5_PUyWK4ctqoz0KAG3AHaE_?pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: "Action Figure",
    description: "Collectible figures from popular comics",
    image: "https://preview.redd.it/6ljuqi7y2zf61.jpg?auto=webp&s=d20881467d6e7538ed28b2cd63c842c7d3cab1ac",
  },
  {
    id: 3,
    name: "Comic Book",
    description: "Dive into the worlds of your favorite heroes and villains with our exclusive comic book collection — rare editions and timeless classics included!",
    image: "https://tse3.mm.bing.net/th/id/OIP.hGNZrcX1obKyeZEIRgi6FwHaGt?pid=Api&P=0&h=180",
  },
  {
    id: 4,
    name: "Superhero Mask",
    description: "Transform into your favorite superhero! Our mask collection features iconic designs for cosplay, parties, and collectible displays.",
    image: "https://tse1.mm.bing.net/th/id/OIP.vbNSIhkrMuGcAlvSiDfDLAHaFL?pid=Api&P=0&h=180",
  },
];

const Products = () => {
  return (
    <div className="products-page">
      <h1 className="products-title">Our Superhero Collectibles</h1>
      <p className="products-subtitle">Explore exclusive superhero merch & comic collectibles! Dive into your favourite world!! </p>
    
      <ProductSlider products={products} /> 
    </div>
    
  );
};

export default Products;
