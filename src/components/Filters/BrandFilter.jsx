import React, { useState } from "react";

function BrandFilter() {
  const [showBrands, setShowBrands] = useState(false);

  const toggleDropdown = (setter, value) => {
    setter(!value);
  };
  return (
    <>
      <div className="mb-3 mt-3">
        <button
          className="w-full text-left flex justify-between items-center"
          onClick={() => toggleDropdown(setShowBrands, showBrands)}
        >
          <h3 className="text-sm font-medium">Brand</h3>
          <svg
            className={`transform ${showBrands ? "rotate-180" : ""} w-4 h-4`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {showBrands && (
          <div className="mt-2">
            <div className="relative flex items-center font-normal gap-2 mb-3">
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Brand"
                className="w-full outline-none text-sm"
              />
              <hr className="absolute w-full -bottom-0.5" />
            </div>

            <ul className="space-y-2 text-sm">
              <li>
                <input type="checkbox" className="mr-2" /> ADIDAS
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Allen Solly
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> ARROW
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Arrow Newyork
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Arrow Sport
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Blackberrys
              </li>
              <li>
                <button
                  className="text-blue-500 font-semibold hover:text-blue-600 uppercase text-xs"
                  onClick={() => toggleDropdown(setShowBrands, showBrands)}
                >
                  234 MORE
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default BrandFilter;
