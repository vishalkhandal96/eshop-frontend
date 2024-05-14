import React from "react";
import Carousel from "../components/Hero/Carousel";
import ProductCarousel from "../components/Main/ProductCarousel";
import MultiProductCard from "../components/Main/MultiProductCard";

function Home() {
  return (
    <div className="bg-gray-200">
      <Carousel />
      <ProductCarousel />
      <MultiProductCard />
    </div>
  );
}

export default Home;
