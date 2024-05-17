import React from "react";

function PriceRange() {
  return (
    <>
      <div className="mb-3 mt-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium">Price Range</h3>
          <button className="text-blue-500 hover:text-blue-600 uppercase text-xs font-semibold">
            clear
          </button>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          className="block w-full mb-2"
          // Add event handlers to handle price range filter
        />
        <div className="flex items-center justify-between gap-4 mb-2">
          <select className="block text-xs w-full border focus:outline-none border-gray-300 rounded p-1">
            <option>Min</option>
            <option>1000</option>
            <option>2000</option>
            {/* Add more categories as needed */}
          </select>
          <span>to</span>
          <select className="block text-xs w-full border focus:outline-none border-gray-300 rounded p-1">
            <option>Max</option>
            <option>10000</option>
            <option>20000</option>
            {/* Add more categories as needed */}
          </select>
        </div>
      </div>
    </>
  );
}

export default PriceRange;
