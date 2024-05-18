import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <main className="bg-gray-200">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
