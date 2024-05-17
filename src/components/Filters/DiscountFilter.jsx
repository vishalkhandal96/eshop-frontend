import React, { useState } from "react";

function DiscountFilter() {
  const [showDiscount, setShowDiscount] = useState(false);

  const toggleDropdown = (setter, value) => {
    setter(!value);
  };
  return (
    <>
      <div className="mb-3 mt-3">
        <button
          className="w-full text-left flex justify-between items-center"
          onClick={() => toggleDropdown(setShowDiscount, showDiscount)}
        >
          <h3 className="text-sm font-medium">Discount</h3>
          <svg
            className={`transform ${showDiscount ? "rotate-180" : ""} w-4 h-4`}
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
        {showDiscount && (
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <input type="checkbox" className="mr-2" /> 10% Off or more
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> 20% Off or more
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> 30% Off or more
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> 50% Off or more
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> 70% Off or more
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default DiscountFilter;
