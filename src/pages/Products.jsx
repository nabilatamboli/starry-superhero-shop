import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "Cape",
    description: "Various capes for your favorite superheroes",
    image: "https://tse2.mm.bing.net/th/id/OIP.NUvVwKVk9-OnOZlRlUjNKgHaEJ?pid=Api&P=0&h=180",
    route: "capes",
  },
  {
    id: 2,
    name: "Action Figures",
    description: "Collectible figures from popular comics",
    image: "https://preview.redd.it/6ljuqi7y2zf61.jpg?auto=webp&s=d20881467d6e7538ed28b2cd63c842c7d3cab1ac",
    route: "figures",
  },
  {
    id: 3,
    name: "Collectible",
    description: "Cosplay and exclusive collectibles",
    image: "https://tse3.mm.bing.net/th/id/OIP.G8ODW7Vph_TPDTyvNOM06QHaFj?pid=Api&P=0&h=180",
    route: "collectible",
  },
  {
    id: 4,
    name: "Comic Book",
    description: "Exclusive editions and timeless classics for every superhero fan.",
    image: "https://tse2.mm.bing.net/th/id/OIP.ZXffxbQBog3wvHi7XvBSEgHaFj?pid=Api&P=0&h=180",
    route: "comics",
    
  },
  {
    id: 5,
    name: "Posters",
    description: "High-quality posters for your favorite heroes.",
    image: "https://tse1.mm.bing.net/th/id/OIP.VFTGGFqE_LCpyl-SRQZ_lAHaE8?pid=Api&P=0&h=180",
    route: "posters",
  },
  {
    id: 6,
    name: "Collectible Cards",
    description: "Rare superhero collectible trading cards.",
    image: "https://preview.redd.it/tq0kz48p4gr51.jpg?auto=webp&s=14b33a155963b113d18b1725f7b87ade4bef5f34",
    route: "cards",
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">
      <h1 className="products-heading">
        Infinity Collectible Store 🦸‍♂️
      </h1>
      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && (
          <p className="no-results">⚡ No items match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
