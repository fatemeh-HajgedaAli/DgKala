import { GoShieldCheck } from "react-icons/go";
import { BsShop } from "react-icons/bs";
import { IoStorefrontOutline } from "react-icons/io5";
import { HiOutlineSparkles } from "react-icons/hi2";
import PriceCard from "./PriceCard";
import DeliveryTruck from "../../../../assets/logos/free-delivery-car.svg";

export default function SellerCard({ product }) {
  const stock = product?.inventory?.stock ?? 0;
  const inStock = product?.inventory?.inStock ?? false;

  const isOutOfStock = !inStock || stock === 0;
  const isLowStock = inStock && stock > 0 && stock < 5;

  return (
    <div className="flex flex-col w-full space-y-4">
      <h3 className="font-bold text-sm text-gray-800 mb-1">فروشنده</h3>

      {/* نام فروشنده */}
      <div className="flex items-center gap-3 text-xs text-gray-700">
        <BsShop className="text-base text-gray-500" />
        <div className="flex flex-col">
          <span className="font-medium">
            {product?.seller?.name || "دیجی‌کالا"}
          </span>
          <span className="text-[10px] text-emerald-600 font-light mt-0.5">
            عملکرد عالی
          </span>
        </div>
      </div>

      {/* گارانتی */}
      {product?.guarantee && (
        <div className="flex items-center gap-3 text-xs text-gray-700 pt-3 border-t border-gray-100">
          <GoShieldCheck className="text-lg text-gray-500" />
          <span className="font-medium">{product.guarantee}</span>
        </div>
      )}

      {/* وضعیت موجودی و انبار */}
      <div className="flex items-center gap-3 text-xs pt-3 border-t border-gray-100">
        <IoStorefrontOutline className="text-lg text-gray-500 shrink-0" />
        {isOutOfStock ? (
          <span className="text-red-500 font-medium">ناموجود در انبار</span>
        ) : isLowStock ? (
          <span className="text-amber-600 font-medium">
            تنها {stock} عدد در انبار باقی مانده
          </span>
        ) : (
          <span className="text-blue-500 font-medium">
            موجود در انبار دیجی‌کالا
          </span>
        )}
      </div>

      {/* باکس قیمت داخلی کامپوننت */}
      <div className="pt-2 border-t border-gray-100">
        <PriceCard product={product} />
      </div>

      {/* بخش ارسال رایگان/سریع */}
      {product?.shipping?.fastDelivery && (
        <div className="flex items-center justify-between p-2.5 bg-blue-50/30 rounded-xl border border-blue-100/50 text-xs">
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-1 text-blue-600 font-bold">
              <HiOutlineSparkles size={14} />
              ارسال رایگان سفارش
            </p>
            <p className="text-gray-500 font-light text-[11px]">
              ارسال امروز برای کاربران ویژه
            </p>
          </div>
          <img
            src={DeliveryTruck}
            alt="delivery"
            className="w-12 h-12 object-contain"
          />
        </div>
      )}
    </div>
  );
}
