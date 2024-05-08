import { useEffect, useRef, useState } from "react";
import UserProfile from "./UserProfile";
import Wishlist from "./Wishlist";
import ShoppingCart from "./ShoppingCart";
import SearchBar from "./SearchBar";
import BrandLogo from "./BrandLogo";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleProfile = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Hamburger Menu */}
            <div className="relative inset-y-0 left-0 flex items-center lg:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen ? "true" : "false"}
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                {/* Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block" */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                {/* Icon when menu is open.

            Menu open: "block", Menu closed: "hidden" */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              {/* Brand Logo */}

              <BrandLogo />
              {/* Menu Items */}
              <MegaMenu />
            </div>

            {/* Search bar */}
            <SearchBar />

            {/* Shopping Cart, Wishlist, User */}
            <div className="relative inset-y-0 right-0 flex items-center sm:gap-5 sm:static sm:inset-auto ">
              {/* Shopping Cart       */}
              <ShoppingCart />
              {/* Wishlist */}
              <Wishlist />
              {/* Profile dropdown */}
              <UserProfile
                {...{
                  profileMenuOpen,
                  setProfileMenuOpen,
                  toggleProfile,
                  menuRef,
                }}
              />
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <MobileMenu {...{ menuOpen }} />
      </nav>
    </>
  );
}

export default Header;
