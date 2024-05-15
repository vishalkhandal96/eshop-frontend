import React from "react";

function Category() {
  return (
    <>
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Category</h3>
        <select className="block w-full border border-gray-300 rounded p-2">
          <option>All</option>
          <option>Category 1</option>
          <option>Category 2</option>
          {/* Add more categories as needed */}
        </select>
      </div>
    </>
  );
}

export default Category;
