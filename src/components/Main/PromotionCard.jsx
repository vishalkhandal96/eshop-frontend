const PromotionCard = () => {
  return (
    <div className="flex flex-col min-w-[300px] min-h-[300px] gap-4 px-6 py-4 bg-white">
      <h2 className="text-xl font-bold line-clamp-2">
        Up to 60% off | Car, bike parts & accessories
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div
          className="relative w-full h-full col-span-full"
          style={{ minHeight: "304px" }}
        >
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/2023/GateWay/December/CC/PC_379x304_1._SY304_CB572341311_.jpg"
            alt="Promotional image for up to 60% off on car and bike parts and accessories"
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

const SecondPromotionCard = () => {
  return (
    <div className="flex flex-col min-w-[300px] min-h-[300px] gap-4 px-6 py-4 bg-white">
      <h2 className="text-xl font-bold line-clamp-2">
        Up to 60% off | Car, bike parts & accessories Up to 60% off | Car, bike
        parts & accessories
      </h2>
      <div className="flex-grow grid grid-cols-2 gap-2">
        <div className="flex flex-col object-cover w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1561365452-adb940139ffa?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Levi's Men's 511 Slim"
            className="flex-grow w-full object-cover"
          />
          <p className="text-gray-600 text-sm font-semibold line-clamp-2">
            Levi&apos;s Men&apos;s 511 Slim
          </p>
        </div>

        <div className="flex flex-col object-cover w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="Levi's Men's 511 Slim"
            className="flex-grow w-full object-cover"
            //   style={{ minHeight: "90px" }}
          />
          <p className="text-gray-600 text-sm font-semibold line-clamp-2">
            Levi&apos;s Men&apos;s 511 Slim
          </p>
        </div>
        <div className="flex flex-col object-cover w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="Levi's Men's 511 Slim"
            className="flex-grow w-full object-cover"
            //   style={{ minHeight: "90px" }}
          />
          <p className="text-gray-600 text-sm font-semibold line-clamp-2">
            Levi&apos;s Men&apos;s 511 Slim
          </p>
        </div>
        <div className="flex flex-col object-cover w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="Levi's Men's 511 Slim"
            className="flex-grow w-full object-cover"
            //   style={{ minHeight: "90px" }}
          />
          <p className="text-gray-600 text-sm font-semibold line-clamp-2">
            Levi&apos;s Men&apos;s 511 Slim
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
        Up to 60% off | Car, bike parts & accessories Up to 60% off | Car, bike
        parts & accessories
      </h2>
      <div className="flex-grow grid grid-cols-2 gap-4">
        <div className="flex flex-col object-cover w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1561365452-adb940139ffa?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Levi's Men's 511 Slim"
            className="flex-grow w-full object-cover"
          />
        </div>

        <div className="flex flex-col object-cover w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="Levi's Men's 511 Slim"
            className="flex-grow w-full object-cover"
          />
        </div>
        <div className="flex flex-col object-cover w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="Levi's Men's 511 Slim"
            className="flex-grow w-full object-cover"
          />
        </div>
        <div className="flex flex-col object-cover w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="Levi's Men's 511 Slim"
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
