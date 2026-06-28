import { GoChecklist } from "react-icons/go";

export default function SellerCard({ product, count = 0 }) {
  const isOutOfStock = count === 0;
  const isLowStock = count > 0 && count < 5;
  const isAvailable = count >= 5;

  return (
    <>
      <div className=" justify-start p-2">
        <h3 className="font-bold text-lg mb-3 ">فروشنده</h3>

        <p>{product?.seller?.name}</p>

        {product?.guarantee && (
          <p className="text-sm text-green-600 mt-2 pb-2 border-b-1 border-gray-200">
            {product.guarantee}
          </p>
        )}

        {/* stock status */}
        <span
          className={`flex items-center text-sm pb-2 border-b-1 border-gray-200   gap-2  mt-3 ${
            isOutOfStock
              ? "text-red-600 font-light"
              : "text-gray-600 font-light"
          }`}
        >
          {isOutOfStock ? (
            <span>ناموجود</span>
          ) : isLowStock ? (
            <span className="text-red-500">
              تنها {count} عدد در انبار باقی مانده
            </span>
          ) : (
            <span className="flex items-center gap-1 text-blue-600">
              <GoChecklist className="text-xl" />
              موجود در انبار دیجی‌کالا
            </span>
          )}
        </span>
      </div>
    </>
  );
}
