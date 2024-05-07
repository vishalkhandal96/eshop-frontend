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
    </>
  );
}

export default SingleDropdownMenu;
