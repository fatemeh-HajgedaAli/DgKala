// src/features/product/components/SellerCard.jsx
import React from "react";
import { GoShieldCheck } from "react-icons/go"; // استفاده درست از این آیکون
import { BsShop } from "react-icons/bs";
import { IoStorefrontOutline } from "react-icons/io5";
import { HiOutlineSparkles } from "react-icons/hi2";
import PriceCard from "./PriceCard";
import DeliveryTruck from "../../../../assets/logos/free-delivery-car.svg"; // اصلاح علامت مساوی (=) به from
import { Plus, Minus, Trash2 } from "lucide-react";
import { toFarsiNumber } from "../../../../utils/number";

export default function SellerCard({
  product,
  cartItem,
  handleIncrease,
  handleDecrease,
  handleRemove,
  handleAddToCart,
  navigate,
}) {
  const stock = product?.inventory?.stock ?? 0;
  const inStock = product?.inventory?.inStock ?? false;

  const isOutOfStock = !inStock || stock === 0;
  const isLowStock = inStock && stock > 0 && stock < 5;

  return (
    <div className="flex flex-col w-full space-y-4">
      <h3 className="font-bold text-sm text-gray-800 mb-1">فروشنده</h3>

      {/* نام فروشنده */}
      <div className="flex items-center gap-3 text-xs text-gray-700">
        <BsShop className="text-base text-gray-500" />
        <div className="flex flex-col">
          <span className="font-medium">
            {product?.seller?.name || "دیجی‌کالا"}
          </span>
          <span className="text-[10px] text-emerald-600 font-light mt-0.5">
            عملکرد عالی
          </span>
        </div>
      </div>

      {/* دکمه یا کنترلر تعداد دسکتاپ */}
      <div className="mt-4">
        {cartItem ? (
          <div className="flex items-center justify-between w-full gap-3">
            {/* باکس شمارنده افقی */}
            <div className="flex items-center gap-4 border border-gray-200 rounded-xl px-3 py-2 bg-white shadow-sm shrink-0">
              <button
                onClick={handleIncrease}
                className="text-red-500 hover:bg-red-50 p-1 rounded transition-colors"
              >
                <Plus size={16} strokeWidth={3} />
              </button>

              <span className="text-sm font-black text-slate-800 min-w-[12px] text-center">
                {toFarsiNumber(cartItem.qty)}
              </span>

              {Number(cartItem.qty) === 1 ? (
                <button
                  onClick={handleRemove}
                  className="text-red-500 hover:bg-red-50 p-1 rounded transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              ) : (
                <button
                  onClick={handleDecrease}
                  className="text-red-500 hover:bg-red-50 p-1 rounded transition-colors"
                >
                  <Minus size={16} strokeWidth={3} />
                </button>
              )}
            </div>

            {/* متن سمت چپ کنترلر */}
            <div className="flex flex-col items-start justify-center flex-1">
              <span className="text-[16px] font-bold text-gray-800">
                در سبد شما
              </span>
              <button
                onClick={() => navigate("/cart")}
                className="text-[10px] font-medium text-cyan-600 mt-0.5 text-right cursor-pointer"
              >
                <span className="text-gray-800">مشاهده در</span> سبد خرید
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="w-full h-12 bg-rose-500 hover:bg-rose-600 text-white text-sm font-bold rounded-xl shadow-sm transition active:scale-[0.98] cursor-pointer"
          >
            افزودن به سبد خرید
          </button>
        )}
      </div>

      {/* گارانتی */}
      {product?.guarantee && (
        <div className="flex items-center gap-3 text-xs text-gray-700 pt-3 border-t border-gray-100">
          {/* اصلاح کامپوننت اشتباه PlatformShield به GoShieldCheck */}
          <GoShieldCheck className="text-lg text-gray-500" />
          <span className="font-medium">{product.guarantee}</span>
        </div>
      )}

      {/* وضعیت موجودی و انبار */}
      <div className="flex items-center gap-3 text-xs pt-3 border-t border-gray-100">
        <IoStorefrontOutline className="text-lg text-gray-500 shrink-0" />
        {isOutOfStock ? (
          <span className="text-red-500 font-medium">ناموجود در انبار</span>
        ) : isLowStock ? (
          <span className="text-amber-600 font-medium">
            تنها {stock} عدد در انبار باقی مانده
          </span>
        ) : (
          <span className="text-blue-500 font-medium">
            موجود در انبار دیجی‌کالا
          </span>
        )}
      </div>

      {/* باکس قیمت داخلی کامپوننت */}
      <div className="pt-2 border-t border-gray-100">
        <PriceCard product={product} />
      </div>

      {/* بخش ارسال رایگان/سریع */}
      {product?.shipping?.fastDelivery && (
        <div className="flex items-center justify-between p-2.5 bg-blue-50/30 rounded-xl border border-blue-100/50 text-xs">
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-1 text-blue-600 font-bold">
              <HiOutlineSparkles size={14} />
              ارسال رایگان سفارش
            </p>
            <p className="text-gray-500 font-light text-[11px]">
              ارسال امروز برای کاربران ویژه
            </p>
          </div>
          <img
            src={DeliveryTruck}
            alt="delivery"
            className="w-12 h-12 object-contain"
          />
        </div>
      )}
    </div>
  );
}
