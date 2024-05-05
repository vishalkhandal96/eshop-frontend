import React from "react";
import { Link } from "react-router-dom";

function UserProfile({
  profileMenuOpen,
  setProfileMenuOpen,
  toggleProfile,
  menuRef,
}) {
  return (
    <>
      <div className="relative" ref={menuRef}>
        <div>
          {/* User Icon */}
          <button
            type="button"
            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none"
            id="user-menu-button"
            aria-expanded={profileMenuOpen ? "true" : "false"}
            aria-haspopup="true"
            onClick={toggleProfile}
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
        </div>

        {/* Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95" */}

        <div
          className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            profileMenuOpen ? "block" : "hidden"
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex="-1"
        >
          {/* Active: "bg-gray-100", Not Active: "" */}
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-0"
            onClick={() => setProfileMenuOpen(false)}
          >
            Your Profile
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-1"
            onClick={() => setProfileMenuOpen(false)}
          >
            Settings
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-2"
            onClick={() => setProfileMenuOpen(false)}
          >
            Sign out
          </Link>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
