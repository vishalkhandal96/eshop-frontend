import React from "react";
import Carousel from "../components/Hero/Carousel";
import ProductCarousel from "../components/Main/ProductCarousel";

function Home() {
  return (
    <div className="bg-gray-200">
      <Carousel />
      <ProductCarousel />
    </div>
  );
}

export default Home;
