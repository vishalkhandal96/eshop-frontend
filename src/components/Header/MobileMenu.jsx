import React from "react";
import { NavLink } from "react-router-dom";

function MobileMenu({ menuOpen }) {
  return (
    <>
      <div className={menuOpen ? "block" : "hidden"} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block rounded-md px-3 py-2 text-base font-medium ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
            aria-current="page"
            // onClick={() => handleLinkClick("Home")}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `flex items-center rounded-md px-3 py-2 text-base font-medium ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
            // onClick={() => handleLinkClick("Shop")}
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
          <NavLink
            to="/men"
            className={({ isActive }) =>
              `flex items-center rounded-md px-3 py-2 text-base font-medium ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
            // onClick={() => handleLinkClick("Men")}
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
          <NavLink
            to="/women"
            className={({ isActive }) =>
              `flex items-center rounded-md px-3 py-2 text-base font-medium ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
            // onClick={() => handleLinkClick("Women")}
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
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block rounded-md px-3 py-2 text-base font-medium ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
            // onClick={() => handleLinkClick("About us")}
          >
            About us
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
