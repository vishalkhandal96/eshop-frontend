import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchCategory(category) {
  const API_URL_CATEGORY = `https://dummyjson.com/products/category/${category}`;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCategory = async () => {
      try {
        const response = await axios.get(API_URL_CATEGORY);
        if (isMounted) {
          setProducts(response.data.products);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
        }
        console.error("Error fetching products:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCategory();

    return () => {
      isMounted = false;
    };
  }, [category]); // Include category in the dependency array

  return { products, loading, error };
}
