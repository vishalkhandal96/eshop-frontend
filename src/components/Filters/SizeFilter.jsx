import React, { useState } from "react";

function SizeFilter() {
  const [showSize, setShowSize] = useState(false);

  const toggleDropdown = (setter, value) => {
    setter(!value);
  };

  return (
    <>
      <div className="mb-3 mt-3">
        <button
          className="w-full text-left flex justify-between items-center"
          onClick={() => toggleDropdown(setShowSize, showSize)}
        >
          <h3 className="text-sm font-medium">Size</h3>
          <svg
            className={`transform ${showSize ? "rotate-180" : ""} w-4 h-4`}
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
        {showSize && (
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <input type="checkbox" className="mr-2" /> XS
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> S
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> M
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> L
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> XL
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> XXL
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default SizeFilter;
