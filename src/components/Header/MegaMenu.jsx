import React from "react";
import { Link, NavLink } from "react-router-dom";
import MegaDropdownMenu from "./MegaDropdownMenu";
import SingleDropdownMenu from "./SingleDropdownMenu";
import MegaDropdownMenuWomen from "./MegaDropdownMenuWomen";

function MegaMenu() {
  return (
    <>
      <div className="hidden sm:ml-6 lg:block">
        <ul className="flex space-x-1">
          <li>
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } `
              }
              aria-current="page"
              onClick={() => handleNavLinkClick("Home")}
            >
              Home
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              to="/products/category/1"
              className={({ isActive }) =>
                `flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`
              }
              onClick={() => handleNavLinkClick("Shop")}
            >
              Shop
            </NavLink>
            <SingleDropdownMenu />
          </li>
          <li className="relative group">
            <NavLink
              to="/men"
              className={({ isActive }) =>
                `flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`
              }
              onClick={() => handleNavLinkClick("Men")}
            >
              Men
            </NavLink>
            <MegaDropdownMenu />
          </li>
          <li className="relative group">
            <NavLink
              to="/women"
              className={({ isActive }) =>
                `flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`
              }
              onClick={() => handleNavLinkClick("Women")}
            >
              Women
            </NavLink>
            <MegaDropdownMenuWomen />
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center text-nowrap rounded-md px-3 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`
              }
              onClick={() => handleNavLinkClick("About")}
            >
              About us
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MegaMenu;
