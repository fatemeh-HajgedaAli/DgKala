// items
import { trendingProductsData } from "../../../data/trendingProducts.data";

export default function TrendingItems() {
  return (
    <>
      {trendingProductsData.map((product) => (
        <div
          key={product.id}
          className="
            flex items-center gap-3
            w-[240px] sm:w-[260px] lg:w-[300px]
            shrink-0
            py-2
          "
        >
          <img
            src={product.image}
            alt={product.title}
            className="
              w-16 h-16
              sm:w-18 sm:h-18
              lg:w-20 lg:h-20
              object-contain
            "
          />

          <span
            className="
              text-2xl lg:text-3xl
              font-bold text-blue-400
            "
          >
            {product.id.toLocaleString("fa")}
          </span>

          <p
            className="
              text-xs sm:text-sm
              text-gray-700
              leading-6
              border-b border-gray-200
              py-4 flex-1
            "
          >
            {product.title}
          </p>
        </div>
      ))}
    </>
  );
}
