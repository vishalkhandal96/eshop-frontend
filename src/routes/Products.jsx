import React from "react";
import { PromotionCard } from "../components/Main/PromotionCard";
import ProductsPage from "../components/ProductPage";
import ProductDetails from "../components/ProductDetails";

function Products() {
  return (
    <div>
      <h1>This is Shop page</h1>

      <ProductsPage />
      <ProductDetails />
    </div>
  );
}

export default Products;
