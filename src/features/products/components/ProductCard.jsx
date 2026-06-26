import { Link } from "react-router-dom";
import { getFinalPrice } from "../../../utils/price";
import { toFarsiNumber } from "../../../utils/number";

export default function ProductCard({ item }) {
  const discount = item.discount || 0;
  const image = item.images?.[0];

  const finalPrice = getFinalPrice(item.price, discount);

  const rating = item.rating || 0;
  const fullStars = Math.floor(rating);

  return (
    <Link
      to={`/product/${item.id}`}
      className="
        group flex flex-col
        bg-white border border-gray-200
        p-3 rounded-lg
        transition-all duration-300
        hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
      "
    >
      {/* BADGE + STOCK */}
      <div className="flex justify-between items-center mb-2">
        {discount > 0 ? (
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
            %{toFarsiNumber(discount)}
          </span>
        ) : (
          <span />
        )}

        <span
          className={`text-xs px-2 py-1 rounded-full ${
            item.stock > 0
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-500"
          }`}
        >
          {item.stock > 0 ? `موجود (${toFarsiNumber(item.stock)})` : "ناموجود"}
        </span>
      </div>

      {/* IMAGE */}
      <img
        src={image}
        alt={item.title}
        className="h-44 w-full object-contain group-hover:scale-105 transition"
      />

      {/* TITLE */}
      <h3 className="mt-3 text-sm font-bold line-clamp-2">{item.title}</h3>

      {/* DESCRIPTION */}
      <p className="text-xs text-gray-500 mt-2 line-clamp-2">
        {item.description}
      </p>

      {/* ⭐ RATING */}
      <div className="flex items-center gap-1 mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm">
            {i < fullStars ? "★" : "☆"}
          </span>
        ))}

        <span className="text-xs text-gray-500 mr-1">
          ({toFarsiNumber(rating)})
        </span>
      </div>

      {/* PRICE */}
      <div className="mt-auto pt-4">
        <p className="text-gray-800 font-bold text-lg">
          {toFarsiNumber(finalPrice)} تومان
        </p>

        {discount > 0 && (
          <p className="text-gray-400 text-sm line-through">
            {toFarsiNumber(item.price)}
          </p>
        )}
      </div>
    </Link>
  );
}
