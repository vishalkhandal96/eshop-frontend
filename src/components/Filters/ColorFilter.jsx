import React, { useState } from "react";

function ColorFilter() {
  const [showColor, setShowColor] = useState(false);
  const toggleDropdown = (setter, value) => {
    setter(!value);
  };
  return (
    <>
      <div className="mt-3 mb-3">
        <button
          className="w-full text-left flex justify-between items-center"
          onClick={() => toggleDropdown(setShowColor, showColor)}
        >
          <h3 className="text-sm font-medium">Color</h3>
          <svg
            className={`transform ${showColor ? "rotate-180" : ""} w-4 h-4`}
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
        {showColor && (
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <input type="checkbox" className="mr-2" /> Black
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> White
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> Red
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> Blue
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> Green
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default ColorFilter;
