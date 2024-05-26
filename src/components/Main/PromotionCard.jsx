const PromotionCard = ({ title, image }) => {
  return (
    <div className="flex flex-col min-w-[300px] min-h-[300px] gap-4 px-6 py-4 bg-white">
      <h2 className="text-xl font-bold line-clamp-2">{title}</h2>

      <div className="grid grid-cols-2 gap-4">
        <div
          className="relative w-full h-full col-span-full"
          style={{ minHeight: "304px" }}
        >
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={image}
            alt={title}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/304";
              e.target.alt = "Placeholder Image";
            }}
          />
        </div>
      </div>

      <a href="https://example.com" className="text-blue-500 hover:underline">
        See More
      </a>
    </div>
  );
};

const SecondPromotionCard = ({ title, image }) => {
  return (
    <div className="flex flex-col min-w-[300px] min-h-[300px] gap-4 px-6 py-4 bg-white">
      <h2 className="text-xl font-bold line-clamp-2">
        Top mobile accessories for your smartphone
      </h2>
      <div className="flex-grow grid grid-cols-2 gap-2">
        <div className="flex flex-col object-cover w-full h-full overflow-hidden">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOREFRESHDESKTOP/D87165616_IN_WLA_BAU_MSO_REFRESH-desktop-version_PC_QuadCard_186X116_4X4._SY116_CB602731451_.jpg"
            alt="Powerbanks"
            className="flex-grow w-full object-cover"
          />
          <p className="text-gray-600 text-sm font-semibold line-clamp-2">
            Best Selling Powerbanks
          </p>
        </div>

        <div className="flex flex-col object-cover w-full h-full overflow-hidden">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOREFRESHDESKTOP/D87165616_IN_WLA_BAU_MSO_REFRESH-desktop-version_PC_QuadCard_186X116_3X3._SY116_CB602731451_.jpg"
            alt="Headsets"
            className="flex-grow w-full object-cover"
            //   style={{ minHeight: "90px" }}
          />
          <p className="text-gray-600 text-sm font-semibold line-clamp-2">
            Levi&apos;s Men&apos;s 511 Slim
          </p>
        </div>
        <div className="flex flex-col object-cover w-full h-full overflow-hidden">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOREFRESHDESKTOP/D87165616_IN_WLA_BAU_MSO_REFRESH-desktop-version_PC_QuadCard_186X116_2X2._SY116_CB602731451_.jpg"
            alt="Cables and chargers"
            className="flex-grow w-full object-cover"
            //   style={{ minHeight: "90px" }}
          />
          <p className="text-gray-600 text-sm font-semibold line-clamp-2">
            Cables and chargers
          </p>
        </div>
        <div className="flex flex-col object-cover w-full h-full overflow-hidden">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOREFRESHDESKTOP/D87165616_IN_WLA_BAU_MSO_REFRESH-desktop-version_PC_QuadCard_186X116_1X1._SY116_CB602731451_.jpg"
            alt="Cases and covers"
            className="flex-grow w-full object-cover"
            //   style={{ minHeight: "90px" }}
          />
          <p className="text-gray-600 text-sm font-semibold line-clamp-2">
            Best cases and covers
          </p>
        </div>
      </div>
      <a href="#" className="justify-start text-blue-500 hover:underline">
        See More
      </a>
    </div>
  );
};

const ThirdPromotionCard = () => {
  return (
    <div className="flex flex-col min-w-[300px] min-h-[300px] gap-4 px-6 py-4 bg-white">
      <h2 className="text-xl font-bold line-clamp-2">
        Appliances for your home | Up to 55% off
      </h2>
      <div className="flex-grow grid grid-cols-2 gap-4">
        <div className="flex flex-col object-cover w-full h-full overflow-hidden">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
            alt="Air conditioners"
            className="flex-grow w-full object-cover"
          />
        </div>

        <div className="flex flex-col object-cover w-full h-full overflow-hidden">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
            alt="Refrigerators"
            className="flex-grow w-full object-cover"
          />
        </div>
        <div className="flex flex-col object-cover w-full h-full overflow-hidden">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
            alt="Microwaves"
            className="flex-grow w-full object-cover"
          />
        </div>
        <div className="flex flex-col object-cover w-full h-full overflow-hidden">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
            alt="Washing machines"
            className="flex-grow w-full object-cover"
          />
        </div>
      </div>
      <a href="#" className="justify-start text-blue-500 hover:underline">
        See More
      </a>
    </div>
  );
};

export { PromotionCard, SecondPromotionCard, ThirdPromotionCard };
