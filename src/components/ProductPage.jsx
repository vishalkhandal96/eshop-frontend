import Pagination from "./Pagination";
import ProductCard from "./ProductCard";

function ProductsPage() {
  // Dummy product data (replace with actual data)
  const products = [
    { id: 1, name: "Product 1", price: 20, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 30, image: "product2.jpg" },
    { id: 3, name: "Product 3", price: 40, image: "product3.jpg" },
    // Add more products as needed
  ];

  return (
    <div className="flex">
      {/* Sidebar for filters */}

      <div className="w-1/4 p-4 bg-gray-200">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        {/* Filter options */}
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Category</h3>
          <select className="block w-full border border-gray-300 rounded p-2">
            <option>All</option>
            <option>Category 1</option>
            <option>Category 2</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Price Range</h3>
          <input
            type="range"
            min="0"
            max="100"
            className="block w-full"
            // Add event handlers to handle price range filter
          />
        </div>
        {/* Add more filter options as needed */}
      </div>

      {/* Main content area */}

      <div className="w-3/4 p-4">
        <h2 className="text-lg font-semibold mb-4">Products</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Map through products and display them as cards */}
          {/* {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              // Add more product details as needed 
            </div>
          ))} */}
          <ProductCard />
          <ProductCard />

          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex justify-center items-center mt-2">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
