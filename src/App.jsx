import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

import Navbars from "./components/Navbars";
import ProductsPage from "./components/ProductPage";
import ShopingCart from "./components/ShopingCart";
import ProductDetails from "./components/ProductDetails";
import ProductCard from "./components/ProductCard";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
