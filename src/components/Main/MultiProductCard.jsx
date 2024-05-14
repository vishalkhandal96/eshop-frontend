import {
  PromotionCard,
  SecondPromotionCard,
  ThirdPromotionCard,
} from "./PromotionCard";

function MultiProductCard() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl m-6 px-3 sm:px-4 md:px-6 xl:px-0">
        <div className="flex overflow-x-auto gap-6">
          {/* First Card */}
          <PromotionCard />
          <SecondPromotionCard />
          <ThirdPromotionCard />

          {/* Forth Card */}
          <div className="flex flex-col min-w-[300px] min-h-[300px] gap-4 px-6 py-4 bg-white">
            <h2 className="text-xl font-bold line-clamp-2">
              Up to 60% off | Car, bike parts & accessories Up to 60% off | Car,
              bike parts & accessories
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <img
                className="object-center w-full"
                src="https://via.placeholder.com/100"
                alt="Product Image"
              />

              <img
                className="object-center w-full"
                src="https://via.placeholder.com/100"
                alt="Product Image"
              />
              <img
                className="object-center w-full"
                src="https://via.placeholder.com/100"
                alt="Product Image"
              />
              <img
                className="object-center w-full"
                src="https://via.placeholder.com/100"
                alt="Product Image"
              />
            </div>
            <a href="#" className="justify-start text-blue-500 hover:underline">
              See More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MultiProductCard;
