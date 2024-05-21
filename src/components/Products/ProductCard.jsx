import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductCard = () => {
  const API_URL = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const [hover, setHover] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      console.log(products);
    };

    getProducts();
  }, []);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
    setImageIndex(0);
  };

  const handleMouseOver = (index) => {
    setImageIndex(index);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data.products;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };

  return (
    <div
      className="hover:shadow-xl mt-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => {
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <div className="relative">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-44 object-cover mb-2"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400 absolute top-2 right-2 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>

            <h2 className="text-md font-bold mb-2">{product.brand}</h2>
            <h3 className="text-md font-semibold mb-2 line-clamp-2">
              {product.title}
            </h3>
            <p className="text-sm text-gray-700 mb-2">{product.description}</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="font-bold">₹{product.price}</span>

              <span className="font-bold text-green-600">
                {product.discountPercentage}% off
              </span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-3">
                <span className="flex items-center px-1 rounded-sm bg-green-700 text-white font-bold text-md gap-1">
                  {product.rating}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </span>
                </span>
                <span className="text-gray-600">({product.reviews})</span>
              </div>
            </div>
            <p className="text-xs text-red-600 mt-2 mb-2">
              {product.description}
            </p>
            <div className="flex mt-2 space-x-2">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={product.title}
                  className="w-10 h-10 object-cover cursor-pointer"
                  onMouseOver={() => handleMouseOver(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="mt-3 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button>
          </div>;
        })}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

function ProductCardSecond() {
  return (
    <div className="rounded-md border">
      <img
        src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="Laptop"
        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          Nike Airmax v2
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Sneakers
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Nike
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Airmax
          </span>
        </div>
        <div className="mt-3 flex items-center space-x-2">
          <span className="block text-sm font-semibold">Colors : </span>
          <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
          <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
          <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
        </div>
        <div className="mt-5 flex items-center space-x-2">
          <span className="block text-sm font-semibold">Size : </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            8 UK
          </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            9 UK
          </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            10 UK
          </span>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export { ProductCard, ProductCardSecond };
