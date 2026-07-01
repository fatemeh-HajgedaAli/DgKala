// End-amazing-Offer
import Topbar from "./amazingPart/TopPart";
import DailyAmazingPart from "./amazingPart/DailyAmazingPart";
import CategoriesItems from "./amazingPart/CategoriesItems";
import EndAmazingOffer from "./amazingPart/EndAmazingOffer";
import AmazingSupermarket from "../banners/bannerDescription/amazingSupermarket/AmazingSupermarket";
// start

export default function AmazingProducts() {
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
    </div>
  );
}
// finish
