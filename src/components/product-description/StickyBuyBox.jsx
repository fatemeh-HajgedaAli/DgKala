// Stick-Buy-Box
// icons
import { FiClock } from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";
import { GoChecklist } from "react-icons/go";
// parts
import { toFarsiNumber } from "../../utils/number";
import OfferTimer from "../shared/OfferTimer";
// image
import IncredibleOffer from "../../assets/logos/IncredibleOffer-logo.svg";
import smileLogo from "../../assets/logos/smile-favicon.webp";

// start
export default function StickyBuyBox({ product }) {
  if (!product) return null;

  const { inventory, pricing, guarantee, seller } = product;

  const targetDuration = pricing?.offerDuration || 86400000;
  console.log("Product Data in BuyBox:", product);
  // jsx
  return (
    <div
      className="
        sticky 
       hidden
        lg:block
        top-30
        w-[350px] 
        h-[420px]
        bg-gray-50 
        rounded-xl 
        border-1
        border-gray-200 
        p-4
        shadow-sm
      "
      dir="rtl"
    >
      {/* Top Section: Amazing Offer & Timer */}
      <div className="flex items-center justify-between  pb-3 mb-4">
        <img src={IncredibleOffer} alt="Amazings-Incredible-Offer" />
        <div>
          <OfferTimer duration={targetDuration} variant="product" />
        </div>
      </div>

      {/* Product-details */}
      <div className="flex flex-col gap-2 border-b border-gray-200/60 pb-2">
        <div className="flex items-start gap-3">
          <img
            src={
              // ۱. بررسی آرایه بودن تصاویر و برداشتن اولین عکس
              Array.isArray(product?.images) && product.images[0]
                ? product.images[0].startsWith("http") ||
                  product.images[0].startsWith("data:")
                  ? product.images[0]
                  : new URL(product.images[0], import.meta.url).href
                : "https://via.placeholder.com/60"
            }
            alt={product?.title || "Product"}
            className="w-20 h-20 object-contain rounded-lg border border-gray-200 bg-white p-1 flex-shrink-0"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/60";
            }}
          />
          <div className="flex flex-col gap-1 min-w-0">
            <h4 className="text-xs font-bold text-gray-800 line-clamp-2 leading-5 break-words">
              {product?.title || "عنوان محصول"}
            </h4>
            <p className="text-[11px] text-gray-400 line-clamp-1">
              {product?.subtitle || product?.category || "توضیحات تکمیلی محصول"}
            </p>
            {/* color */}
            <div className="flex items-center gap-2 mt-1">
              {" "}
              <div
                className="w-5 h-5 rounded-full border border-gray-300 bg-white 
               flex items-center justify-center mr-1"
              >
                <div
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: product?.color?.code || "#ffffff" }}
                />
              </div>
              <span className="text-xs text-gray-800 font-bold">
                {product?.color?.name || product?.color || "سفید"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Info List */}
      <div className="space-y-0 mt-2 text-gray-700 text-[10px]">
        {/* Seller */}
        <div className="flex items-start gap-3">
          <img
            src={smileLogo}
            alt="smileLogo"
            className="w-8 h-8 rounded-full"
          />

          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-gray-800">
              {seller?.name || "دیجی‌کالا"}
            </span>
            <span className="text-[11px] text-gray-400">
              رضایت کالا: {seller?.satisfaction || "۹۷٪"}
            </span>
          </div>
        </div>

        {/* Guarantee */}
        <div className="flex items-center gap-3 border-t border-gray-50 pt-3">
          <span className="text-gray-800 text-lg">
            <GoShieldCheck />
          </span>
          <span className="font-medium text-gray-600">
            {guarantee || "گارانتی ۱۸ ماهه شرکتی"}
          </span>
        </div>

        {/* Inventory Status */}
        <div className="flex items-start gap-3 border-t border-gray-50 pt-2">
          <span className="text-cyan-500 text-lg mt-0.5">
            <GoChecklist />
          </span>
          <div className="flex flex-col gap-1">
            <span className="font-medium text-gray-600">
              {inventory?.inStock ? "موجود در انبار دیجی‌کالا" : "ناموجود"}
            </span>
            <span className="text-[11px] text-cyan-600 font-medium">
              ارسال دیجی‌کالا از ۲ ساعت دیگر
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="flex flex-col gap-1 mt-2">
        {/* Discount & Original Price Row */}
        <div className="flex items-center justify-end h-6 gap-2">
          {pricing?.price && (
            <span className="text-xs text-gray-400 line-through font-medium tracking-wide">
              {toFarsiNumber(pricing.price.toLocaleString())}
            </span>
          )}
          <span className="bg-[#ef4056] text-white px-1.5 py-0.5 rounded-full text-[11px] font-bold">
            {pricing?.discountPercent
              ? `٪${toFarsiNumber(pricing.discountPercent)}`
              : "٪۳۵"}
          </span>
        </div>

        {/* Final Price Row */}
        <div className="flex items-center justify-end gap-1 ">
          <span className="text-xl font-bold text-gray-800 tracking-tight">
            {pricing?.finalPrice
              ? toFarsiNumber(pricing.finalPrice.toLocaleString())
              : "۱۹,۵۹۹,۰۰۰"}
          </span>
          <span className="text-[10px] text-gray-600 font-bold">تومان</span>
        </div>
      </div>

      {/* Add To Cart Button */}
      <button
        disabled={inventory?.inStock === false}
        className={`
          mt-2
          w-full
          py-3
          rounded-xl
          text-white
          font-bold
          text-sm
          transition-colors
          ${
            inventory?.inStock !== false
              ? "bg-[#ef4056] hover:bg-[#e03148]"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
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
