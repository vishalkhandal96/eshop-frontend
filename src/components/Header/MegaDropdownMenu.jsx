import React from "react";
import { Link, NavLink } from "react-router-dom";

function MegaDropdownMenu() {
  return (
    <>
      {/* Men Nav Bar */}
      <div className="absolute top-0 -left-40 transition opacity-0 invisible group-hover:translate-y-5 translate-y-0 group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[800px] transform">
        <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl">
          {/* <div className="w-10 h-10 left-30 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-1 duration-500 ease-in-out rounded-sm"></div> */}
          <div className="relative z-10">
            <div className="grid grid-cols-7 gap-6">
              <div>
                <p className="tracking-wider text-gray-800 font-semibold text-[15px]">
                  Footwear
                </p>
                <ul className="hidden sm:block text-[13px]">
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Sports Shoes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Casual Shoes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Formal Shoes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Flip-Flops
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Running Shoes
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="tracking-wider text-gray-800 font-semibold text-[15px]">
                  Beauty and Grooming
                </p>
                <ul className="hidden sm:block text-[13px]">
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Deodorants
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Perfumes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Shaving & Aftershave
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="tracking-wider text-gray-800 font-semibold text-[15px]">
                  Men&apos;s Clothing
                </p>
                <ul className="hidden sm:block text-[13px]">
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      T-Shirts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Shirts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Jeans
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Trousers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Shorts
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="tracking-wider text-gray-800 font-semibold text-[15px]">
                  Men's Watches
                </p>
                <ul className="hidden sm:block text-[13px]">
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Fastrack
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Casio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Titan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Sonata
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="tracking-wider text-gray-800 font-semibold text-[15px]">
                  Men's Sports
                </p>
                <ul className="hidden sm:block text-[13px]">
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Backpacks
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      sunglasses
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-2 py-1 -mx-2 rounded-md hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-normal hover:text-indigo-600"
                    >
                      Wallets
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 relative">
                <div className="absolute inset-0 bg-cover bg-center">
                  <div className="relative z-10 px-3 md:mt-0">
                    <h2 className="mb-2 font-semibold text-[15px] text-gray-900 dark:text-white">
                      Our brands
                    </h2>
                    <p className="mb-2 text-[13px] text-gray-500 dark:text-gray-400">
                      At Flowbite, we have a portfolio of brands that cater to a
                      variety of preferences.
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-700"
                    >
                      Explore our brands
                      <span className="sr-only">Explore our brands </span>
                      <svg
                        className="w-3 h-3 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Women Nav Bar */}
    </>
  );
}

export default MegaDropdownMenu;
