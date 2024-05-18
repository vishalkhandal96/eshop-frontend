import React from "react";
import Carousel from "../components/Hero/Carousel";
import ProductCarousel from "../components/Main/ProductCarousel";
import MultiProductCard from "../components/Main/MultiProductCard";

import Newsletter from "../components/Main/Newsletter";
import { PromotionCard } from "../components/Main/PromotionCard";

function Home() {
  return (
    <div>
      <Carousel />
      <ProductCarousel />
      <MultiProductCard />

      <Newsletter />
    </div>
  );
}

export default Home;
