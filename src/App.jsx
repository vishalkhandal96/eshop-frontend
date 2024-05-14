import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import NotMatch from "./routes/NotMatch";
import Home from "./routes/Home";
import About from "./routes/About";
import Products from "./routes/Products";
import Payment from "./routes/Payment";
import Categories from "./routes/Categories";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotMatch.jsx />}>
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

function App() {
  return (
    <div className="bg-gray-200">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
