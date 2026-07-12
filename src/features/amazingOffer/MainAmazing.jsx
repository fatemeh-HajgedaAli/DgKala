// End-amazing-Offer
import Topbar from "./amazingPart/TopPart";
import DailyAmazingPart from "./amazingPart/DailyAmazing/DailyAmazingPart";
import CategoriesItems from "./amazingPart/CategoriesItems";
import EndAmazingOffer from "./amazingPart/EndAmazing/EndAmazingOffer";
import AmazingSupermarket from "../banners/bannerDescription/amazingSupermarket/AmazingSupermarket";
import AccessToOffer from "./amazingPart/accessToOffer/AccessToOffer";
import AmazingBuyOffer from "./amazingPart/BuyToOffer/AmazingBuyOffer";
import AmazingAllPage from "./AmazingAllPage";

// start

export default function MainAmazing() {
  return (
    <div className="">
      {/*header */}
      <Topbar />
      <DailyAmazingPart />
      {/* categories */}
      <div className="mt-10">
        {" "}
        <CategoriesItems />
      </div>
      {/* EndAmazingOffer */}
      <div>
        <EndAmazingOffer />
      </div>
      {/* superMarket */}
      <div className="">
        <AmazingSupermarket />
      </div>
      {/* accessOffer */}
      <div className="">
        <AccessToOffer />
      </div>
      {/* amazingBuyOffer */}
      <div className="">
        <AmazingBuyOffer />
      </div>
      {/* AmazingAllProducts */}
      <AmazingAllPage />
    </div>
  );
}
// finish
