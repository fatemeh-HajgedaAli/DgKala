import SellerHeader from "./SellerHeader";
import SellerInfo from "./SellerInfo";
import GuaranteeItem from "./GuaranteeItem";
import ShippingItem from "./ShippingItem";
import PlusBenefits from "./PlusBenefits";
import DigiclubItem from "./DigiclubItem";

import PlusCard from "./PlusCard";
// slider
import ServicesSlider from "./ServicesSlider";

export default function MobileSellerSection({ seller, guarantee }) {
  return (
    <div className="flex flex-col w-full bg-white pb-4" dir="rtl">
      <SellerHeader />

      <SellerInfo seller={seller} />

      <GuaranteeItem guarantee={guarantee} />

      <ShippingItem />

      <PlusBenefits />

      <DigiclubItem />

      <hr className="w-full bg-gray-100 border-none h-2 my-2" />

      <ServicesSlider />
      <PlusCard />
    </div>
  );
}
