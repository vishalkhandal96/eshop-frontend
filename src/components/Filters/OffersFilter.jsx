import { useState } from "react";

function OffersFilter() {
  const [showOffer, setShowOffer] = useState(false);
  const toggleDropdown = (setter, value) => {
    setter(!value);
  };
  return (
    <>
      <div className="mt-3 mb-3">
        <button
          className="w-full text-left flex justify-between items-center"
          onClick={() => toggleDropdown(setShowOffer, showOffer)}
        >
          <h3 className="text-sm font-medium">Offers</h3>
          <svg
            className={`transform ${showOffer ? "rotate-180" : ""} w-4 h-4`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {showOffer && (
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <input type="checkbox" className="mr-2" /> Buy More, Save More
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> Special Price
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> No Cost EMI
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default OffersFilter;
