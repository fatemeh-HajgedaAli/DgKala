import { forwardRef } from "react";
import { Link } from "react-router-dom";

// logo
import amazingLogo from "../../../../assets/logos/IncredibleOffer-logo.svg";
import amazingDailyLogo from "../../../../assets/logos/deal_of_the_day.webp";

// utils
import { toFarsiNumber } from "../../../../utils/number";
import { formatPrice } from "../../../../utils/price";

// icons
import { GoChecklist } from "react-icons/go";
import { HiOutlineLockClosed } from "react-icons/hi";
// start
const AmazingSlider = forwardRef(({ products }, ref) => {
  return (
    <div
      ref={ref}
      className="flex gap-5 overflow-x-auto scroll-smooth hide-scrollbar "
    >
      {products.map((item) => {
        const price = item.pricing.price;
        const discount = item.pricing.discountPercent;
        const finalPrice = item.pricing.finalPrice;

        const rating = item.rating.value;
        const count = item.inventory.stock;
        const inStock = item.inventory.inStock;

        const image = item.images?.[0];

        return (
          <Link
            key={item.id}
            to={`/amazing/${item.id}`}
            className="min-w-[200px] h-[420px] lg:min-w-[400px] lg:h-[250px]
              bg-white items-center  overflow-hidden
             rounded-2xl p-4 hover:shadow-xl transition "
          >
            {/* logo */}
            <img src={amazingLogo} alt="amazingLogo" />
            {/* cards */}
            <div className="grid grid-rows-2 lg:grid-cols-2 items-center shrink-0 ">
              <img
                src={image}
                className="w-full h-20 lg:h-40 object-contain"
                alt="image"
              />

              <div>
                <h3 className="text-sm text-gray-600 line-clamp-1 h-10">
                  {item.title}
                </h3>

                {/* stock */}
                <div className="mt-3 text-xs">
                  {!inStock ? (
                    <span className="text-red-500">ناموجود</span>
                  ) : count < 5 ? (
                    <span className="text-red-500">
                      تنها {toFarsiNumber(count)} عدد باقی مانده
                    </span>
                  ) : (
                    <span className="text-gray-500 flex gap-1 items-center">
                      <GoChecklist className="text-blue-500" />
                      موجود در انبار
                    </span>
                  )}

                  {/* discount */}
                  <div className="flex mt-5 justify-between">
                    <span className="bg-red-700 text-white text-xs rounded-full py-2 px-4">
                      %{toFarsiNumber(discount)}
                    </span>
                    <div className="flex items-center  text-yellow-400 text-sm">
                      ★
                      <span className="text-gray-500 text-xs mr-1">
                        {toFarsiNumber(rating.toFixed(1))}
                      </span>
                    </div>
                  </div>
                </div>

                {/* rating + price */}
                <div className="flex flex-col mt-5 justify-between">
                  <div className="text-end">
                    <p className="font-bold text-lg">
                      {formatPrice(finalPrice)} تومان
                    </p>

                    {discount > 0 && (
                      <p className="text-sm text-gray-400 line-through">
                        {formatPrice(price)} تومان
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
      {/* lastCard */}
      <div
        className="relative min-w-[200px] lg:min-w-[400px] lg:h-[250px]
       rounded-2xl overflow-hidden bg-gray-100 "
      >
        <div className="grid grid-rows-2 lg:grid-cols-2 items-center shrink-0 ">
          <img
            src={amazingDailyLogo}
            alt="amazingDailyLogo"
            className="w-full h-full object-contain "
          />

          {/* Glass Layer */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xs rounded-2xl"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <HiOutlineLockClosed className="text-white text-7xl px-2 bg-red-600 rounded-full" />
            <p className="text-white font-bold pt-2">
              شرح تخفیف از ساعاتی دیگر
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AmazingSlider;
