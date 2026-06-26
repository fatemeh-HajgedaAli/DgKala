export default function ProductInfo({ product }) {
  return (
    <div>
      <h1 className="text-xl font-bold">{product.title}</h1>

      <p className="mt-3 text-gray-600">
        {product.description || "توضیحات محصول"}
      </p>

      <p className="mt-3 text-red-500 font-bold">
        {product.price.toLocaleString()} تومان
      </p>
    </div>
  );
}
