// amazing-Description

import { FiShield, FiCheckCircle, FiClock, FiUser } from "react-icons/fi";

import { toFarsiNumber } from "../../utils/number";

export default function StickyBuyBox({ product }) {
  if (!product) return null;

  const { inventory, pricing, guarantee, seller, title, images } = product;

  return (
    <div
      className="
      sticky
      mx-6
      top-24
      bg-red-50
      rounded-2xl
      border
      border-slate-100
      p-5
      shadow-sm
      "
      dir="rtl"
    >
      {/* Special Sale */}

      <div className="flex items-center justify-between mb-4 pb-3">
        <h3 className="text-red-500 font-black text-xl">فروش ویژه</h3>
      </div>

      {/* Product Image + Title */}

      <div
        className="
        flex
        flex-row
        sm:flex-row
        items-center
        gap-3
        border-b
        border-gray-300
        "
      >
        {images?.[0] && (
          <img
            src={images[0]}
            alt={title}
            className="
            w-32
            h-32
            object-contain
            mx-auto
            mb-5
            "
          />
        )}

        <h3
          className="
          text-sm
          font-medium
          text-slate-800
          leading-6
          mb-5
          text-justify
          "
        >
          {title}
        </h3>
      </div>

      {/* Product Information */}

      <div
        className="
        space-y-4
        mb-5
        mt-4
        border-b
        border-slate-100
        pb-5
        "
      >
        {/* Seller */}

        <div className="flex items-center gap-3 text-sm text-slate-700">
          <span className="text-slate-400 text-lg">
            <FiUser />
          </span>

          <div className="flex flex-col">
            <span className="font-bold">{seller?.name || "مکمل فارماسی"}</span>

            <span
              className="
              text-[11px]
              text-emerald-600
              font-medium
              "
            >
              رضایت کالا: {seller?.satisfaction || "۹۷٪"}
            </span>
          </div>
        </div>

        {/* Guarantee */}

        <div className="flex items-center gap-3 text-sm text-slate-600">
          <span className="text-slate-400 text-lg">
            <FiShield />
          </span>

          <span>{guarantee || "ضمانت اصالت و سلامت فیزیکی کالا"}</span>
        </div>

        {/* Inventory */}

        <div className="flex items-center gap-3 text-sm text-slate-600">
          <span className="text-emerald-500 text-lg">
            <FiCheckCircle />
          </span>

          <span>
            {inventory?.inStock ? "موجود در انبار فروشنده" : "ناموجود"}
          </span>
        </div>

        {/* Expire Notice */}

        <div
          className="
          flex
          items-center
          gap-3
          bg-amber-50/70
          border
          border-amber-200/60
          rounded-xl
          p-3
          text-amber-800
          "
        >
          <span className="text-amber-600 text-lg">
            <FiClock />
          </span>

          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-xs">اطلاعیه مصرف کالا:</span>

            <span
              className="
              text-[11px]
              text-amber-700/90
              font-medium
              "
            >
              تاریخ انقضا بین دو تا سه ماه آینده می‌باشد.
            </span>
          </div>
        </div>
      </div>

      {/* Price */}

      <div className="flex flex-col gap-4">
        <div
          className="
          flex
          items-end
          justify-end
          gap-2
          "
        >
          {pricing?.price && (
            <div
              className="
                text-xs
                text-slate-400
                line-through
                font-medium
                "
            >
              {toFarsiNumber(pricing.price.toLocaleString())}
            </div>
          )}

          <span
            className="
            bg-red-500
            text-white
            px-2
            py-0.5
            rounded-md
            text-xs
            border
            border-red-500
            font-black
            "
          >
            {pricing?.discountPercent
              ? `٪${toFarsiNumber(pricing.discountPercent)}`
              : "٪۷۹"}
          </span>
        </div>

        <div
          className="
          flex
          items-center
          justify-end
          mt-1
          "
        >
          <div
            dir="rtl"
            className="
            flex
            items-center
            gap-1
            "
          >
            <span
              className="
              text-2xl
              font-black
              text-slate-900
              "
            >
              {pricing?.finalPrice
                ? toFarsiNumber(pricing.finalPrice.toLocaleString())
                : "۹۷,۰۲۰"}
            </span>

            <span
              className="
              text-[11px]
              text-slate-500
              font-bold
              "
            >
              تومان
            </span>
          </div>
        </div>
      </div>

      {/* Add To Cart Button */}

      <button
        disabled={inventory?.inStock === false}
        className={`
        mt-6
        w-full
        py-3.5
        rounded-xl
        text-white
        font-black
        text-sm
        transition-all
        active:scale-95

        ${
          inventory?.inStock !== false
            ? `
          bg-red-500
          hover:bg-red-600
          shadow-md
          shadow-red-500/10
          hover:scale-[1.01]
          `
            : `
          bg-slate-300
          cursor-not-allowed
          `
        }

        `}
      >
        {inventory?.inStock !== false
          ? "افزودن به سبد خرید"
          : "ناموجود در انبار"}
      </button>
    </div>
  );
}
