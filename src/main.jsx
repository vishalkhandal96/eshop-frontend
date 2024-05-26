import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./routes/Home.jsx";
import ProductList from "./routes/ProductList.jsx";
import ProductDetails from "./routes/ProductDetails.jsx";
import Cart from "./routes/Cart.jsx";
import Checkout from "./routes/Checkout.jsx";
import Account from "./routes/Account.jsx";
import Orders from "./routes/Orders.jsx";
import Profile from "./routes/Profile.jsx";
import About from "./routes/About.jsx";
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";
import Contact from "./routes/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products/category/:categoryName",
        element: <ProductList />,
      },
      {
        path: "products/:productName",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "account/orders",
        element: <Orders />,
      },
      {
        path: "account/profile",
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
