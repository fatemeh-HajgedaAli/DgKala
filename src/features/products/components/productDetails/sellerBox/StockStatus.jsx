// stock-Status
import { PiEmpty, PiListChecksFill } from "react-icons/pi";
// start
export default function StockStatus({ stock, inStock }) {
  const isOutOfStock = !inStock || stock === 0;
  const isLowStock = inStock && stock > 0 && stock < 5;
// jsx
  return (
    <div className="flex items-center gap-3 text-xs pt-3 border-t border-gray-100">
      {isOutOfStock ? (
        <span className="flex items-center gap-2 text-red-500 font-medium">
          <PiEmpty />
          ناموجود در انبار
        </span>
      ) : isLowStock ? (
        <span className="text-amber-600 font-medium">
          تنها {stock} عدد در انبار باقی مانده
        </span>
      ) : (
        <span className="flex items-center gap-2 text-blue-500 font-medium">
          <PiListChecksFill size={20} />
          موجود در انبار دیجی‌کالا
        </span>
      )}
    </div>
  );
}
