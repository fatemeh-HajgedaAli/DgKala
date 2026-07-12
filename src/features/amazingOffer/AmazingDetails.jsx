import { Link, useParams } from "react-router-dom";

import { amazingProducts } from "../../data/categoriesData/amazingData";
// details-description-data
import { amazingDetailsData } from "./amazingDetails/detailDescription/amazingDetailsData";
// desktop
import AmazingOfferAction from "./amazingDetails/AmazingOfferAction";
import AmazingGallary from "./amazingDetails/AmazingGallary";
import AmazingInfo from "./amazingDetails/AmazingInfo";
import AmazingSpece from "./amazingDetails/AmazingSpece";
import DetailsLink from "./amazingDetails/DetailsLink";
import AmazingFeature from "./amazingDetails/AmazingFeature";

// mobile
import MobileProductLayout from "./MobileProductLayout";
// detailsDescription
import ProductTabs from "./amazingDetails/detailDescription/ProductTabs";
// icons
import { BiChevronLeft } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

// start
export default function AmazingDetails() {
  const { id } = useParams();

  const product = amazingProducts.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-10 text-gray-500" dir="rtl">
        محصول پیدا نشد
      </div>
    );
  }

  return (
    <>
      {/* MOBILE */}
      <div className="block md:hidden">
        <MobileProductLayout product={product} />
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block p-5" dir="rtl">
        <DetailsLink product={product} />

        <section
          className="
          grid
          grid-cols-12
          gap-6
          mt-5
          "
        >
          {/* RIGHT - Gallery */}
          <div
            className="
            col-span-4
            "
          >
            <AmazingGallary product={product} />
          </div>

          {/* CENTER - Info */}
          <div
            className="
            col-span-5
            bg-white
            rounded-2xl
            p-5
            space-y-5
            "
          >
            <AmazingInfo product={product} />

            <AmazingFeature product={product} />
            {/* more */}

            <div className="flex flex-col items-center w-full ">
              <Link
                to={`/amazing/${product.id}/description`}
                className="flex items-center justify-center w-full my-4 
                text-sm font-medium text-gray-500 hover:text-gray-700 
                transition-colors gap-4"
              >
                {/* right-line */}
                <span className="h-[1px] flex-1 bg-gray-100"></span>

                {/* text+btn */}
                <span className="flex items-center gap-1 flex-shrink-0">
                  مشاهده همه ویژگی‌ها
                  <BiChevronLeft className="text-xl mt-0.5" />
                </span>

                {/* left */}
                <span className="h-[1px] flex-1 bg-gray-100"></span>
              </Link>

              {/* alarm-text */}
              <div className="flex items-start gap-2.5  p-4 mt-6 w-full">
                <AiOutlineInfoCircle className="text-gray-400 text-xl flex-shrink-0 mt-0.5" />
                <p className="text-gray-500 font-normal text-xs leading-6 text-justify">
                  درخواست مرجوع کردن کالا در گروه هدفون، هدست و هندزفری با دلیل
                  "انصراف از خرید" تنها در صورتی قابل تایید است که کالا در شرایط
                  اولیه باشد (در صورت پلمب بودن، کالا نباید باز شده باشد).
                </p>
              </div>
            </div>
          </div>

          {/* LEFT - Buy Card */}
          <div
            className="
            col-span-3
            "
          >
            <AmazingOfferAction product={product} />
          </div>
        </section>

        {/* Specifications  */}
        <div className="mt-8">
          <AmazingSpece product={product} />
        </div>
      </div>
    </>
  );
}
