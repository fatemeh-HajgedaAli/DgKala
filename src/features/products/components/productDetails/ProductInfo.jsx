import { getFinalPrice, formatPrice } from "../../../../utils/price";

export default function ProductInfo({ product }) {
  const discount = product.discount || 0;
  const finalPrice = getFinalPrice(product.price, discount);
// jsx
  return (
    <div>
      <h1 className="text-xl font-bold">{product.title}</h1>

      <p className="mt-3 text-gray-600">
        {product.description || "توضیحات محصول"}
      </p>

      <div className="mt-4">
        <p className="text-red-500 text-2xl font-bold">
          {formatPrice(finalPrice)} تومان
        </p>

        {discount > 0 && (
          <p className="text-gray-400 line-through">
            {formatPrice(product.price)} تومان
          </p>
        )}
      </div>
    </div>
  );
}
// finish