import { Link } from "react-router";
import { FaFire } from "react-icons/fa";
import TrendingItems from "./TrendingItems";

export default function TrendingProductsMobile() {
  return (
    <div className="lg:hidden bg-white mx-3 mt-5 rounded-2xl border border-gray-200 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <button className="text-sky-500 text-sm">
          <Link to="/">مشاهده همه</Link>
        </button>

        <p className="flex items-center gap-2 font-medium text-lg">
          <FaFire className="text-orange-400" />
          داغ‌ترین چند ساعت گذشته
        </p>
      </div>

      {/* Slider */}
      <div
        className="
          flex
          overflow-x-auto
          gap-3
          scroll-smooth
          hide-scrollbar
        "
      >
        <TrendingItems />
      </div>
    </div>
  );
}
