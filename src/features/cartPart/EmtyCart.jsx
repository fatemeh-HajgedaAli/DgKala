import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold">سبد خرید شما خالی است</h2>

      <p className="text-gray-500 mt-3">
        هنوز محصولی به سبد خرید اضافه نکرده‌اید.
      </p>

      <Link
        to="/products"
        className="inline-block mt-6 bg-rose-500 text-white px-6 py-3 rounded-lg"
      >
        مشاهده محصولات
      </Link>
    </div>
  );
}
