import { Link } from "react-router-dom";

export default function DetailsLink({ product }) {
  return (
    <div className="max-w-7xl mx-auto px-5 py-3 text-sm text-gray-500">
      <div className="flex items-center gap-2 flex-wrap">
        <Link to="/home" className="hover:text-gray-800 transition">
          خانه
        </Link>

        <span>/</span>

        <Link to="/amazing" className="hover:text-gray-800 transition">
          محصولات شگفت‌انگیز
        </Link>

        <span>/</span>

        <span className="text-gray-700 font-medium">{product?.category}</span>

        <span>/</span>

        <span className="text-gray-900 font-semibold">{product?.title}</span>
      </div>
    </div>
  );
}
