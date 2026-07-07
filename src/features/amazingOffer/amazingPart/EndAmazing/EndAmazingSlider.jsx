import { forwardRef } from "react";
import { Link } from "react-router-dom";
// icons
import { GoChecklist } from "react-icons/go";
// psrts
import { toFarsiNumber } from "../../../../utils/number";
import { formatPrice } from "../../../../utils/price";
// logo
import offerLogo from "../../../../assets/logos/IncredibleOffer-logo.svg";
// start
const EndAmazingSlider = forwardRef(({ products }, ref) => {
  // jsx
  return (
    <>
      <div
        ref={ref}
        className="flex gap-px rounded-sm overflow-x-auto scroll-smooth hide-scrollbar bg-gray-200"
      >
        {products.map((item) => {
          const { price, discountPercent, finalPrice } = item.pricing;
          const { value: rating } = item.rating;
          const { stock, inStock } = item.inventory;

          const image = item.images?.[0];

          // درصد موجودی برای Progress
          const progress = Math.min((stock / 20) * 100, 100);

          return (
            <Link
              key={item.id}
              to={`/amazing/${item.id}`}
              className="min-w-[260px]  bg-white 
             p-4 hover:shadow-lg transition"
            >
              <img
                src={offerLogo}
                alt="offerLogo"
                className="mx-15 items-center"
              />
              {/* عکس محصول */}
              <img
                src={image}
                alt={item.title}
                className="w-full h-44 object-contain mt-5"
              />

              {/* عنوان */}
              <h3 className="mt-3 text-sm text-gray-700 line-clamp-2 h-10">
                {item.title}
              </h3>

              {/* امتیاز */}
              <div className="flex justify-end items-center mt-3 text-sm">
                <span className="text-yellow-500">★</span>

                <span className="mr-1 text-gray-600">
                  {toFarsiNumber(rating.toFixed(1))}
                </span>
              </div>

              {/* قیمت */}
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <span className="bg-red-600 text-white text-xs rounded-full px-2 py-1">
                    %{toFarsiNumber(discountPercent)}
                  </span>

                  <span className="font-bold">
                    {formatPrice(finalPrice)} تومان
                  </span>
                </div>

                {discountPercent > 0 && (
                  <p className="text-left text-sm text-gray-400 line-through mt-1">
                    {formatPrice(price)} تومان
                  </p>
                )}
              </div>

              {/* وضعیت موجودی */}
              <div className="mt-5">
                {inStock ? (
                  <>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-red-500">
                        تنها {toFarsiNumber(stock)} عدد باقی مانده
                      </span>

                      <span className="text-gray-500">
                        {toFarsiNumber(stock)}
                      </span>
                    </div>

                    {/* Progress */}
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-500 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-1 text-red-500 text-sm">
                    <GoChecklist />
                    ناموجود
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
});

export default EndAmazingSlider;
// finish
