import React, { useRef } from "react";

function ProductCarousel() {
  const containerRef = useRef(null);
  let scrollPosition = 0;

  function scrollCarousel(direction) {
    scrollPosition += direction * containerRef.current.offsetWidth;
    scrollPosition = Math.min(
      scrollPosition,
      containerRef.current.scrollWidth - containerRef.current.offsetWidth
    );
    scrollPosition = Math.max(scrollPosition, 0);
    containerRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }

  return (
    <div className="mx-auto max-w-screen-xl m-6 px-3 sm:px-4 md:px-6 xl:px-0">
      <div
        className=" p-6 my-2 bg-white mx-auto overflow-hidden whitespace-nowrap"
        ref={containerRef}
      >
        <div className="flex items-baseline justify-start gap-4 mb-4">
          <h1 className="text-2xl font-bold">Product Carousel</h1>
          <a href="#" className="text-blue-500 hover:underline">
            See More
          </a>
        </div>
        <div className="relative">
          <div className="flex gap-1">
            <div className="product-card bg-white shadow-lg rounded-sm transition-all duration-300">
              <img
                className="object-center w-full p-2"
                src="https://via.placeholder.com/200"
                alt="Product Image"
              />
              <div className="p-2">
                <h2 className="text-lg font-bold mb-2">Product 1</h2>
                <p>Description of Product 1</p>
              </div>
            </div>
            <div className="product-card bg-white shadow-lg rounded-sm transition-all duration-300">
              <img
                className="object-center w-full p-2"
                src="https://via.placeholder.com/200"
                alt="Product Image"
              />
              <div className="p-2">
                <h2 className="text-lg font-bold mb-2">Product 1</h2>
                <p>Description of Product 1</p>
              </div>
            </div>
            <div className="product-card bg-white shadow-lg rounded-sm transition-all duration-300">
              <img
                className="object-center w-full p-2"
                src="https://via.placeholder.com/200"
                alt="Product Image"
              />
              <div className="p-2">
                <h2 className="text-lg font-bold mb-2">Product 1</h2>
                <p>Description of Product 1</p>
              </div>
            </div>
            <div className="product-card bg-white shadow-lg rounded-sm transition-all duration-300">
              <img
                className="object-center w-full p-2"
                src="https://via.placeholder.com/200"
                alt="Product Image"
              />
              <div className="p-2">
                <h2 className="text-lg font-bold mb-2">Product 1</h2>
                <p>Description of Product 1</p>
              </div>
            </div>
            <div className="product-card bg-white shadow-lg rounded-sm transition-all duration-300">
              <img
                className="object-center w-full p-2"
                src="https://via.placeholder.com/200"
                alt="Product Image"
              />
              <div className="p-2">
                <h2 className="text-lg font-bold mb-2">Product 1</h2>
                <p>Description of Product 1</p>
              </div>
            </div>

            {/* Add more product cards as needed */}
          </div>
          <button
            className="absolute inset-1/4 left-0 border-2 flex items-center justify-center bg-white shadow-lg text-gray-600 hover:text-gray-800 focus:text-gray-950 w-10 h-20"
            onClick={() => scrollCarousel(-1)}
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
            className="absolute inset-y-1/4 right-0 border-2 flex items-center justify-center bg-white shadow-lg text-gray-600 hover:text-gray-800 focus:text-gray-950 w-10 h-20"
            onClick={() => scrollCarousel(1)}
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
    </div>
    // </div>
  );
}

export default ProductCarousel;
