// amazing-Links
import { Link } from "react-router-dom";
// start
export default function AmazingDetailsLink({ product }) {
  // jsx
  return (
    <div className="max-w-8xl mx-auto px-2 py-3 text-sm text-gray-500">
      <div
        className="
          flex
          items-center
          gap-2
          flex-nowrap
          overflow-x-auto
          whitespace-nowrap
          scrollbar-hide
        "
        dir="rtl"
      >
        <Link to="/home" className="hover:text-gray-800 transition shrink-0">
          خانه
        </Link>

        <span className="shrink-0">/</span>

        <Link to="/amazing" className="hover:text-gray-800 transition shrink-0">
          محصولات شگفت‌انگیز
        </Link>

        <span className="shrink-0">/</span>

        <span className="text-gray-700 font-medium shrink-0">
          {product?.category}
        </span>

        <span className="shrink-0">/</span>

        <span className="text-gray-900 font-semibold shrink-0">
          {product?.title}
        </span>
      </div>
    </div>
  );
}
// finish
