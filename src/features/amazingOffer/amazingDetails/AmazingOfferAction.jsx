import { useNavigate } from "react-router-dom";

import { formatPrice } from "../../../utils/price";
import { toFarsiNumber } from "../../../utils/number";

export default function AmazingOfferAction({ product }) {
  const navigate = useNavigate();

  if (!product) return null;

  const handleAddToCart = () => {
    navigate("/cart", {
      state: {
        product,
      },
    });
  };

  return (
    <aside
      className="
      bg-white
      border
      border-gray-200
      rounded-2xl
      p-5
      flex
      flex-col
      gap-5
      md:sticky
      md:top-5
      "
      dir="rtl"
    >
      {/* Seller Header */}
      <div>
        <h3 className="font-bold text-gray-800 text-sm">فروشنده</h3>

        <p className="text-xs text-gray-500 mt-2">۲ فروشنده دیگر</p>
      </div>

      {/* Seller Info */}
      <div className="flex flex-col gap-2">
        <span className="font-bold text-gray-800 text-sm">
          {product.seller?.name || "دیجی‌کالا"}
        </span>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-emerald-600 font-bold">
            {product.seller?.satisfaction || "۹۱.۶٪"}
          </span>

          <span className="text-gray-500">رضایت از کالا</span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="font-bold text-gray-700">
            {product.seller?.performance || "عالی"}
          </span>

          <span className="text-gray-500">عملکرد</span>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Price */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-end gap-2">
          <span
            className="
            bg-red-500
            text-white
            text-xs
            px-2
            py-1
            rounded-full
            "
          >
            {toFarsiNumber(product.pricing?.discountPercent)}٪
          </span>

          <span className="line-through text-gray-400 text-sm">
            {formatPrice(product.pricing?.price)}
          </span>
        </div>

        <div className="flex items-center justify-end">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(product.pricing?.finalPrice)}

            <span className="text-xs text-gray-500 mr-1">تومان</span>
          </span>
        </div>
      </div>

      {/* Buy Button */}
      <button
        onClick={handleAddToCart}
        className="
        w-full
        bg-red-500
        hover:bg-red-600
        text-white
        font-bold
        py-3
        rounded-xl
        transition
        "
      >
        افزودن به سبد خرید
      </button>

      {/* Guarantee */}
      <div className="text-sm text-gray-700">
        🛡️
        <span className="mr-2">
          {product.guarantee || "گارانتی ۱۸ ماهه شرکتی"}
        </span>
      </div>

      <hr className="border-gray-200" />

      {/* Shipping */}
      <div className="flex flex-col gap-3 text-xs text-gray-600">
        <div>
          <p className="font-bold text-gray-800">روش و هزینه ارسال</p>

          <p className="mt-2">🚚 توسط دیجی‌کالا • وابسته به سبد</p>
        </div>

        <div
          className="
        bg-green-50
        rounded-xl
        p-3
        text-green-700
        "
        >
          ارسال سریع و رایگان دیجی‌کالا
          <br />
          فقط تهران و کرج
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Digiclub */}
      <div
        className="
        flex
        items-center
        justify-between
        text-xs
        "
      >
        <span className="font-bold text-gray-800">دیجی‌کلاب</span>

        <span className="text-purple-600">⭐ ۱۵۰ امتیاز دیجی‌کلاب</span>
      </div>
    </aside>
  );
}
