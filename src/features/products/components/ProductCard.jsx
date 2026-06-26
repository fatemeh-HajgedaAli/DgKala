import { Link } from "react-router-dom";
import { getFinalPrice, formatPrice } from "../../../utils/price";

export default function ProductCard({ item }) {
  const discount = item.discount || 0;
  const image = item.images?.[0] || "/placeholder.png";

  const price = Number(item.price || 0);
  const finalPrice = getFinalPrice(price, discount);

  const rating = Number(item.rating ?? 0);
  const fullStars = Math.floor(rating);

  const inStock = (item.stock ?? 0) > 0;

  return (
    <Link
      to={`/product/${item.id}`}
      className=" bg-white border-1 border-gray-200 p-3 mt-12 hover:shadow-xl transition"
    >
      {/* badge + stock */}
      <div className="flex justify-between mb-2">
        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
          %{formatPrice(discount)}
        </span>

        <span
          className={`text-xs px-2 py-1 rounded-full ${
            inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
          }`}
        >
          {inStock ? "موجود" : "ناموجود"}
        </span>
      </div>

      {/* image */}
      <img
        src={image}
        className="h-40 w-full object-contain group-hover:scale-105 transition"
      />

      {/* title */}
      <h3 className="text-sm font-bold mt-2 line-clamp-2">{item.title}</h3>

      {/* rating */}
      <div className="text-yellow-400 text-sm mt-1">
        {"★".repeat(fullStars)}
        {"☆".repeat(5 - fullStars)}
        <span className="text-gray-500 text-xs mr-1">
          ({formatPrice(rating)})
        </span>
      </div>

      {/* price */}
      <div className="mt-2 space-y-1 float-left">
        {/* final price */}
        <p className="font-bold text-lg">{formatPrice(finalPrice)} تومان</p>

        {/* original price */}
        {discount > 0 && (
          <p className="text-sm text-gray-400 line-through">
            {formatPrice(price)} تومان
          </p>
        )}
      </div>
    </Link>
  );
}
