import React from "react";
import { useState } from "react";

function CustomerRatingsFilter() {
  const [showRatings, setShowRatings] = useState(false);

  const toggleDropdown = (setter, value) => {
    setter(!value);
  };
  return (
    <>
      <div className="mb-3 mt-3">
        <button
          className="w-full text-left flex justify-between items-center"
          onClick={() => toggleDropdown(setShowRatings, showRatings)}
        >
          <h3 className="text-sm font-medium">Customer Ratings</h3>
          <svg
            className={`transform ${showRatings ? "rotate-180" : ""} w-4 h-4`}
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
        {showRatings && (
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <input type="checkbox" className="mr-2" /> 4★ & above
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> 3★ & above
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default CustomerRatingsFilter;
