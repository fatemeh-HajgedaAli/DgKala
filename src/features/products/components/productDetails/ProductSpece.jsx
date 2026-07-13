export default function ProductSpece({ product }) {
  if (!product?.specifications) return null;

  return (
    <div className="py-6 border-t border-gray-200 w-full">
      <h2 className="font-bold text-base mb-6 text-gray-800">مشخصات فنی</h2>

      <div className="space-y-2 w-full">
        {product.specifications.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-stretch text-xs border-b border-gray-100 pb-2 bg-gray-50/40 rounded-lg p-2"
          >
            {/* عنوان کلید مشخصه */}
            <span className="sm:w-1/4 text-gray-400 font-light py-1 pr-2">
              {item.name}
            </span>

            {/* مقدار مشخصه */}
            <span className="sm:w-3/4 text-gray-800 font-medium py-1 pr-2 sm:pr-6 border-r-0 sm:border-r border-gray-200">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
