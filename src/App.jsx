// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Navbars from "./components/Navbars";
import ProductsPage from "./components/ProductPage";
import ShopingCart from "./components/ShopingCart";
import ProductDetails from "./components/ProductDetails";
import ProductCard from "./components/ProductCard";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div>
      <Navbars />
      <ProductDetails />
    </div>
  );
}

export default App;
