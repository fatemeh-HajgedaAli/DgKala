// src/features/cartPart/CartFooter.jsx
import React from "react";
import { Link } from "react-router-dom"; // 👈 اضافه شد
import { formatPrice } from "../../utils/price";

export default function CartFooter({ totalPrice, closeCart }) {
  return (
    <div className="border-t border-slate-100 p-3 flex items-center justify-between bg-white">
      <div>
        <p className="text-[10px] text-slate-400">مبلغ قابل پرداخت</p>
        <div className="font-black text-sm text-slate-800">
          {formatPrice(totalPrice)}
          <span className="text-xs text-slate-500 mr-1 font-normal">تومان</span>
        </div>
      </div>

      <Link
        to="checkout/shipping"
        onClick={closeCart}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-xs font-bold transition-colors text-center"
      >
        ثبت سفارش
      </Link>
    </div>
  );
}
