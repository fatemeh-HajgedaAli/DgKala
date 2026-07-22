// icons
import { GoShieldCheck, GoChecklist } from "react-icons/go";
// parts
import { toFarsiNumber } from "../../utils/number";
import OfferTimer from "../shared/OfferTimer";
// image
import IncredibleOffer from "../../assets/logos/IncredibleOffer-logo.svg";
import smileLogo from "../../assets/logos/smile-favicon.webp";

export default function StickyBuyBox({ product }) {
  if (!product) return null;

  const { inventory, pricing, guarantee, seller } = product;
  const targetDuration = pricing?.offerDuration || 86400000;

  // دریافت آدرس تصویر اول محصول با بررسی Safely
  const mainImage =
    Array.isArray(product?.images) && product.images[0]
      ? product.images[0].startsWith("http") ||
        product.images[0].startsWith("data:")
        ? product.images[0]
        : new URL(product.images[0], import.meta.url).href
      : "https://via.placeholder.com/60";

  return (
    <div
      dir="rtl"
      /* 
        نکته کلیدی: top-28 یا top-[120px] فاصله از بالای صفحه هنگام اسکرول است.
        کلاس z-20 باعث می‌شود باکس بالاتر از سایر بخش‌ها قرار بگیرد اما زیر z-index نوبار (که معمولاً z-30 یا z-40 است) بماند.
      */
      className="sticky top-[120px] z-20 hidden lg:block w-[350px] h-fit bg-gray-50 rounded-2xl border border-gray-200 p-4 shadow-sm transition-all duration-200"
    >
      {/* Top Section: Amazing Offer & Timer */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200/60">
        <img src={IncredibleOffer} alt="پیشنهاد شگفت‌انگیز" className="h-5" />
        <OfferTimer duration={targetDuration} variant="product" />
      </div>

      {/* Product Details Header */}
      <div className="flex items-start gap-3 pb-3 border-b border-gray-200/60">
        <img
          src={mainImage}
          alt={product?.title || "Product"}
          className="w-16 h-16 object-contain rounded-xl border border-gray-200 bg-white p-1 shrink-0"
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

          {/* Color Tag */}
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="w-4 h-4 rounded-full border border-gray-300 bg-white flex items-center justify-center">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: product?.color?.code || "#ffffff" }}
              />
            </div>
            <span className="text-[11px] text-gray-700 font-medium">
              {product?.color?.name || product?.color || "سفید"}
            </span>
          </div>
        </div>
      </div>

      {/* Product Info List */}
      <div className="space-y-3 my-3 text-gray-700 text-xs">
        {/* Seller */}
        <div className="flex items-center gap-3">
          <img
            src={smileLogo}
            alt="لوگوی فروشنده"
            className="w-7 h-7 rounded-full"
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
        <div className="flex items-center gap-3 border-t border-gray-200/50 pt-2.5">
          <GoShieldCheck className="text-gray-700 text-lg shrink-0" />
          <span className="font-medium text-gray-600 text-xs">
            {guarantee || "گارانتی ۱۸ ماهه شرکتی"}
          </span>
        </div>

        {/* Inventory Status */}
        <div className="flex items-start gap-3 border-t border-gray-200/50 pt-2.5">
          <GoChecklist className="text-cyan-500 text-lg shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span className="font-medium text-gray-600">
              {inventory?.inStock !== false
                ? "موجود در انبار دیجی‌کالا"
                : "ناموجود"}
            </span>
            <span className="text-[11px] text-cyan-600 font-medium">
              ارسال دیجی‌کالا از ۲ ساعت دیگر
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="flex flex-col gap-1 pt-2 border-t border-gray-200/60">
        {/* Discount & Original Price */}
        <div className="flex items-center justify-end h-5 gap-2">
          {pricing?.price && (
            <span className="text-xs text-gray-400 line-through font-medium">
              {toFarsiNumber(pricing.price.toLocaleString())}
            </span>
          )}
          {pricing?.discountPercent && (
            <span className="bg-[#ef4056] text-white px-1.5 py-0.5 rounded-full text-[10px] font-bold">
              ٪{toFarsiNumber(pricing.discountPercent)}
            </span>
          )}
        </div>

        {/* Final Price */}
        <div className="flex items-center justify-end gap-1">
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
        className={`mt-3 w-full py-3 rounded-xl text-white font-bold text-xs transition-colors duration-200 ${
          inventory?.inStock !== false
            ? "bg-[#ef4056] hover:bg-[#e03148]"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        {inventory?.inStock !== false
          ? "افزودن به سبد خرید"
          : "ناموجود در انبار"}
      </button>
    </div>
  );
}
