import React, { useState } from "react";

function ProductNav() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="flex items-center">
        <div className="mb-2 flex flex-row font-medium space-x-4 rtl:space-x-reverse text-md">
          <div>
            <h2>Sort By</h2>
          </div>
          {[
            "Popularity",
            "Price-Low to High",
            "Price-High to Low",
            "Newest First",
          ].map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer text-gray-700 dark:text-white hover:text-gray-900 focus:outline-none ${
                activeIndex === index ? "border-b-2 border-blue-500 pb-2" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductNav;
