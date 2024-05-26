import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://dummyjson.com/products";

function useFetchProducts(productId) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (productId) {
      const getProducts = async () => {
        const products = await fetchProducts(productId);
        setProducts(products);
        console.log(products);
      };
      getProducts();
    }
  }, [productId]);

  const fetchProducts = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data.products;
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error);
      return [];
    }
  };

  return { products, error };
}

export default useFetchProducts;
