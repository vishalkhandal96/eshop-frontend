import React from "react";
import { Link, NavLink } from "react-router-dom";
import MegaDropdownMenu from "./MegaDropdownMenu";
import SingleDropdownMenu from "./SingleDropdownMenu";
import MegaDropdownMenuWomen from "./MegaDropdownMenuWomen";

function MegaMenu() {
  return (
    <>
      <div className="hidden sm:ml-6 sm:block">
        <ul className="flex space-x-4">
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
              to="/shop"
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
              <svg
                className="ms-3 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </NavLink>
            <div className="absolute top-0 -left-10 transition opacity-0 invisible group-hover:translate-y-5 translate-y-0 group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 mx-auto my-auto transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-1 duration-500 ease-in-out rounded-sm"></div>
                <div className="relative z-10">
                  {/* <ul className="text-nowrap text-[15px]">
                    <li>
                      <a
                        href="#"
                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                      >
                        Course Editor
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                      >
                        Course Editor
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                      >
                        Accept payments
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                      >
                        Closed Captioning
                      </a>
                    </li>
                  </ul> */}
                  <SingleDropdownMenu />
                </div>
              </div>
            </div>
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
              <svg
                className="ms-3 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
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
              <svg
                className="ms-3 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </NavLink>
            <MegaDropdownMenuWomen />
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center rounded-md px-3 py-2 text-sm font-medium ${
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
