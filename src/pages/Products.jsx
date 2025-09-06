import React from "react";
import ProductCard from "../components/ProductCard";
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
    description: "Exclusive editions and timeless classics for every superhero fan.",
    image: "https://tse3.mm.bing.net/th/id/OIP.hGNZrcX1obKyeZEIRgi6FwHaGt?pid=Api&P=0&h=180",
  },
  {
    id: 4,
    name: "Superhero Mask",
    description: "Cosplay and collectible superhero masks.",
    image: "https://tse1.mm.bing.net/th/id/OIP.vbNSIhkrMuGcAlvSiDfDLAHaFL?pid=Api&P=0&h=180",
  },

  {
    id: 5,
    name: "Posters",
    description: "High-quality posters for your favorite heroes.",
    image: "https://tse1.mm.bing.net/th/id/OIP.VFTGGFqE_LCpyl-SRQZ_lAHaE8?pid=Api&P=0&h=180",
  },
  {
    id: 6,
    name: "Collectible Cards",
    description: "Rare superhero collectible trading cards.",
    image: "https://preview.redd.it/tq0kz48p4gr51.jpg?auto=webp&s=14b33a155963b113d18b1725f7b87ade4bef5f34",
  },

];

const Products = () => {
  return (
    <div className="products-page">
      <h3 className="products-title">
        Explore our wide range of superhero merchandise and exclusive collectibles!
      </h3>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
