import { forwardRef } from "react";
import { Link } from "react-router-dom";

// logo
import Amazing from "../../../assets/logos/IncredibleOffer-logo.svg";

// utils
import { toFarsiNumber } from "../../../utils/number";
import { formatPrice } from "../../../utils/price";

// icons
import { GoChecklist } from "react-icons/go";

const AmazingSlider = forwardRef(({ products }, ref) => {
  return (
    <div
      ref={ref}
      className="flex gap-5 overflow-x-auto scroll-smooth hide-scrollbar"
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
            className="min-w-[600px] h-[250px] bg-white items-center
             rounded-2xl p-3 hover:shadow-xl transition"
          >
            <img src={Amazing} alt="" />

            <div className="grid grid-cols-2 items-center">
              <img src={image} className="w-full h-40 object-contain" alt="" />

              <div>
                <h3 className="mt-3 text-sm text-gray-600 line-clamp-1 h-10">
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
    </div>
  );
});

export default AmazingSlider;
