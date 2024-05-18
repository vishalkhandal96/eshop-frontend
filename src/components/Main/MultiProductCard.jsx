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
          <PromotionCard />
          <PromotionCard />
          {/* <SecondPromotionCard />
          <ThirdPromotionCard /> */}
          <PromotionCard />
        </div>
      </div>
    </>
  );
}

export default MultiProductCard;
