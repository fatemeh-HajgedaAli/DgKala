// amazing-Products
import React from "react";
import { amazingProducts } from "../../data/categoriesData/amazingData";
import { Link } from "react-router-dom";
// start

export default function AmazingProducts() {
  return (
    <div className="w-full bg-rose-600 py-6 mt-10 rounded-2xl">
      {/* HEADER */}
      <div className="flex items-center justify-between px-5 text-white mb-4">
        <h2 className="text-lg font-bold">شگفت‌انگیزها</h2>

        <Link
          to="/offers"
          className="text-sm bg-white text-rose-600 px-3 py-1 rounded-full"
        >
          مشاهده همه
        </Link>
      </div>

      {/* SCROLL AREA */}
      <div className="flex gap-4 overflow-x-auto px-4 hide-scrollbar">
        {amazingProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="min-w-[160px] bg-white rounded-xl p-3 flex-shrink-0 hover:scale-105 transition"
          >
            {/* IMAGE */}
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="w-full h-[120px] object-contain"
            />

            {/* TITLE */}
            <h3 className="text-xs mt-2 line-clamp-2">{product.title}</h3>

            {/* PRICE */}
            <div className="mt-2">
              <div className="text-sm font-bold text-gray-800">
                {product.pricing.finalPrice.toLocaleString()} تومان
              </div>

              <div className="text-xs text-gray-400 line-through">
                {product.pricing.price.toLocaleString()}
              </div>
            </div>

            {/* DISCOUNT */}
            {product.pricing.discountPercent > 0 && (
              <div className="text-xs text-rose-600 mt-1">
                {product.pricing.discountPercent}% تخفیف
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
// finish