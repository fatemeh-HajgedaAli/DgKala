import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/price";

export default function CartSummary() {
  const { state } = useCart();

  const totalItems = state.items.reduce((sum, item) => sum + item.qty, 0);

  const totalOriginalPrice = state.items.reduce(
    (sum, item) => sum + item.pricing.price * item.qty,
    0,
  );

  const totalFinalPrice = state.items.reduce(
    (sum, item) => sum + item.pricing.finalPrice * item.qty,
    0,
  );

  const totalDiscount = totalOriginalPrice - totalFinalPrice;

  return (
    <div className="bg-white rounded-xl shadow-sm border p-5 sticky top-5">
      <h2 className="text-xl font-bold mb-6">خلاصه سفارش</h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>تعداد کالا</span>
          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between">
          <span>جمع قیمت کالاها</span>
          <span>{formatPrice(totalOriginalPrice)} تومان</span>
        </div>

        <div className="flex justify-between text-green-600">
          <span>سود شما</span>
          <span>{formatPrice(totalDiscount)} تومان</span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold">
          <span>مبلغ قابل پرداخت</span>
          <span>{formatPrice(totalFinalPrice)} تومان</span>
        </div>
      </div>

      <button className="w-full mt-6 bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg">
        ادامه فرایند خرید
      </button>
    </div>
  );
}
