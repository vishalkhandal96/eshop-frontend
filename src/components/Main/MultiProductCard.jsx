import {
  PromotionCard,
  SecondPromotionCard,
  ThirdPromotionCard,
} from "./PromotionCard";

function MultiProductCardFirst() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl m-6 px-3 sm:px-4 md:px-6 xl:px-0">
        <div className="flex overflow-x-auto gap-6">
          {/* First Card */}
          <PromotionCard
            title="Up to 60% off | Car, bike parts & accessories"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/2023/GateWay/December/CC/PC_379x304_1._SY304_CB572341311_.jpg"
          />
          <PromotionCard
            title="Up to 75% off | Headphones"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img23/CE/MSO/April/SetE/2_Boat_PC_CC_758x608_1x._SY304_CB560306314_.jpg"
          />
          <PromotionCard
            title="Under ₹699 | Combo packs | Amazon brands & more"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2024/GW_Mar/25th/Combo_low_res_2_1_1_1_1._SY304_CB579829084_.jpg"
          />
          <PromotionCard
            title="Up to 50% off | International brands"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/wk_21/1/PC_CC_379x304._SY304_CB557364177_.jpg"
          />
        </div>
      </div>
    </>
  );
}

function MultiProductCardSecond() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl m-6 px-3 sm:px-4 md:px-6 xl:px-0">
        <div className="flex overflow-x-auto gap-6">
          {/* First Card */}
          <PromotionCard
            title="Min. 60% off | Solar lights"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/2024/PCCC/Pc_379_X_304-2-min._SY304_CB582865379_.jpg"
          />
          <PromotionCard
            title="Up to 75% off | Headphones"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img23/CE/MSO/April/SetE/2_Boat_PC_CC_758x608_1x._SY304_CB560306314_.jpg"
          />

          <SecondPromotionCard />
          <ThirdPromotionCard />
        </div>
      </div>
    </>
  );
}

export { MultiProductCardFirst, MultiProductCardSecond };
