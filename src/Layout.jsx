import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Home from "./routes/Home";

function Layout() {
  return (
    <div>
      <Header />
      <Home />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
