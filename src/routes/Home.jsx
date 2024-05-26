import Carousel from "../components/Hero/Carousel";
import ProductCarousel from "../components/Main/ProductCarousel";
import {
  MultiProductCardFirst,
  MultiProductCardSecond,
} from "../components/Main/MultiProductCard";

function Home() {
  return (
    <div>
      <Carousel />
      <MultiProductCardSecond />
      <ProductCarousel category="smartphones" />
      <ProductCarousel category="laptops" />
      <MultiProductCardFirst />
      <ProductCarousel category="fragrances" />
      <ProductCarousel category="womens-dresses" />
      <ProductCarousel category="mens-shirts" />
      <ProductCarousel category="home-decoration" />
      <ProductCarousel category="kitchen-accessories" />
    </div>
  );
}

export default Home;
