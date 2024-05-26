import { useRef } from "react";

import { Link } from "react-router-dom";
import { useFetchCategory } from "../../hooks/useFetchCategory";

function ProductCarousel({ category }) {
  const { products, loading, error } = useFetchCategory(category);
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({
        left: -containerWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const containerWith = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: containerWith, behavior: "smooth" });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mx-auto max-w-screen-xl m-6 px-3 sm:px-4 md:px-6 xl:px-0">
      <div className="relative p-6 bg-white mx-auto whitespace-nowrap">
        <div className="flex items-baseline justify-start gap-4 mb-4">
          <h1 className="text-2xl font-bold">{category}</h1>
          {
            <Link
              to={`/products/category/${category}`}
              className="text-blue-500 hover:underline"
            >
              See More
            </Link>
          }
        </div>

        <div
          className="flex gap-4 overflow-x-auto whitespace-nowrap"
          ref={carouselRef}
        >
          {products &&
            products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="bg-white transition-all duration-300 min-w-[200px]"
              >
                <img
                  className="object-cover px-2"
                  src={product.thumbnail}
                  alt={product.title}
                />
                <div className="p-2">
                  <h2 className="text-lg font-bold mb-2 text-wrap">
                    {product.title}
                  </h2>
                  <p className="flex items-center">
                    <span className="text-yellow-600 font-semibold mr-2">
                      Rating:
                    </span>
                    {product.rating}
                  </p>
                  <p className="flex items-center">
                    <span className="flex items-center gap-2 font-semibold mr-1 text-yellow-600">
                      Price:
                      <span className="text-gray-700">&#8377;</span>
                    </span>
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
        </div>
        <button
          onClick={scrollLeft}
          className="absolute ml-6 inset-y-1/2 left-0 transform -translate-y-1/2 border-2 flex items-center justify-center bg-white shadow-lg text-gray-600 hover:text-gray-800 focus:text-gray-950 w-12 h-24"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className="absolute mr-6 inset-y-1/2 right-0 transform -translate-y-1/2 border-2 flex items-center justify-center bg-white shadow-lg text-gray-600 hover:text-gray-800 focus:text-gray-950 w-12 h-24"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProductCarousel;
