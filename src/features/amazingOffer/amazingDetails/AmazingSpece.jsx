// START
export default function AmazingSpece({ product }) {
  // جلوگیری از کرش در صورت نبود ویژگی‌ها
  if (!product?.features || product.features.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-2" dir="rtl">
      <h2 className="font-bold text-xl mb-6 text-gray-800 pb-2 border-b-2 border-red-500 w-fit">
        مشخصات فنی
      </h2>

      <div className="space-y-4 max-w-3xl">
        {product.features.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 py-3 border-b border-gray-100 last:border-0 gap-4"
          >
            <span className="text-gray-400 text-sm font-medium col-span-1">
              {item.name}
            </span>
            <span className="text-gray-700 text-sm font-semibold col-span-2">
              {String(item.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
// FINISH
