import React from "react";

import Category from "../components/Filters/Category";
import PriceRange from "../components/Filters/PriceRange";
import { ProductCard } from "../components/Products/ProductCard";
import Pagination from "../components/Pagination";

function Products() {
  const sampleProduct = {
    title:
      "TRIGGR Kraken X1 with Battery Display, 40ms Latency, Qu IGGR Kraken X1 with Battery Display, 40ms La",
    brand: "Apple",
    description: "Black, True Wireless",
    price: 899,
    rating: 4.1,
    reviews: 21998,
    discount: 77,
    images: [
      "https://via.placeholder.com/200x200?text=Image+1",
      "https://via.placeholder.com/200x200?text=Image+2",
      "https://via.placeholder.com/200x200?text=Image+3",
    ],
  };

  return (
    <>
      <div className="mx-auto mt-2 max-w-screen-2xl px-2 bg-gray-200">
        <div className="flex gap-2">
          <div className="w-1/5 p-4 bg-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button className="text-blue-500 font-semibold hover:text-blue-600 uppercase text-sm">
                clear all
              </button>
            </div>
            {/* Filter options */}

            <Category />
            <PriceRange />
            {/* Add more filter options as needed */}
          </div>
          <div className="w-4/5 p-4 bg-white">
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <div className="flex flex-col sm:grid sm:grid-cols-4 gap-2">
              <ProductCard product={sampleProduct} />
              <ProductCard product={sampleProduct} />

              <ProductCard product={sampleProduct} />

              <ProductCard product={sampleProduct} />
            </div>
            <div className="flex justify-center items-center mt-2">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
