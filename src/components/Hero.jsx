import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#0b1a3f] text-white py-20 px-6 text-center relative overflow-hidden">
     <marquee behavior="" direction=""> <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Welcome to Starry Superhero Shop
      </h2></marquee>
      <p className="text-xl md:text-2xl mb-6">
        Find exclusive superhero merchandise and comic collectibles! It's Available here only !!!
      </p>
      <button className="btn-accent px-6 py-3 text-lg font-bold">
        Shop Now
      </button>
    </section>
  );
};

export default Hero;
