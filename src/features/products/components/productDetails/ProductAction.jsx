import { getFinalPrice, formatPrice } from "../../../../utils/price";

export default function ProductAction({ product }) {
  const price = Number(product?.price || 0);
  const discount = Number(product?.discount || 0);

  const finalPrice = getFinalPrice(price, discount);
  console.log(product);
  console.log(product.price);
  console.log(product.discount);
  return (
    <div className="border p-4 rounded">
      <p>{formatPrice(finalPrice)} تومان</p>

      {discount > 0 && (
        <p className="line-through text-gray-400">{formatPrice(price)} تومان</p>
      )}

      <button className="bg-blue-500 text-white w-full mt-3 p-2 rounded">
        افزودن به سبد خرید
      </button>
    </div>
  );
}
