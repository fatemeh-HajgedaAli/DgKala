import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { useMemo } from "react";
import { addBreadcrumb } from "../../../../utils/addBreadcrumb";

export default function ProductDetailsLink({ product }) {
  const productData = useMemo(() => addBreadcrumb(product), [product]);

  return (
    <div className="flex items-center gap-1.5 text-[11px] text-gray-400 py-4 px-4 flex-wrap select-none">
      <Link to="/" className="hover:text-gray-700 transition">
        دیجی‌کالا
      </Link>
      <HiChevronLeft className="text-gray-300 text-xs" />

      {productData.categories?.map((item, index) => {
        const isLast = index === productData.categories.length - 1;

        return (
          <div key={index} className="flex items-center gap-1.5">
            {!isLast ? (
              <Link
                to={`/${item.slug}`}
                className="hover:text-gray-700 transition"
              >
                {item.title}
              </Link>
            ) : (
              <span className="text-gray-500 font-medium">{item.title}</span>
            )}

            {!isLast && <HiChevronLeft className="text-gray-300 text-xs" />}
          </div>
        );
      })}
    </div>
  );
}
