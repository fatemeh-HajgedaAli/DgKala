export default function ProductAction({ product }) {
  return (
    <div className="border p-4 rounded">
      <p className="font-bold">{product.price.toLocaleString()} تومان</p>

      <button className="bg-blue-500 text-white w-full mt-3 p-2 rounded">
        افزودن به سبد خرید
      </button>
    </div>
  );
}
