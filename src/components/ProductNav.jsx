import React, { useState } from "react";

function ProductNav() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    // <nav>
    //   <div className="flex items-center mb-3">
    //     <ul className="flex flex-row font-medium space-x-4 rtl:space-x-reverse text-md">
    //       <li>
    //         <h2>Sort By</h2>
    //       </li>
    //       {[
    //         "Popularity",
    //         "Price-Low to High",
    //         "Price-High to Low",
    //         "Newest First",
    //       ].map((item, index) => (
    //         <li key={index}>
    //           <a
    //             href="#"
    //             className={`text-gray-700 dark:text-white hover:text-gray-900 focus:outline-none ${
    //               activeIndex === index ? "border-b-2 border-blue-500 pb-2" : ""
    //             }`}
    //             onClick={() => handleClick(index)}
    //           >
    //             {item}
    //           </a>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </nav>
    <>
      <div className="flex items-center">
        <div className="flex flex-row font-medium space-x-4 rtl:space-x-reverse text-md">
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
