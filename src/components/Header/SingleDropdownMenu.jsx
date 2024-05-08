import React from "react";
import { Link } from "react-router-dom";

const shopData = [
  {
    id: 1,
    title: "Mobile Phones",
    path: "/mobile-phones",
  },
  {
    id: 2,
    title: "Laptops",
    path: "/laptops",
  },
  {
    id: 3,
    title: "Cameras",
    path: "/cameras",
  },
  {
    id: 4,
    title: "Television",
    path: "/television",
  },
  {
    id: 5,
    title: "Kitchen Appliances",
    path: "/kitchen-appliances",
  },
  {
    id: 6,
    title: "Books",
    path: "/books",
  },
  {
    id: 7,
    title: "Home & Furniture",
    path: "/home-and-furniture",
  },
];

function SingleDropdownMenu() {
  return (
    <>
      <div className="absolute top-0 -left-10 transition opacity-0 invisible group-hover:translate-y-5 translate-y-0 group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 mx-auto my-auto transform">
        <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
          {/* <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-1 duration-500 ease-in-out rounded-sm"></div> */}
          <div className="relative z-10">
            <ul className="text-nowrap text-[15px]">
              {shopData.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleDropdownMenu;
