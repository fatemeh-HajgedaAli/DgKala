import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { useMemo } from "react";
import { addBreadcrumb } from "../../../../utils/addBreadcrumb";

export default function DetailsLink({ product }) {
  const productData = useMemo(() => addBreadcrumb(product), [product]);

  return (
    <div className="hidden lg:flex items-center gap-2 text-sm text-gray-500 mb-5 flex-wrap my-5 mx-8">
      {productData.categories?.map((item, index) => {
        const isLast = index === productData.categories.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            {!isLast ? (
              <Link to={`/${item.slug}`} className="hover:text-red-500">
                {item.title}
              </Link>
            ) : (
              <span className="text-gray-800">{item.title}</span>
            )}

            {!isLast && <HiChevronLeft className="text-xs" />}
          </div>
        );
      })}
    </div>
  );
}
