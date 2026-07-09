import { bestSellingData } from "../../../data/componentData/bestSelling.data";

export default function BestSellingItems() {
  return (
    <>
      {bestSellingData.map((product) => (
        <div
          key={product.id}
          className="flex items-center gap-2 w-[300px] py-2 "
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-20 h-20 object-contain"
          />

          <span className="text-3xl font-bold text-blue-400">
            {product.id.toLocaleString("fa")}
          </span>

          <p className="text-sm text-gray-700 leading-7 border-b border-gray-200 py-5">
            {product.title}
          </p>
        </div>
      ))}
    </>
  );
}
